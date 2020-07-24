import React, { Component } from 'react';
import {Link} from "react-router-dom";
// code used in carousel taken from https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {connect} from "react-redux";
import chicken from "../images/roastedchicken.jpg";
import fruitsalad from "../images/fruitsalad.jpg";
import "../styles/home.css" 


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  class Home extends Component {
    
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
                    var elems = document.querySelectorAll('.tooltipped');
                    M.Tooltip.init(elems, {});
        });
    }

    render(){
        const {recipes}=this.props;

        const recipeListTrending = (
            recipes.map(item => {
                if (item.car_category==="trending") {
                    return (
                        <div>
                            <Link to={"/"+item.name}>
                                <div className="image_container">
                                    <img src={item.image}/>
                                </div>
                                <div>
                                <span className="itemname">{item.name}</span>
                                </div>
 
                            </Link>
                        </div>
                            
                        
                      )
                }
                return null;
            })
          );

          const recipeListQuarantine = (
            recipes.map(item => {
                if (item.car_category==="quarantine") {
                    return (

                            <Link to={"/"+item.name}>
                                <div className="image_container">
                                    <img src={item.image}/>
                                </div>
                                <span className="itemname">{item.name}</span>
                            </Link>
                        
                      )
                }
                return null;
            })
          );

          const recipeListHealthy = (
            recipes.map(item => {
                if (item.car_category==="healthy") {
                    return (

                            <Link to={"/"+item.name}>
                                <div className="image_container">
                                    <img src={item.image}/>
                                </div>
                                <span className="itemname">{item.name}</span>
                            </Link>
                 
                      )
                }
                return null;
            })
          );

        return(
            <div className="container">
                <span class="title"><h2>Recipes</h2></span>
                <br/>
                <h4>Most Recents</h4>
                    <Carousel responsive={responsive} infinite={true}>
                        {recipeListTrending}
                    </Carousel>
                <br/>
                <h4>Quarantine Cooking</h4>
                    <Carousel responsive={responsive} infinite={true}>
                        {recipeListQuarantine}
                    </Carousel>
                    <br/>
                <h4>Healthy</h4>
                    <Carousel responsive={responsive} infinite={true}>
                        {recipeListHealthy}
                    </Carousel>
                    <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteItem: (id, amount) => { dispatch({type: 'DELETE_ITEM', id: id, amount: amount})}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Home)

export default connect(mapStateToProps) (Home)