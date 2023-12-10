import React, { useState} from 'react';
import SignUpForm from './signUp';
import LoginPageForm from './logIn';
import { useToggleLogin  } from './data';
import Dashboard from './dashboard'

function Overlay(prop) {
  return (
    <>
      <input type="button" onClick={()=>console.log(prop)} />;
    </>
  );
}
function WelcomePage(){
  const {isLoggedIn, toggleLogin} = useToggleLogin();
  return ( 
    <>
    <div className="app">
      <div className='card'>
        <div className='screen'>
          <div className='screen-image'></div>
          <div className='screen-overlay'>
            <Overlay isLoggedIn={isLoggedIn}/>
          </div>
        </div>
        {isLoggedIn ? <LoginPageForm toggleLogin = {toggleLogin}/> : <SignUpForm toggleLogin = {toggleLogin} />}
      </div>
    </div>
    </>
  );
}
function App() {
  const [stanStrony, ustawStanStrony] = useState(true);
  return ( 
    <>
    {stanStrony ? <WelcomePage  /> : <Dashboard/> }
    </>
  );
}

export default App;
