import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signupnext = () =>{
    let navigate = useNavigate();
   
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required("*Password is required"),
        cpassword: Yup.string()
          .required("*Password is required")
          .oneOf([Yup.ref("password")], "*Passwords do not match"),
        phone: Yup.string()
            .required('*Number is required'),
        mail: Yup.string()
            .required('*Mail is required')

        
      });
      const {register, handleSubmit, formState:{ errors}, reset }= useForm({resolver : yupResolver(formSchema)});
      const onSubmit =(data) => {
          console.log(data);
          navigate("/Otp");
          reset();
      }

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
                        <input type={"email"} placeholder='Mail ID'{...register("mail")}/>
                        {errors.mail && (<small>{errors.mail.message}</small>)}
                    </div>
                    <div className='spacing'>
                        <input type={"number"} placeholder='Phone Number'{...register("phone")}/>
                        {errors.phone && (<small>{errors.phone.message}</small>)}
                    </div>
                    <div className='spacing'>
                        <input type={"Password"} placeholder='Password' {...register("password")}/>
                        {errors.password && (<small>{errors.password.message}</small>)}
                    </div>
                    <div className='spacing'>
                        <input type={"Password"} placeholder='Confirm Password' {...register("cpassword")}/>
                        {errors.cpassword && (<small>{errors.cpassword.message}</small>)}
                    </div>
                    <div className='spacing'>
                        <input type={"submit"} value={"Continue"} className='submit-btn'/>
                    </div>
                </form>      
            </div>
        </div>
    )
}
export default Signupnext;