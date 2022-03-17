import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import everwrite from '../../assets/pencil.png'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    let email = 'demo@aa.io'
    let password = 'password'
    dispatch(login(email, password))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup-form-page'>
      <div className='form-container'>
        <img className='title' src={everwrite} alt='Everwrite Title'></img>
        <div className='signup-form-heading'>Everwrite</div>
        <div className='signup-form-motto'>Write everything important.</div>
        <form onSubmit={onLogin}>
          <div className='error-handling'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
          <div className='form-field-container'>
            <label htmlFor='email'>Email</label>
            <input
            className='form-field'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          </div>
          <div>
          <div className='form-field-container'>
            <label htmlFor='password'>Password</label>
            <input
            className='form-field'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            </div>
            <button id='signup-btn' className='buttons' type='submit'>Continue</button>
            <button id='demo-login' onClick={demoLogin}>Demo User</button>
          </div>
        </form>
        <div id='have-account'>Don't have an account?</div>
        <NavLink to='/sign-up' id='login-link'>Create account</NavLink>
      </div>
    </div>
  );
};

export default LoginForm;