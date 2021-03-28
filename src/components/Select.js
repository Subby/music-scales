import React from "react";

const Select = ({label, fieldName, defaultValue, options, onChangeHandler}) => {
    return (
        <div>
            <label htmlFor={fieldName}>{label}</label>

            <select name={fieldName} id={fieldName} value={defaultValue} onChange={(e) => onChangeHandler(e.target.value)}>
                {options}
            </select>
        </div>
        )

};

export default Select;