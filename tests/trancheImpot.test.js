const { trancheImpot } = require("../src/utils/calculs")

describe('trancheImpot', () => {
    it('should be [0, 1715.34, 1902] for a single who has 32000 as salary without children', () => {
        expect(trancheImpot(32000, false, 0)).toEqual([0, 1715.34, 1902])
    })

    it('should be [0, 944.35] for a pair who have 55950 as salary with 2 children', () => {
        expect(trancheImpot(55950, true, 2)).toEqual([0, 944.35])
    })
})