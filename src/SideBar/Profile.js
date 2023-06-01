import React from 'react';
import styles from './profile.module.css'
import { FaMehBlank } from "react-icons/fa"
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Profile() {
    const [open, setOpen] = useState(false);

    const Menues = ['Add an existing account', 'Log out @Demo1234']

    return (
        <div className={styles.profile}>
            <div>
                <img style={{ borderRadius: "50%" }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" width="30px"
                    height="30px" alt="" />
            </div>
            <div className={styles.info}>
                <span>Demo</span>
                <span>@Demo1234</span>
            </div>
            <div className={styles.icons} onClick={() => setOpen(!open)}>
                <FaMehBlank />
            </div>
            {open &&
                <div className={styles.menu}>
                    <ul>
                        {Menues.map((menu) => (
                            <li className={styles.li} key={menu}>
                                {menu}
                            </li>
                        ))
                        }
                    </ul>
                </div>}




        </div>
    )
}
