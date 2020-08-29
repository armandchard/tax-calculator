const { tauxMarginal } = require("../src/utils/calculs")

describe('tauxMarginal', () => {
    it('should be 3617.34 for a single who has 32000 as salary without children', () => {
        expect(tauxMarginal([0, 1715.34, 1902])).toBe(3617.34)
    })

    it('should be 944.35 for a pair who have 55950 as salary with 2 children', () => {
        expect(tauxMarginal([0, 944.35])).toEqual(944.35)
    })
})