import React, { Component } from 'react';
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
import RecipeInput from "./RecipeInput";
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Pasta",
          ingredients: ["flour", "water"],
          instructions: "Mix all together",
          img:"https://images.unsplash.com/photo-1521775219710-2db5c11f85e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1450c21cf310cf6a0aa423a6d76c0001&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 1,
          title: "Milk Shake",
          ingredients: ["Vanilla ice cream", "1/4 cup milk", "Teaspoon vanilla"],
          instructions: "Blend it",
          img:"https://images.unsplash.com/photo-1502719414926-613118be79d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33c47ed538ba787c2466de7b4ad22754&auto=format&fit=crop&w=634&q=80"
        },
        {
          id: 2,
          title: "Chocolate Cake",
          ingredients: ["flour", "sugar", "cocoa", "baking powder", "baking soda", "salt"],
          instructions: "Add milk, vegetable oil, eggs, and vanilla to flour mixture.",
          img:"https://images.unsplash.com/photo-1485474187873-a541e1da7c51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db30c7c753178d24233c513b7dbef394&auto=format&fit=crop&w=1050&q=80"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        { showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}  
          /> 
          : null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
