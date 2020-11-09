import React, { useContext } from 'react'

import { GlobalContext } from '../Context/GlobalContext'


export const AccountSummary = () => {

    const { transcations } = useContext(GlobalContext)
    console.log(transcations)

    const amounts = transcations.map((transcation) => transcation.amount)

    console.log(amounts)


    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)

    return (
        <div className="summary">
            <div className="income">
                Income
    <p className="plus">${income}</p>
            </div>
            <div className="expense">
                Expense
    <p className="minus">${expense}</p>
            </div>
        </div>
    )
}
