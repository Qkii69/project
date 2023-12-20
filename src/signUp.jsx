import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-bootstrap-icons';
import './App.css';
import initialInput from "./data";

function SignUp() {
    const [isLocked, setIsLocked] = useState(true);
    const [focusedInput, setFocusedInput] = useState(initialInput);
    const [valid, allValid] = useState(null);
    const handleFocus = (inputName) => {
      setFocusedInput((prevFocusedInput) => ({
        ...prevFocusedInput,
        [inputName]: { state: true },
      }));
    };
  
    const handleBlur = (event, inputName) => {
      if (event.target.value === '') {
        setFocusedInput((prevFocusedInput) => ({
          ...prevFocusedInput,
          [inputName]: { state: false },
        }));
      }
    };

    const uiActualise = (id, Validated) =>{
        const element = document.getElementById(id);
        element.classList.add('active');
        if(Validated){
          element.classList.remove('active');
          element.classList.add('sew');
        }
        else{
          element.classList.remove('sew');
        }
    }

    const passwordValidation = (event) =>{

      function hasLowerCaseAndUpperCase(value) {
        const lowerCase = /[a-z]/.test(value);
        const upperCase = /[A-Z]/.test(value);
        return lowerCase && upperCase;
      }
      function hasSpecialSigns(value) {
        const signs = /[!@#$%^&*(),.?"'~`:;{}/+\-=_|<>]/.test(value);
        return signs;
      }
      function lengthValidation(value) {
        return value.length >= 8;
      }
      const lengthValid = lengthValidation(event.target.value);
      const ulValid = hasLowerCaseAndUpperCase(event.target.value);
      const signsValid = hasSpecialSigns(event.target.value);

      const isAllValid = lengthValid && ulValid && signsValid ;
      allValid(isAllValid);
      
      uiActualise('el1',lengthValid);
      uiActualise('el2',ulValid);
      uiActualise('el3',signsValid);
    }
    function toggleVisibility() {
      setIsLocked((prevIsLocked) => !prevIsLocked);
    }
    return (
      <>
  <div className="app">
  <div className="card">
  <div className="screen">
  <div className="screen-image"></div>
  <div className="screen-overlay"></div>
  </div>
  <div className='signPage'>
    <h2>Rejestracja</h2>
    <form>
      <div className={`signInput input ${focusedInput.name.state ? 'focus' : ''}`}>
        <i className='icons'>
          <FontAwesomeIcon icon={faAddressBook} />
        </i>
        <h5>Imie</h5>
        <input
          type="text"
          className='space'
          onFocus={() => handleFocus('name')}
          onBlur={(event) => handleBlur(event, 'name')}
        />
      </div>

      <div className={`signInput input ${focusedInput.username.state ? 'focus' : ''}`}>
        <i className='icons'>
          <FontAwesomeIcon icon={faUserAlt} />
        </i>
        <h5>Nazwa Użytkownika</h5>
        <input
          type="text"
          className='space'
          onFocus={() => handleFocus('username')}
          onBlur={(event) => handleBlur(event, 'username')}
        />
      </div>

      <div className={`signInput input ${focusedInput.email.state ? 'focus' : ''}`}>
        <i className='icons'>
          <Icon.EnvelopeAtFill />
        </i>
        <h5>Email</h5>
        <input
          type="text"
          className='space'
          onFocus={() => handleFocus('email')}
          onBlur={(event) => handleBlur(event, 'email')}
        />
      </div>

      <div className={`signInput input ${focusedInput.password.state ? 'focus' : ''} ${valid ? '' : 'wrong'}`}>
        <i className='icons lock' onClick={toggleVisibility}>
          {isLocked ? <Icon.LockFill /> : <Icon.UnlockFill />}
        </i>
        <h5>Hasło</h5>
        <input
          type={isLocked ? 'password' : 'text'}
          className={`space passwords`}
          onFocus={() => handleFocus('password')}
          onBlur={(event) => handleBlur(event,'password')}
          onChange={passwordValidation}
        />
      </div>

      <div className="checkPassword">
        <span id="el1">8 znaków</span>
        <span id="el2">1 Duza litera</span>
        <span id="el3">1 znak specjalny</span>
      </div>

      <div className="btn">
        <input type="submit" value="Zarejestruj" id="register" />
      </div>
    </form>

    <div className='footer'>
      Masz już konto?
      <a><Link to="/">Zaloguj się</Link></a>
    </div>
  </div>
  </div>
  </div>
</>
    );
  }

  export default SignUp;