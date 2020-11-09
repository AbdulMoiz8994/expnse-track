import React, { useContext } from 'react'

import { GlobalContext } from '../Context/GlobalContext'

export const Transcation = ({ transcation }) => {
    const transcationtype = transcation.amount > 0 ? "liplus" : "liminus";
    const sign = transcation.amount > 0 ? "+" : "-";

    const { delTranscation } = useContext(GlobalContext)
    return (
        <li className={transcationtype}>
            {transcation.description}
            <span>{sign}${Math.abs(transcation.amount)}</span>
            <button className="cross-button" onClick={() => delTranscation(transcation.id)} >X</button>
        </li>
    )
}
//the Math.abs method does that it retruns aboute value whether it is
//positive or negative,-5,+5// the result will be 5 only