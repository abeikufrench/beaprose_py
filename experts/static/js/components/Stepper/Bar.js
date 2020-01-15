import React from "react";
import "./Bar.scss";

const Bar = (props) => {
    const { division } = props;
    return (
        <div className="Bar" style={{
            width: `calc(100% / ${division})`,
            border: "2px solid #FFCB21",
            height: 0
        }}>
            
        </div>
    )
}

export default Bar;