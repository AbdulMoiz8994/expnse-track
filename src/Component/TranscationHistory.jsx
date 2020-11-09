import React, { useContext } from 'react'


import { GlobalContext } from '../Context/GlobalContext'

import { Transcation } from './Transcation'

export const TranscationHistory = () => {

    const { transcations } = useContext(GlobalContext)
    // console.log(transcations)

    return (
        <div className="trans-history">
            <h3>Transcation History</h3>
            <hr />
            <div className="list">
                <ul>
                    {transcations.map((transcation) => (
                        <Transcation key={transcation.id} transcation={transcation} />
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
