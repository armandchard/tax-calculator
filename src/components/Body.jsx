import React, { useState, useEffect, useRef } from 'react'
import Input from './Input'
import { impots, trancheImpot, tauxMarginal, impotFinal, salaryFromImpotFinal, parts, childrenParts, imposableSurParts } from '../utils/calculs'
import { draw } from '../utils/utils'

export default function Body() {
    const [salary, setSalary] = useState(0)
    const [single, setSingle] = useState(true)
    const [children, setChildren] = useState(0)
    const [impots_, setImpots] = useState(0)
    const [salaryOrImpots, setSalaryOrImpots] = useState('salary')
    const image = useRef('')
    const _parts = parts(children, !single)
    const _trancheImpot = trancheImpot(salary, !single, children)
    useEffect(() => {
        if (salaryOrImpots == 'salary') {
            setImpots(impotFinal(salary, !single, children))
            draw(_trancheImpot, ' €').then(d => image.current.src = d)
        }
    }, [salary, children, single])

    useEffect(() => {
        if (salaryOrImpots == 'impots') {
            setSalary(salaryFromImpotFinal(impots_, !single, children))
            draw(_trancheImpot, ' €').then(d => image.current.src = d)
        }
    }, [impots_])

    return (
        <div className="body">
            <div className="row">
                <div className="col-md-4">
                    <Input placeholder="Salaire" label="€" value={salary} onChange={(target) => {
                            setSalary(target.value)
                        }} />
                    <Input type="checkbox" placeholder="Single" label="Single" checked={single} onChange={(target) => {
                        setSingle(target.checked)
                    }} />
                    <Input placeholder="Children" label="Children" value={children} onChange={(target) => {
                        setChildren(target.value)
                    }} />
                    <Input placeholder="Impots" label="€" value={impots_} onFocus={() => {
                        setSalaryOrImpots('impots')
                    }}
                    onBlur={() => {
                        setSalaryOrImpots('salary')
                    }}
                    onChange={(target) => {
                        setImpots(target.value)
                    }} />
                </div>
                <div className="col-md-4">
                    <canvas style={{ display: 'none' }} id="canvas"></canvas>
                    <img ref={image} src={image.current.src} className="img-fluid tranches" alt={'[' + trancheImpot(salary, !single, children).join(', ') + ']'} />
                </div>
                { salary != 0 &&
                <div className="col-md-4">
                    <p>{single ? 'Un célébataire' : 'Le couple'} dispose de {_parts} part{_parts > 1 && 's'} ({single ? 1 : 2} part{!single && 's'} pour {single ? 'le célébataire' : 'le couple'} et {childrenParts(children)} pour les enfants), le revenu net imposable de {salary} € se divise donc en {_parts} = {imposableSurParts(salary, parts(children, !single))} €.</p>
                    <p>Pour le calcul de son impôt, il faut ensuite soumettre ce résultat au barème applicable aux revenus 2020 :</p>
                    <ul>
                        { _trancheImpot.map((tranche, index) => (<li key={index}>{tranche}</li>))}
                    </ul>
                    <p>Taux marginal: { tauxMarginal(_trancheImpot) }</p>
                    <p>Impots final: { impotFinal(salary, !single, children) }</p>
                </div>
                }
            </div>
        </div>
    )
}
