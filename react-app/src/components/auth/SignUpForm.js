import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './LoginForm.css'
import everwrite from '../../assets/pencil.png'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
        <form onSubmit={onSignUp}>
          <div className='error-handling'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <div className='form-field-container'>
              <input
                className='form-field'
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                placeholder='Username'
              ></input>
            </div>
          </div>
          <div>
            <div className='form-field-container'>
              <input
                className='form-field'
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                placeholder='Email'
              ></input>
            </div>
          </div>
          <div>
            <div className='form-field-container'>
              <input
                className='form-field'
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                placeholder='Password'
              ></input>
            </div>
          </div>
          <div>
            <div className='form-field-container'>
              <input
                className='form-field'
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                placeholder='Confirm Password'
              ></input>
            </div>
          </div>
          <button id='signup-btn' className='buttons' type='submit'>Sign Up</button>
        </form>
        <div id='have-account'>Already have an account?</div>
        <NavLink to='/login' id='login-link'>Sign in</NavLink>
      </div>
    </div>
  );
};

export default SignUpForm;