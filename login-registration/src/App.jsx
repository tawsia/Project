import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
