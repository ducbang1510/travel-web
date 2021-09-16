import React from "react";

export default function StarRating({count, value, inactiveColor='#ddd', activeColor='#f00', size=24, onChange}) {
    const starts = Array.from({length:count}, () => <i className="fas fa-star"></i>)

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
                    <span className={"start"}
                        key={index}
                        style={{color: style, width: size, height: size, fontSize: size}}
                        onClick={() => handleChange(index)}>{s}</span>
                )
            })}
        </>
    )
}