import React from "react";
import "./CategoryText.scss";

function  CategoryText(props) {
    return (
        <p className="text-muted CategoryText">{props.text}</p>
    )
}

export default CategoryText;