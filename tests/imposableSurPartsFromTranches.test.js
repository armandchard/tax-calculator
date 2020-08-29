const { imposableSurPartsFromTranches } = require("../src/utils/calculs")

describe('ImposableSurPartsFromTranches', () => {

    it('should return 0 if there is no tranches', () => {
        expect(imposableSurPartsFromTranches()).toEqual(0)
    })

    it('should return 0 if tranches are [0]', () => {
        expect(imposableSurPartsFromTranches([0])).toEqual(0)
    })
    
    it('should return 32000 if tranches are [0, 1715.34, 1902]', () => {
        expect(imposableSurPartsFromTranches([0, 1715.34, 1902])).toEqual(32000)
    })

    it('should return 18650 if tranches are [0, 944.35]', () => {
        expect(imposableSurPartsFromTranches([0, 944.35])).toEqual(18650)
    })

})