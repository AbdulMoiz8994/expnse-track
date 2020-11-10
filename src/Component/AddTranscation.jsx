// eslint-disable-next-line
import React, { useState, useContext } from 'react'


import { GlobalContext } from '../Context/GlobalContext'

export default function AddTranscation() {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0);

  const { addTranscation } = useContext(GlobalContext)

  const onSubmit = (e) => {
    if(+(amount) === 0){
      alert("PLease type Correct Value")
      return false;
    }
    e.preventDefault();


    const newTranscations = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount
    }
    addTranscation(newTranscations)

    setDescription("")
    setAmount(0)

  }

  return (
    <div className="addTranscation">
      <h3>
        Add Transcation
          </h3>
      <hr />
      <form onSubmit={onSubmit}>
        <label className="label" htmlFor="description">Description</label><br />
        <input className="inputbox" type="text" value={description}  onChange={(e) => setDescription(e.target.value)} required/><br />
        <label className="label" htmlFor="transcationamount">Transcation Amount</label><br />
        <input className="inputbox" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
        <button type="submit" className="btn btn-outline-primary btn-lg col-8">Add Transaction</button>

      </form>
    </div>
  );
}








// 
