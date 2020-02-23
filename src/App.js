import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Create from './component/Create';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component{

  render(){
    return(
    <Router>
      <Header/>
      <div className="ui container">
          <Switch>

            
            <Route exact path="/10110sbk" component={Home} />
            <Route path="/create" component={Create} />
          </Switch>
          </div>
        </Router>

    )
  }
}

export default App;
