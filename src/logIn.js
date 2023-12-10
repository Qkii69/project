import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons';
import initialInput from './data';

function LoginPageForm({toggleLogin}){
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
    return (
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
                        Nie masz jeszcze konta?
                        <a onClick={() => toggleLogin()}>Zarejestruj sie</a>
                    </div>
                </div>
                );
};

export default LoginPageForm;