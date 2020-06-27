import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


import './App.css';
import Home from './pages/home/Home'
import BlogPost from './pages/blogPost/BlogPost'
import SignUp from './pages/logSign/SignUp'
import Login from './pages/logSign/Login'

function App() {


  return (
    <div>      
      <Router>
        <Switch>
          <Route path="/" exact   component={Home}    />
          <Route path="/blog"     component={BlogPost}/>
          <Route path="/signUp"   component={SignUp}  />
          <Route path="/login"    component={Login}   />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
