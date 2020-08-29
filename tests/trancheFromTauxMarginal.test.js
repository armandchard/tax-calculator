const { tranchesFromTauxMarginal } = require("../src/utils/calculs")

describe('Tranche from taux marginal', () => {
    it('should return [0] if taux is 0', () => {
        expect(tranchesFromTauxMarginal(0)).toEqual([0])
    })
    
    it('should return [0, 1] if taux is 1', () => {
        expect(tranchesFromTauxMarginal(1)).toEqual([0, 1])
    })
    
    it('should return [0, 1715.34, 1902] if taux is 3617.34', () => {
        expect(tranchesFromTauxMarginal(3617.34)).toEqual([0, 1715.34, 1902])
    })
    
    it('should return [0, 944.35] if taux is 944.35', () => {
        expect(tranchesFromTauxMarginal(944.35)).toEqual([0, 944.35])
    })

})