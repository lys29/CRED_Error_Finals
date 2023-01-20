import styles from './Title.module.css';
import Logo from '../images/logo.png';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
//Done with the Frontend - dana
const Title = () => {
    const [ registerFname, setRegisterFname ] = useState('');
    const [ registerLname, setRegisterLname ] = useState('');
    const [ registerEmail, setRegisterEmail ] = useState('');
    const [ registerAddress, setRegisterAddress ] = useState('');
    const [ registerPnumber, setRegisterPnumber ] = useState('');
    const [ registerAlumni, setRegisterAlumni ] = useState('');
    const [ registerReason, setRegisterReason ] = useState('');

    const Submit = () => {
        Swal.fire({
            icon: "success",
            title: "",
            text: "Your registration had been send!",
            showConfirmButton: true
        })
        axios({
            method: "post",
            data: {
                Fname: registerFname,
                Lname: registerLname,
                Email: registerEmail,
                Address: registerAddress,
                Pnumber: registerPnumber,
                Alumni: registerAlumni,
                Reason: registerReason

            },
            withCredentials: true,
            url: "http://localhost:3000/"
        }).then((response) => {
            if(response.data.message === "Username Already Taken"){
                console.log('done!');
            }
        })
    };
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.right}>
                    </div>

                    <div className={styles.left}>
                            <div className={styles.above}><img src={Logo}/><h6>Technological University of the Philippines - Cavite</h6></div>
                                <div className={styles.left1}>
                                    <h2>Registration Form</h2>
                                        <p>Please enter your following details to register</p>
                                        <div className={styles.spread}>
                                            <input type='fn' onChange={e => setRegisterFname(e.target.value)} placeholder='First Name'></input>
                                            <div className={styles.spread1}>
                                                <input type='ln' onChange={e => setRegisterLname(e.target.value)} placeholder='Last Name'></input>
                                            </div>
                                        </div>
                                        <div className={styles.spread}>
                                            <input type='ea' onChange={e => setRegisterEmail(e.target.value)} placeholder='Email Address'></input>
                                        </div>
                                        <div className={styles.spread}>
                                            <input type='add' onChange={e => setRegisterAddress(e.target.value)} placeholder='Address'></input>
                                        </div>
                                        <div className={styles.spread}>
                                            <input type='pn' onChange={e => setRegisterPnumber(e.target.value)} placeholder='Phone Number'></input>
                                            <div className={styles.spread1}>
                                                    <input type='alumni' onChange={e => setRegisterAlumni(e.target.value)} placeholder='Old TUP Student?'></input>
                                            </div>
                                        </div>
                                        <div className={styles.spread}>
                                            <textarea rows="3" cols="30" onChange={e => setRegisterReason(e.target.value)} placeholder='Why do you want to study here?'></textarea>
                                        </div>
                                        <div className={styles.spread}>
                                            <button onClick={Submit}><strong>Submit</strong></button>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Title;