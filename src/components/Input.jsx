import React from 'react'

export default function Input({type = 'number', label, placeholder, onChange, id=Math.random().toString(36).substr(2, 9), ...props}) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id={id}>{label}</span>
            </div>
            <input type={type} className="form-control" placeholder={placeholder} aria-label={placeholder} aria-describedby={id} onChange={(e) => onChange(e.target)} {...props} />
        </div>
    )
}
