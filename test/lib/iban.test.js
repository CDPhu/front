const iban = require("../../lib/iban")

describe("iban.isValidIBANNumber", () => {
    test("0", () => {
        let result = iban.isValidIBANNumber("George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = iban.isValidIBANNumber("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = iban.isValidIBANNumber("Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = iban.isValidIBANNumber("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = iban.isValidIBANNumber("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = iban.isValidIBANNumber("")
        expect(result).toMatchSnapshot()
    })
})
