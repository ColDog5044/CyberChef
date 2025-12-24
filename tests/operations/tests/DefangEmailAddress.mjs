/**
 * DefangEmailAddress tests.
 *
 * @author Collin Laney [collin.laney@coldogstudios.com]
 * @copyright Crown Copyright 2025
 * @license Apache-2.0
 */

import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "Defang Email Address: Valid Email",
        input: "user@example.com",
        expectedOutput: "user[@]example[.]com",
        recipeConfig: [
            {
                op: "Defang Email Address",
                args: [],
            },
        ],
    },
    {
        name: "Defang Email Address: Multiple emails",
        input: "Contact admin@example.com or support@test.org for help",
        expectedOutput: "Contact admin[@]example[.]com or support[@]test[.]org for help",
        recipeConfig: [
            {
                op: "Defang Email Address",
                args: [],
            },
        ],
    },
    {
        name: "Defang Email Address: Complex email",
        input: "user.name+tag@sub.domain.example.com",
        expectedOutput: "user[.]name+tag[@]sub[.]domain[.]example[.]com",
        recipeConfig: [
            {
                op: "Defang Email Address",
                args: [],
            },
        ],
    },
    {
        name: "Defang Email Address: No email in input",
        input: "This has no email address",
        expectedOutput: "This has no email address",
        recipeConfig: [
            {
                op: "Defang Email Address",
                args: [],
            },
        ],
    }
]);
