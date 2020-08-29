const { impotFinal } = require("../src/utils/calculs")

describe('ImposableSurPartsFromTranches', () => {

    it('should return 0 if salary is 0', () => {
        expect(impotFinal(0)).toEqual(0)
    })

    it('should return 3617 if salary is 32000 single and no children', () => {
        expect(impotFinal(32000,)).toEqual(3617)
    })

    it('should return 2833 if salary is 55950 pair with 2 children', () => {
        expect(impotFinal(55950, true, 2)).toEqual(2833)
    })

})