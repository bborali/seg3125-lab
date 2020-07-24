import React, { Component } from "react"
import {Link} from "react-router-dom";
import "../styles/navbar.css" 

class Navbar extends Component {

    ChangeLanguage(str) {
        var fr = document.getElementById('fr');
        var eng = document.getElementById('eng');
        if (str === 'fr') {
            // alert();
            fr.style.display = 'none';
            eng.style.display = 'block';
        } else {
            eng.style.display = 'none';
            fr.style.display = 'block';
        }
    }


    render(){
        
        
        return (

            // https://getbootstrap.com/docs/4.5/components/scrollspy/#list-item-2
            <navbar className="navbar navbar-light border bg-danger" sticky="top">
                <div className="container">
                    <a className="nav-link brand-logo  text-white" id="logo" href="/">TastyRecipy</a>
                    <ul className="nav nav-pills">
                        <li class="nav-item ">
                            <a className="nav-link text-white" href="/"><i class="fas fa-home"></i> Home</a>
                        </li>
            
                        <li className="form-group">

                            <form class="form-inline my-2 my-lg-0"> 
                                <input class="form-control mr-sm-2" type="text" placeholder="Search"/> 
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i>Search</button> 
                            </form>
                        </li>

                        <li className="nav-item" id='fr'>
                            <Link to='/fr' onClick={() => this.ChangeLanguage('fr')}><span>FR</span></Link>
                        </li>
                        <li className="nav-item" id='eng'>
                            <Link to='/' onClick={() => this.ChangeLanguage('eng')}><span>EN</span></Link>
                        </li>
                    </ul>
                
                        
                    
                </div>
            </navbar>


        )

}

}

export default Navbar