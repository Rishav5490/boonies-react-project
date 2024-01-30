import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import phone from '../images/phone.png';
import location from '../images/location.png';
const Header = () => {
  // const [rishav,setRishav]=useState([])



 /* const getApiData = async() => {
     const res = await fetch("https://fakestoreapi.com/products")
     const data =await res.json()
     setRishav(data)
     console.log(data)
   
 
 
     
     
   }
 
    useEffect(()=>{
     getApiData()
    },[]) 




   const getApiData =async() => {
    const a = 10
    const b = 20
    const c = (a + b)
    console.log(c)



    for (var i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        console.log("Even Number", i)
      }
      else if (i % 2 != 0) {
        console.log("Odd Number", i)
      }
    }

    const arr = "Rishav"
    const arr2 = "Himanshu"
    const arr3 = "abhishek"
    const arr4 = []

    for (let i = 0; i <= arr.length; i++) {
      for (let j = 0; j <= arr2.length; j++) {
        for (let k = 0; k <= arr3.length; k++){

          if (arr[i] === arr2[j]) {
            if (arr[i] === arr3[k]) {
              arr4.push(arr[i])
            }
          }
      }
    }
  }

  console.log(arr4)
  console.log(i)


}


useEffect(() => {
  getApiData()
}, [])*/


return (
  <>
    <br />
    <div class="rishav">

      <div>
        <a href="/"><img src={logo} /></a>
      </div>
      <div className="abhishek">
        <legend><img src={phone} /></legend>
        Drop A Line
        <br />
        +000 (123) 456 88
      </div>
      <div className="abhishek0">
        <legend><img src={location} /></legend>
        Email Address
        <br />
        theboonies@gmail.com
      </div>
    </div>
    <div className="abhishek3">
      <ul>
        <button>
        <li>
          <a href="/destination">DESTINATION</a>
        </li>
        <li>
          <a href="stays">STAYS^</a>
          
          <select>
            <option></option>
            <option>Cottages</option>
            <option>Tents</option>
            <option>Tree House</option>
            <option>Camp</option>
            <option>Hut</option>
          </select>
        </li>
        <li>
          <a href="/blogs">BLOGS</a>
        </li>
        <li>
          <a href="our story">OUR STORY</a>
        </li>
        <li>
          <a href="/contact">CONTACT US</a>
        </li>
      
        <li>
          <a href="sreach bar">SREACH PLACE</a>
        </li>
        <li>
          <a href="log in">LOGIN /</a>
        </li>
        <li>
          <a href="register">SIGN</a>
        </li>
       <li> <strong>BECOME A HOST</strong></li>
       </button>
      </ul>
      
</div>
    


    {/* {abhi.map((ele,key)=>(
        <div key={key}>
          {ele.id}{ele.cetegory}
         
        </div>
 ))}  */}

  </>
)
}

export default Header