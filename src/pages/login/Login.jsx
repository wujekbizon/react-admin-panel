import './login.scss';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch);
  };

  return (
    <div className="loginAdmin">
      <div className="loginAdminTitle">
        <h1 className="title">Administrator Login Page</h1>
        <span>Login page authentication is disabled just click login :)</span>
      </div>

      <input
        type="text"
        placeholder="username"
        // onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
