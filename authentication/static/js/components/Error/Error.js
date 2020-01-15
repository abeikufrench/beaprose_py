import React, { useState } from 'react'
import "./Error.scss";

export default function Error(props) {
    const [close, setClose] = useState(false);
    const { error, warning} = props;
    if(!close) {
        return (
            <div className="Error row">
                <div className={`col s10 text-center p-2 ${error ? "error" : warning ? "warning" : ""}`}>{props.children}</div>
                <div className="col s2">
                    <span onClick={() => setClose(true)}>&times;</span>
                </div>
            </div>
        )
    } else return null;
}
