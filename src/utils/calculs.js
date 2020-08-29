import { Tranches } from "../data/Tranches"

/**
 * Parts count
 * @param {number} children - The children count
 * @param {boolean} couple - Pair
 */
export const parts = (children = 0, couple = false) => {
    return 1 + (couple ? 1 : 0) + childrenParts(children)
}

/**
 * Children parts count
 * @param {number} children The children count
 */
export const childrenParts = (children) => {
    return (children == 3 || children == 4) ? children - 1
        : (children < 3 ? children / 2 : 3 + (children - 4))
}

/**
 * Salary by parts
 * @param {number} salaire The annual salary
 * @param {number} parts The parts count
 */
export const imposableSurParts = (salaire, parts) => {
    return salaire / parts
}

/**
 * Calculates the tranches
 * @param {number} salaire The annual salary
 * @param {boolean} couple Pair
 * @param {number} children Children count
 */
export const trancheImpot = (salaire, couple, children) => {
    const _parts = parts(children, couple)
    let imposableP = imposableSurParts(salaire, _parts)
    let tranches = []
    for (let i = 0; i < Tranches.length; i++) {
        let previous = i <= 0 ? { max: 0 } : Tranches[i - 1]
        let current = Tranches[i]
        if (imposableP < current.max) return [...tranches, parseFloat(((imposableP - previous.max - 1) * current.percent).toFixed(2))]
        const impot = (current.max - previous.max - 1) * current.percent
        tranches = [...tranches, parseFloat(impot.toFixed(2))]
    }

    return tranches
}

/**
 * Return the taux marginal
 * @param {Array<number>} tranches The tranches
 */
export const tauxMarginal = (tranches = []) => {
    return parseFloat(tranches.reduce((p, c) => (p + parseFloat(c)), 0).toFixed(2))
}

/**
 * Salary by parts calculation by salary, pair and children
 * @param {number} salaire The annual salary
 * @param {boolean} couple Pair
 * @param {number} children The children count
 */
export const impots = (salaire, couple, children) => {
    return imposableSurParts(salaire, parts(children, couple))
}

/**
 * The final impot
 * @param {number} salaire The annual salary
 * @param {boolean} couple Pair
 * @param {number} children The children count
 */
export const impotFinal = (salaire, couple = false, children = 0) => {
    return Math.round(tauxMarginal(trancheImpot(salaire, couple, children)) * parts(children, couple))
}

/**
 * Calculate the taux marginal from the final impot
 * @param {number} impotFinal Impot final
 * @param {boolean} couple Pair
 * @param {number} children The children count
 */
export const tauxMarginalFromImpotFinal = (impotFinal, couple = false, children = 0) => {
    return parts(children, couple) == 0 ? 0 : (impotFinal / parts(children, couple))
}

/**
 * 
 * @param {number} taux The remaining of the taux marginal after calculating each tranche
 * @param {boolean} couple Pair
 * @param {number} children The children count
 */
export const tranchesFromTauxMarginal = (taux = 0) => {
    let tranches = []
    Tranches.some((tranche, index) => {
        const previous = index > 0 ? Tranches[index - 1] : { max: 0, percent: 0 }
        const maxTaux = (tranche.max - previous.max - 1) * tranche.percent
        if (taux <= maxTaux) {
            tranches = [...tranches, parseFloat(taux.toFixed(2))]
            return true
        } else {
            tranches = [...tranches, parseFloat(maxTaux.toFixed(2))]
            taux -= parseFloat(maxTaux.toFixed(2))
            return false
        }
    })

    return tranches
}

/**
 * Retrieve the imposableByParts from tranches
 * @param {Array<number>} tranches The tranches
 */
export const imposableSurPartsFromTranches = (tranches = []) => {
    if (tranches.length == 0) return 0
    const lastItem = tranches[tranches.length - 1]
    const previous = tranches.length - 1 > 0 ? Tranches[tranches.length - 2] : { max: 0, percent: 0 }
    return Tranches[tranches.length - 1].percent == 0 ? 0 : lastItem / Tranches[tranches.length - 1].percent + 1 + previous.max
}

/**
 * Calculate the salary from the final impot
 * @param {number} impotFinal The final impot
 * @param {boolean} couple Pair
 * @param {number} children The children count
 */
export const salaryFromImpotFinal = (impotFinal, couple = false, children = 0) => {
    return parts(children, couple) * imposableSurPartsFromTranches(tranchesFromTauxMarginal(tauxMarginalFromImpotFinal(impotFinal, couple, children)))
}