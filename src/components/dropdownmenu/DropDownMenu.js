import React from "react";

export default function DropDownMenu({ name, id, className, data }) {

    return (
        <select name={name} id={id} className={className}>
            {data.map((elt) => (
                <option key={elt.name} value={elt.name}>
                    {elt.name}
                </option>
            ))}
        </select>
    );
}
