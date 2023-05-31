import React, { useState } from 'react'
import styles from './Setpswd.module.css'
// import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import {Link, useNavigate} from 'react-router-dom'
const Singin = () => {
    
    const[password , setPassword] = useState("") 
    const navigate = useNavigate();  

    const userpassword = localStorage.getItem("password") ? localStorage.getItem("password") : "123" 
   
    const handleClick = (e) => {
      e.preventDefault();
      if(password === userpassword){
        alert("login successfull")
        navigate('/SecondPage')
      } else{
        alert("Wrong Password")
      }
    };

   
  return (

    <div className={styles.container}>
    <div className={styles.Logobox}>
    <div className={styles.close}>
    <CloseIcon />
  
    <TwitterIcon className={styles.twitterLogo} style={{color: "#00ACEE", fontSize: "2em" }}/>
    </div>
    
     <TextField id="filled-basic" 
     label="Password" 
     variant="filled" 
     style={{width:"50%" , m:3}}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
       
        />
         <Link>Forgot password?</Link>
        <div className={styles.downbtn}>
        <button className={styles.btn} onClick={handleClick}><Link to = '/' className={styles.logbtn}>Log in</Link></button>
    
     <br/>
     <p className={styles.footer}>Don't have a account?<Link to= '/singup'> sing Up</Link></p>
    </div>
        </div>
    
      
    </div>
   
  )
}

export default Singin
