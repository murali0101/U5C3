import { useContext } from 'react';
import {  Navigate, useNavigate } from 'react-router-dom'
import {TempContext} from './TempContext'

export const Login = () => {
  const nav=useNavigate()
  const {isAuth,toggleAuth}=useContext(TempContext)
  //  use reqres to log user in.
  function loginData(e) {
    e.preventDefault()
    toggleAuth()
     nav(-2,{replace:true})

 }
  return (
    <form className="loginform" onSubmit={loginData}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        required
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        required
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
