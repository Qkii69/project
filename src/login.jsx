import React, {useState} from 'react';
import { useNavigate , Link} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import initialInput from './data';
import './App.css';

function Login(){
    const [isLocked, setIsLocked] = useState(true);
    const [focusedInput, setFocusedInput] = useState(initialInput);

    const handleFocus = (inputName) =>{
        setFocusedInput((prevInput) => ({
            ...prevInput,
            [inputName]: {state : true }
        }))
    }
    const handleBlur = (event, inputName) => {
        if (event.target.value === '') {
          setFocusedInput((prevFocusedInput) => ({
            ...prevFocusedInput,
            [inputName]: { state: false },
          }));
        }
      };

    function toggleVisibility() {
        setIsLocked((prevIsLocked) => !prevIsLocked);   
      }
    const navigate = useNavigate();
    return (
<div className="app">
<div className="card">
<div className="screen">
<div className="screen-image"></div>
<div className="screen-overlay"></div>
</div>
    <div className="loginPage">
                <h2>Logowanie</h2>
                <div className="avatar">
                    <i><Icon.PersonCircle/></i>
                </div>
                <form>
                    <div className={`loginInput name input ${focusedInput.loginName.state ? 'focus' : ""}`}>
                        <i className='icons'><Icon.PersonFill/></i>
                        <h5>Nazwa Użytkownika</h5>
                    <input 
                    type="text" 
                    className='space' 
                    onFocus={()=> handleFocus('loginName')} 
                    onBlur={(event)=> handleBlur(event,'loginName')} 
                    />
                    </div>
                    <div className={`loginInput password input ${focusedInput.passwordLogin.state ? 'focus' : ''}`}>
                    <i className='icons lock' onClick={toggleVisibility}>
                        {isLocked ? <Icon.LockFill /> : <Icon.UnlockFill />}
                    </i>
                        <h5>Hasło</h5>
                    <input 
                    type={isLocked ? 'password' : 'text'} 
                    className="passwords" 
                    onFocus={() => handleFocus('passwordLogin')}
                    onBlur={(event) => handleBlur(event, 'passwordLogin')}
                    />
                    </div>
                    <div className="btn">
                    <input type="submit" value="Zaloguj" />
                    </div>
                </form>
                    <div className='footer'>
                        <span>Nie masz jeszcze konta?</span>
                        <a><Link to="signup">Zarejestruj sie</Link></a>
                    </div>
                </div>
                </div>
                </div>
                );
};

export default Login;