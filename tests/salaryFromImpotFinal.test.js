const { salaryFromImpotFinal } = require("../src/utils/calculs")

describe('salaryFromImpotFinal', () => {

    it('should return 0 if the final impot is 0 for singles', () => {
        expect(salaryFromImpotFinal(0)).toEqual(0)
    })

    it('should return 0 if the final impot is 0 for singles with children', () => {
        expect(salaryFromImpotFinal(0, false, 2)).toEqual(0)
    })

    it('should return 0 if the final impot is 0 for pairs', () => {
        expect(salaryFromImpotFinal(0, true, 0)).toEqual(0)
    })

    it('should return 0 if the final impot is 0 for pairs with children', () => {
        expect(salaryFromImpotFinal(0, true, 2)).toEqual(0)
    })

    it('should return 32000 if the final impot is 3617.34 for a single', () => {
        expect(salaryFromImpotFinal(3617.34)).toEqual(32000)
    })

    it('should return 55950 if the final impot is 2833.05 for a pair with 2 children', () => {
        expect(salaryFromImpotFinal(2833.05, true, 2)).toEqual(55950)
    })

})