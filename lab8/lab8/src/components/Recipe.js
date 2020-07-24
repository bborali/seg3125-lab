import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../styles/recipe.css" 


class Recipe extends Component {

    render(){
        
        // const{recipe}=this.props;

        const ingredientList=this.props.recipe.ingredients.split(",");
        const ingredientTable=ingredientList.map(ing =>{
            return(
                <div>
                    {ing}
                </div>
            )
        });

        const stepList=this.props.recipe.steps.split(",");
        const stepTable=stepList.map(st =>{
            return(
                <div>
                    {st}
                </div>
            )
        });
        

        const recipe=this.props.recipe ? (
            
                <div class="recipeDetail">
                    <br/>
                    <br/>
                    <h2>{this.props.recipe.name}</h2>

                     <img src={this.props.recipe.image}/>

                     <div className="ingTable">
                        <span><h5>{ingredientTable}</h5> </span> 
                     </div>
                     <div className="stTable">
                         <span><h5>{stepTable}</h5></span> 
                     </div>
                     
                </div>

                
            
        ):(
            
                <div>aaaaaaaaaaaaaaa</div>
            
        );

        return(
            <div className="container" >
                {recipe}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.recipeName;
    
    return {
        recipe: state.recipes.find(recipe => recipe.name === id)
    }
}



export default connect(mapStateToProps) (Recipe)