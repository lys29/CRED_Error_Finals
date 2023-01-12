import styles from './Title.module.css';
import Logo from '../images/logo.png';
import Button from './Button.jsx';
import Swal from "sweetalert2";
//Done with the Frontend - dana
const Title = () => {
    const Submit = () => {
        Swal.fire({
            icon: "success",
            title:"SUCCESSFULLY SUBMIT",
            text: "You have successfully submit your registration form!",
            showDenyButton: false,
            confirmButtonText: 'Ok',
        })
    }
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
                                            <input type='fn' placeholder='First Name'></input>
                                            <div className={styles.spread1}>
                                                <input type='ln' placeholder='Last Name'></input>
                                            </div>
                                        </div>
                                        <div className={styles.spread}>
                                            <input type='ea' placeholder='Email Address'></input>
                                        </div>
                                        <div className={styles.spread}>
                                            <input type='pn' placeholder='Phone Number'></input>
                                            <div className={styles.spread1}>
                                                    <input type='alumni' placeholder='Old TUP Student?'></input>
                                            </div>
                                        </div>
                                        <div className={styles.tick}>
                                            <input type="checkbox" id="yes" name="yes"></input>
                                            <label for="yes">Yes</label>
                                            <input type="checkbox" id="no" name="no"></input>
                                            <label for="no">No</label>
                                        </div>
                                        <div className={styles.spread}>
                                            <textarea rows="3" cols="30" placeholder='Why do you want to study here?'></textarea>
                                        </div>
                                        <div className={styles.spread}>
                                            <Button><strong onClick={Submit}>Submit</strong></Button>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Title;