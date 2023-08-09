import React, { useRef, useState } from 'react'
import "../styles/insidecard.css"
import { useNavigate } from 'react-router-dom'

const Email = () => {
  const emailRef = useRef(null)
  const [isValidEmail,setIsValidEmail] = useState(true)
  const navigate = useNavigate()
  const validateEmail = (email) => {
    const containsAtSymbol = email.includes('@');
    const containsNumber = /\d/.test(email);
    return containsAtSymbol && containsNumber;
  };
 const handleEmailChange = ()=>{
     const inputValue = emailRef.current.value;
    setIsValidEmail(validateEmail(inputValue))
 }
  const onSubmit = (e)=>{
  e.preventDefault();
    const inputValue = emailRef.current.value;
  if(validateEmail(inputValue)){
    navigate('/successful',{state:{email:inputValue}})
  }else{
    console.log('error');
  }
  }
  return (
     <form  onSubmit={onSubmit}> 
           <div className="error-div">
            <p className='email-adress'>Email address</p>
              {!isValidEmail &&(
            <p className='error'>Valid email required</p>
          )}
          </div>
          <input ref={emailRef}  onChange={handleEmailChange} className={`input-el ${isValidEmail ? '' : 'err'}`}type="email" placeholder='email@company.com'  required/>
          <button className='submit-btn'>Subscribe to monthly newsletter </button>
         
          </form>
  )
}

export default Email