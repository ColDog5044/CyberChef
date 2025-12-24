/**
 * @author Collin Laney [collin.laney@coldogstudios.com]
 * @copyright Crown Copyright 2025
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

/**
 * Fang Email Address operation
 */
class FangEmailAddress extends Operation {

    /**
     * FangEmailAddress constructor
     */
    constructor() {
        super();

        this.name = "Fang Email Address";
        this.module = "Default";
        this.description = "Takes a 'Defanged' email address and 'Fangs' it. Meaning, it removes the alterations (defanged) that render it useless so that it can be used again.";
        this.infoURL = "https://isc.sans.edu/forums/diary/Defang+all+the+things/22744/";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
        this.checks = [
            {
                pattern: "^[a-zA-Z0-9._%+-]+\\[@\\][a-zA-Z0-9.-]+\\[\\.\\][a-zA-Z]{2,}$",
                flags: "i",
                args: [],
                output: {
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
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
        input = input.replace(/\[@\]/g, "@");
        input = input.replace(/\[\.\]/g, ".");

        return input;
    }

}

export default FangEmailAddress;
