import React from 'react'
import Result from './Result';
import "./ResultList.scss";

export default function ResultList(props) {
    const { results } = props;
    console.log(results);
    return (
        results.map((result) => (
            <li className="ResultList">
                <Result result={result}/>
            </li>
            )
        )
    )
}
