/**
 * Written by: Jireh Agda    August 1, 2018
 * JavaScript 'module' for custom vee-validate rules
 * 
 * Change Log:
 *   August 4, 2018 - Add rule to prevent empty FASTA labels
 */

export const fastaRule = {
    getMessage(field, params, data) {
        // Return sent message when error (valid = false)
        return data.message
    },
    validate(value) {
        // Returns a Promise that validates the FASTA input
        return new Promise(function(resolve, reject) {
            const fastaSeq = [{}];
            const seqPattern = /[^ACGTRYSWKMBDHVNI-\s]/i

            // Iterate over the set of lines
            const lines = value.split('\n');
            const lineCount = lines.length;
            for (var i = 0; i < lineCount; i++) {
                let currentFasta = fastaSeq[fastaSeq.length-1];

                if (lines[i].startsWith('>')) {
                    let fastaLabel = lines[i].substring(1).trim();

                    // Add the label to the current FASTA object (If a sequence was read before a label,
                    // resolve(false) should have already occurred
                    if (!("label" in currentFasta))
                        currentFasta.label = fastaLabel;
                    // Create new FASTA object unless no sequence has been attached to the latest label
                    else if ("label" in currentFasta && "seq" in currentFasta)
                        fastaSeq.push({ label: fastaLabel });
                    else {
                        resolve({
                            valid: false,
                            data: { message: `Missing FASTA sequence detected (at line ${i})` }
                        });
                    }
                }
                else {
                    // If the sequence line contains invalid characters resolve the promise to false
                    if (lines[i].search(seqPattern) > -1) {
                        resolve({
                            valid: false,
                            data: { message: `Invalid FASTA sequence characters detected (at line ${i})` }
                        });
                    }

                    // If no label is associated with the sequence, resolve false
                    if (!("label" in currentFasta)) {
                        resolve({
                            valid: false,
                            data: { message: `Missing FASTA label detected (at line ${i})` }
                        });
                    }

                    let seqNoWhitespace = lines[i].replace(/\s/g, '');

                    if (!("seq" in currentFasta))
                        currentFasta.seq = seqNoWhitespace;
                    else
                        currentFasta.seq = currentFasta.seq + seqNoWhitespace;
                }
            }

            // Check to see if the last FASTA entry has a sequence
            const lastFasta = fastaSeq[fastaSeq.length-1];
            if (!("label" in lastFasta) || !("seq" in lastFasta)) {
                resolve({
                    valid: false,
                    data: { message: 'Improper FASTA entry detected (at end of input)' }
                });
            }

            // Last check for duplicates (either within labels or within sequences)
            const fastaCount = fastaSeq.length;
            for (var i = 0; i < fastaCount; i++)  {
                let currentLabel = fastaSeq[i].label;
                let currentSeq = fastaSeq[i].seq;

                // Do not allow 'empty' sequences
                if (currentSeq.length < 1) {
                    resolve({
                        valid: false,
                        data: { message: 'Empty FASTA sequence detected'}
                    });
                }

                // Do not allow 'empty' labels either
                if (currentLabel.length < 1) {
                    resolve({
                        valid: false,
                        data: { message: 'Empty FASTA label detected'}
                    });
                }

                for (var j = 0; j < fastaCount; j++) {
                    // Skip when comparing the same FASTA entry
                    if (i != j) {
                        let compareLabel = fastaSeq[j].label;
                        let compareSeq = fastaSeq[j].seq;

                        if (currentLabel == compareLabel) {
                            resolve({
                                valid: false,
                                data: { message: `Duplicate FASTA label detected (in entries ${i+1} and ${j+1})`}
                            });
                        }
                        else if (currentSeq.toLowerCase() == compareSeq.toLowerCase()) {
                            resolve({
                                valid: false,
                                data: { message: `Duplicate FASTA sequence detected (in entries ${i+1} and ${j+1})`}
                            });
                        }
                    }
                }
            }

            // If all checks have been passed, resolve true!
            resolve({ valid: true });
        });
    }
}