import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
const Signup = () =>{
    let navigate = useNavigate();
    const {register, handleSubmit, formState:{ errors}, reset }= useForm();
    const onSubmit =(data) => {
        console.log(data);
        navigate("/signupnext");
        reset();
    };
    // console.log(errors);
    return(
        <div>
            <header>
                <h2>VISH LOGO</h2>
                <a onClick={() => {navigate("/");}} className='top-btn'>Log in</a>
            </header>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign Up</h1>
                    <div className='spacing'>
                        <input type={"text"} placeholder='Surname' {...register("Surname", {required: '*Surname is required'})}/>
                        {errors.Surname && (<small>{errors.Surname.message}</small>)}
                    </div>
                    <div className='spacing'>
                        <input type={"text"} placeholder='Shortname'{...register("Shortname", {required: '*Shortname is required'})}/>
                        {errors.Shortname && (<small>{errors.Shortname.message}</small>)}
                        <p>This name is displayed to venue owners</p>
                    </div>
                    <div className='spacing'>
                        <select {...register("Gender", {required: '*Gender is required'})}>     
                            <option value=""  >Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <small>{errors.Gender && (<p>{errors.Gender.message}</p>)}</small>
                    </div>
                    <div>
                        <input  type={"submit"} value={"Continue"} className='submit-btn'/>
                    </div>
                
                </form>
                <center>
                    <p className='spacing'>OR</p>
                    <button className='google-btn'>GOOGLE</button>
                </center>
            </div>
        </div>

    )
}
export default Signup;