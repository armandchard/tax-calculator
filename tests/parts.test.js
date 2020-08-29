const { parts, childrenParts } = require("../src/utils/calculs")

describe('Children parts', () => {
    it('should return 0 for no children', () => {
        expect(childrenParts(0)).toBe(0)
    })

    it('should return 0.5 for 1 child', () => {
        expect(childrenParts(1)).toBe(0.5)
    })

    it('should return 1 for 2 children', () => {
        expect(childrenParts(2)).toBe(1)
    })

    it('should return 2 for 3 children', () => {
        expect(childrenParts(3)).toBe(2)
    })

    it('should return 3 for 4 children', () => {
        expect(childrenParts(4)).toBe(3)
    })

    it('should return 4 for 5 children', () => {
        expect(childrenParts(5)).toBe(4)
    })

    it('should return 9 for 10 children', () => {
        expect(childrenParts(10)).toBe(9)
    })
})

describe('Signles parts', () => {
    it('should return 1 for no children', () => {
        expect(childrenParts(0)).toBe(0)
        expect(parts()).toBe(1)
    })

    it('should return 1.5 for 1 child', () => {
        expect(childrenParts(1)).toBe(0.5)
        expect(parts(1)).toBe(1.5)
    })

    it('should return 2 for 2 children', () => {
        expect(childrenParts(2)).toBe(1)
        expect(parts(2)).toBe(2)
    })

    it('should return 3 for 3 children', () => {
        expect(childrenParts(3)).toBe(2)
        expect(parts(3)).toBe(3)
    })

    it('should return 4 for 4 children', () => {
        expect(childrenParts(4)).toBe(3)
        expect(parts(4)).toBe(4)
    })

    it('should return 5 for 5 children', () => {
        expect(childrenParts(5)).toBe(4)
        expect(parts(5)).toBe(5)
    })

    it('should return 10 for 10 children', () => {
        expect(childrenParts(10)).toBe(9)
        expect(parts(10)).toBe(10)
    })
})

describe('Pair parts', () => {
    it('should return 2 for no children', () => {
        expect(parts(0, true)).toBe(2)
    })

    it('should return 2.5 for 1 child', () => {
        expect(parts(1, true)).toBe(2.5)
    })

    it('should return 3 for 2 children', () => {
        expect(parts(2, true)).toBe(3)
    })

    it('should return 3 for 3 children', () => {
        expect(parts(3, true)).toBe(4)
    })

    it('should return 4 for 4 children', () => {
        expect(parts(4, true)).toBe(5)
    })

    it('should return 5 for 5 children', () => {
        expect(parts(5, true)).toBe(6)
    })

    it('should return 10 for 10 children', () => {
        expect(parts(10, true)).toBe(11)
    })
})