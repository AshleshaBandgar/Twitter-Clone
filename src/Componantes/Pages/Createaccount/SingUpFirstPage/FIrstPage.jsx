//step1
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import React, { useState } from 'react'
import styles from './FirstPage.module.css'
import { Link } from 'react-router-dom'

import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";


const Custemize = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function HandleClick(e) {
    e.preventDefault();
    if (name === "") {
      alert("name is required")
    }
    else if (phone === "") {
      alert("phone is required")
    } else if (email === "") {
      alert("email is required")
    }
    else if (password === "") {
      alert("password is required")
    } else {
      localStorage.setItem('name', name)
      localStorage.setItem('phone', phone)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      alert("Registered Successfully")
    }

  }

  return (
    <>
      <div className={styles.Logobox}>
        <header className={styles.header}>
          <p>
            {" "}
            <ArrowBackIcon className={styles.arrowLogo} />
          </p>
          {/* <h2>Step 1 of 5</h2> */}
        </header>

        <h1>Create your account</h1>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              border: 1,
              borderColor: "grey.500",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <p>
            <TextField
              id="filled-basic"
              type="text"
              label="name"
              variant="filled"
              onChange={e => setName(e.target.value)}
              value={name}
              fullWidth

            //   required
            />
          </p>
          <p>
            {" "}
            <TextField
              id="filled-basic"
              type="number"
              label="Phone"
              variant="filled"
              pattern="[0-9]"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              // ref={name}
              fullWidth
            //   required
            />
          </p>
          <p>
            <TextField
              id="filled-basic"
              type="email"
              label="Email"
              variant="filled"
              onChange={e => setEmail(e.target.value)}
              value={email}
              fullWidth

            //   required
            /></p>
          <p>
            <TextField
              id="filled-basic"
              type="passwoed"
              label="Password"
              variant="filled"
              onChange={e => setPassword(e.target.value)}
              value={password}
              fullWidth

            //   required
            />
          </p>


        </Box>
        <p><Link>forget password? </Link></p>
        <h4> Date of birth</h4>

        <p>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              border: 1,
              borderColor: "grey.500",
            },
          }}
          noValidate
          autoComplete="off"
        >

          <p> <TextField
            id="filled-basic"
            type="date"
            //   label="Phone"
            variant="filled"
            fullWidth
            required

          />
          </p>

        </Box>
        <button className={styles.NextBtn} onClick={HandleClick}> <Link to='/singin' className={styles.NextButton}>Next</Link></button>
      </div>
    </>
  );
};

export default Custemize;