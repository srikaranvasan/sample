import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
const Login = () =>{
    let navigate = useNavigate();
    const {register, handleSubmit, formState:{ errors}, reset }= useForm();
    const onSubmit =(data) => {
        console.log(data);
        reset();
    };
    // console.log(errors);
        // effect runs when user state is updated


    return(
        <div>
            <header>
                <h2>VISH LOGO</h2>
                <a  onClick={() => {navigate("/signup");}} className='top-btn'>Sign Up</a>
            </header>
            <div className='container' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <div className='spacing'>
                        <input type={"number"} placeholder='Phone number' {...register("Number", {required: '*Number is required'})}/>
                        <small>{errors.Number && (<p>{errors.Number.message}</p>)}</small>
                    </div>
                    <div className='spacing'>
                        <input type={"password"} placeholder='Password'{...register("Password", {required: '*Password is required'})}/>
                        <small>{errors.Password && (<p>{errors.Password.message}</p>)}</small>
                    </div>
                    <div className='spacing'>
                        <a>Forgot password?</a>
                    </div>
                    <div className='spacing'>
                        <input type={"submit"} value={"Continue"} className='submit-btn'/>
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
export default Login;