const { tranchesFromTauxMarginal, tauxMarginalFromImpotFinal } = require("../src/utils/calculs")

describe('TauxMarginalFromImpotFinal', () => {

    it('should return 0 if the final impot is 0', () => {
        expect(tauxMarginalFromImpotFinal(0)).toEqual(0)
    })

    it('should return 3617.34 if the final impot is 3617.34 for single without children', () => {
        expect(tauxMarginalFromImpotFinal(3617.34)).toEqual(3617.34)
    })

    it('should return 944.35 if the final impot is 2833.05 for pair with 2 children', () => {
        expect(tauxMarginalFromImpotFinal(2833.05, true, 2)).toEqual(944.35)
    })

})