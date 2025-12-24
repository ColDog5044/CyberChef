/**
 * FangEmailAddress tests.
 *
 * @author Collin Laney [collin.laney@coldogstudios.com]
 * @copyright Crown Copyright 2025
 * @license Apache-2.0
 */

import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "Fang Email Address: Valid Defanged Email",
        input: "user[@]example[.]com",
        expectedOutput: "user@example.com",
        recipeConfig: [
            {
                op: "Fang Email Address",
                args: [],
            },
        ],
    },
    {
        name: "Fang Email Address: Multiple defanged emails",
        input: "Contact admin[@]example[.]com or support[@]test[.]org for help",
        expectedOutput: "Contact admin@example.com or support@test.org for help",
        recipeConfig: [
            {
                op: "Fang Email Address",
                args: [],
            },
        ],
    },
    {
        name: "Fang Email Address: Complex defanged email",
        input: "user[.]name+tag[@]sub[.]domain[.]example[.]com",
        expectedOutput: "user.name+tag@sub.domain.example.com",
        recipeConfig: [
            {
                op: "Fang Email Address",
                args: [],
            },
        ],
    },
    {
        name: "Fang Email Address: No defanged email in input",
        input: "This has no defanged email address",
        expectedOutput: "This has no defanged email address",
        recipeConfig: [
            {
                op: "Fang Email Address",
                args: [],
            },
        ],
    }
]);
