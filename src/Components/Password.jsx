import React, { useEffect, useState } from 'react'
import "./Password.css"
import copy from "./rpg_img/images/copy.png"
import current from "./rpg_img/images/generate.png"



function Password() {

  const [password, setPassword] = useState('');
  const generatePassword = () => {
    const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+}{:?><,./;[]=-";

    let newPassword = '';
    let length = 16;

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * allLetters.length);
      newPassword += allLetters[index];
    }

    setPassword(newPassword);
    console.log(newPassword);
  };



  const copyPassword= async() =>{
    if(password.length ===0){
      alert("Please generate the password first");
      return ;
    }
    try {
      await navigator.clipboard.writeText(password);
      alert("Password copied to clipboard");
    }
    catch(error){
      console.error("Password didn't copy" , error);
    }
  }

  // useEffect(()=>{
  //   generatePassword(12);
  // },[])

  return (
    <>
      <div className="main">
        <div className="text">
          <p>Generate a </p>
          <p className='greenText'>Random Password</p>
          <hr className='line' />
        </div>
        <div className="inputField">
          <input type="text"
            placeholder='Password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
          <img src={copy} onClick={copyPassword}/>
        </div>
        <div className="btn">
          <img src={current} />
          <button onClick={generatePassword}> Generate Password </button>
        </div>
      </div>
    </>
  )
}

export default Password