import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

// Login component
const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your login logic here
    // For simplicity, we'll consider "admin" as the correct username and password

    if (username === 'admin' && password === 'admin') {
      handleLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  return <h2>Welcome to the Dashboard!</h2>;
};

// PrivateRoute component to protect the Dashboard route
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

// App component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <ul>
          <li>                                                                                                                                                                                                                                                                                                                                 
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <Route
          path="/login"
          render={() =>
            isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
