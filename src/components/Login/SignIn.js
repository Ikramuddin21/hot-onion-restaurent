import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" ref={register({ required: true })} placeholder="Your name" />
          {errors.name && <span className ="error">Name is required</span>}
          <input name="email" ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className ="error">Email is required</span>}
          <input name="password" type="password" ref={register({ required: true })} placeholder="Password" />
          {errors.password && <span className ="error">Password is required</span>}
          <input className="text-white bg-danger" type="submit" value="Sign Up" />
        </form>
        {
            <Link className="link" to="/login">Already have an Account</Link>
        }
        </div>
    );
};

export default SignIn;