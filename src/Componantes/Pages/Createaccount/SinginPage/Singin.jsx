import React, { useState } from 'react'
import styles from './Singin.module.css'

// import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { FcGoogle } from "react-icons/fc";
import AppleIcon from '@mui/icons-material/Apple';
import {Link, useNavigate} from 'react-router-dom'
const Singin = () => {
     
    const[name, setName] = useState('')  
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const navigate = useNavigate();
    

    const userName = localStorage.getItem('name') ? localStorage.getItem('name') : 'ashlesha'
    const userEmail = localStorage.getItem("email") ? localStorage.getItem("email") : "demo@gmail.com"
    const userPhone = localStorage.getItem("phone") ? localStorage.getItem("phone") : "123456789"


    const handleClick = (e) => {
      e.preventDefault();
      if(name === userName || phone === userPhone || email === userEmail){
         navigate('/Password')
      } else{
        alert("Invalid fields")
      }
      

    };
   
  return (

    <div className={styles.container}>
    <div className={styles.Logobox}>
    <div className={styles.close}>
    <CloseIcon />
    </div>
    <TwitterIcon className={styles.twitterLogo} style={{color: "#00ACEE", fontSize: "2em" }}/>
   
    <h2>Sign In to Twitter</h2>
    <button className={styles.btn}>
   <FcGoogle className={styles.Googlelogo}/>
   sign in with Google</button>
    <button className={styles.btn}>
   <AppleIcon className={styles.Googlelogo}/>
   sign in with apple
   </button>
   <div className={styles.Or}>
        <hr></hr>
        <span className={styles.Orspan}>Or</span>
        </div>
     <TextField id="filled-basic" 
     label="Phone,email, or username" 
     variant="filled" 
     style={{width:"45%" , m:3}}
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
     <button className={styles.btn} onClick={handleClick}>Next</button>
     <button className={styles.btn}>Forgot password?</button>
     <br/>
     <p className={styles.footer} >Don't have a account?<Link to= '/singup'> sing Up</Link></p>
    </div>
      
    </div>
   
  )
}

export default Singin
