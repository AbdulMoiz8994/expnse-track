import React,{useContext} from 'react'

import {GlobalContext} from '../Context/GlobalContext'

export const Balance = () => {
const {transcations}=useContext(GlobalContext);
const amounts=transcations.map((value) => (value.amount));
const totalBalance=amounts.reduce((acc,value) => (acc +=value),0)

    return (
        <div className="balance">
            <h5>CURRENT BALANCE
            <div className="totalamount">
                ${totalBalance}
            </div>
            </h5>
        </div>
    )
}
