const { imposableSurParts } = require("../src/utils/calculs")

describe('Imposable sur parts', () => {

    it('should return 1000 for 3000 salary and 3 parts', () => {
        expect(imposableSurParts(3000, 3)).toBe(1000)
    })

    it('should return 10913 for 54565 salary and 5 parts', () => {
        expect(imposableSurParts(54565, 5)).toBe(10913)
    })
})