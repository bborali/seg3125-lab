import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import home from "./components/Home";
import HomeFr from "./components/HomeFr";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";

class App extends Component{
  

  render () {  
    return (
      <BrowserRouter>
        <Navbar/>
          <div className="App">
            <Switch>

                <Route exact path="/" component={home} />
                <Route  path="/fr" component={HomeFr} />
                <Route path="/:recipeName" component={Recipe} />
                

            </Switch>
          </div>
        <Footer/>
      </BrowserRouter>
      
    );
  }

}

export default App;
