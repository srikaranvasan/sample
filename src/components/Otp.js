import React from 'react';
import {useForm} from 'react-hook-form';
const Otp = () =>{
    const {register, handleSubmit, formState:{ errors}, reset }= useForm();
    const onSubmit =(data) => {
        // console.log(data);
        reset();
    };

    return(
        <div>
            <header>
                <h2>VISH LOGO</h2>
                <a></a>
            </header>
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
                <center><h1>OTP</h1></center>
                <div className='spacing'>
                    <input type={"text"} />
                </div>    
                <div className='spacing'>
                    <input type={"checkbox"} className='check-box'{...register("checkBox", {required: 'Accpet the conditions'})}/>By continuing you agree to our <span>T&C</span> and <span>Privacy Policy</span>
                    <small>{errors.checkBox && (<p>{errors.checkBox.message}</p>)}</small>
                </div>
                <div className='spacing'>
                    <input type={"submit"} value={"Verify"} className='submit-btn'/>
                </div>
            </form>
        </div>
    )
}
export default Otp;