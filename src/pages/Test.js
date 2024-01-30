import React, { useState } from 'react'



const Test = () => {
const [num1,setNum1] =useState("")
const [num2,setNum2] =useState("")
const [sum,setSum]=useState("")
const handleClick = () => {
   setSum(num1+num2)
   console.log(sum.toString)
}
  return (
    <div>
        <div>
            <input type="text" placeholder='enter a num1' onChange={(e)=>setNum1(e.target.value)} />
            <input type="text" placeholder='enter a num2' onChange={(e)=>setNum2(e.target.value)} />
            <input type="number" placeholder='enter a num2' value={sum}/>
            <button onClick={handleClick}>submit</button>
        </div>
    </div>
  )
}

export default Test