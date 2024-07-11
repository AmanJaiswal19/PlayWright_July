const base = require('@playwright/test')

exports.customTest = base.test.extend({
    testdataForContactUs: {
        firstName: "Aman",
        lastName: "Jaiswal",
        email: "amanjaiswal591@gmail.com",
        msg: "I am learning JavaScript"
    }
})