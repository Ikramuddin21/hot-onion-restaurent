import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import { useAuth } from './useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  const auth = useAuth();
  console.log(auth);

    return (
      <div className="container">
        <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
          <input name="email" ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className ="error">Email is required</span>}
          <input name="password" type="password" ref={register({ required: true })} placeholder="Password" />
          {errors.password && <span className ="error">Password is required</span>}
          <input className="text-white bg-danger" type="submit" value="Sign In" />
        </form>
        {
          <Link className="link" to="signin">Create a new Account</Link>
        }
      </div>
      );
};

export default Login;