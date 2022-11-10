const alnum = require("../../lib/alnum")

describe("alnum.isAlphaNumeric", () => {
    test("0", () => {
        let result = alnum.isAlphaNumeric({ length: 0, charCodeAt: () => 143 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = alnum.isAlphaNumeric({ length: 16, charCodeAt: () => 176 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = alnum.isAlphaNumeric({ length: 64, charCodeAt: () => 224 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = alnum.isAlphaNumeric({ length: 10, charCodeAt: () => 239 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = alnum.isAlphaNumeric({ length: 32, charCodeAt: () => 135 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = alnum.isAlphaNumeric({ length: Infinity, charCodeAt: () => Infinity })
        expect(result).toMatchSnapshot()
    })
})
