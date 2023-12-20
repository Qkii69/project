import { useState , useEffect} from "react";
import * as Icon from 'react-bootstrap-icons';

const initialInput = {
  name: { state: false },
  username: {state: false},
  email: { state: false },
  password: { state: false },
  loginName: { state: false },
  passwordLogin: { state: false }
};
export const initialCategories = [
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
  {name: 'PlaceHolder', description: 'Ipsum lorem', icon: <Icon.LockFill/>},
]
  
export function useToggleLogin() {
  const [isLoggedIn, setLoginState] = useState(true);

  const toggleLogin = () => {
    setLoginState((prevState) => !prevState);
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log('toggle true');
    } else {
      console.log('toggle false');
    }
  }, [isLoggedIn]);

  return { isLoggedIn, toggleLogin };
}


export default initialInput;