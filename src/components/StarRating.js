import React from "react";

export default function StarRating({count, value, inactiveColor='#ddd', activeColor='#f00', size=24, onChange, disabled}) {
    const starts = Array.from({length:count}, () => <span className="fas fa-star"></span>)

    const handleChange = (value) => {
        onChange(value + 1);
    }
    
    return(
        <>
            {starts.map((s, index) => {
                let style = inactiveColor;
                if (index < value) {
                    style = activeColor;
                }
                return (
                    <button className={"start"}
                    disabled = {disabled}
                    key={index}
                    style={{color: style, width: size, height: size, fontSize: size}}
                    onClick={() => handleChange(index)}>{s}</button>
                )
            })}
        </>
    )
}