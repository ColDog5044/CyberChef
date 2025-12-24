/**
 * @author Collin Laney [collin.laney@coldogstudios.com]
 * @copyright Crown Copyright 2025
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

/**
 * Defang Email Address operation
 */
class DefangEmailAddress extends Operation {

    /**
     * DefangEmailAddress constructor
     */
    constructor() {
        super();

        this.name = "Defang Email Address";
        this.module = "Default";
        this.description = "Takes an email address and 'Defangs' it, meaning the email becomes invalid, removing the risk of accidentally sending an email to that address.";
        this.infoURL = "https://isc.sans.edu/forums/diary/Defang+all+the+things/22744/";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
        this.checks = [
            {
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                flags: "i",
                args: [],
                output: {
                    pattern: "^[a-zA-Z0-9._%+-]+\\[@\\][a-zA-Z0-9.-]+\\[\\.\\][a-zA-Z]{2,}$",
                    flags: "i"
                }
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        input = input.replace(EMAIL_REGEX, x => {
            return x.replace(/@/g, "[@]").replace(/\./g, "[.]");
        });

        return input;
    }

}

export default DefangEmailAddress;


/**
 * Email address regular expression
 * Simplified version that handles most common email formats
 */
const EMAIL_REGEX = new RegExp("(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})", "gi");
