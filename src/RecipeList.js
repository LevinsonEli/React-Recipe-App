
import React ,{Component} from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {
    static defaultProps = {
      recipes: [
        {
          title: "Pasta",
          ingredients: ["flour", "water"],
          instructions: "Mix all together",
          img:"https://images.unsplash.com/photo-1521775219710-2db5c11f85e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1450c21cf310cf6a0aa423a6d76c0001&auto=format&fit=crop&w=1050&q=80"
        },
        {
          title: "Milk Shake",
          ingredients: ["Vanilla ice cream", "1/4 cup milk", "Teaspoon vanilla"],
          instructions: "Blend it",
          img:"https://images.unsplash.com/photo-1502719414926-613118be79d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33c47ed538ba787c2466de7b4ad22754&auto=format&fit=crop&w=634&q=80"
        },
        {
          title: "Chocolate Cake",
          ingredients: ["flour", "sugar", "cocoa", "baking powder", "baking soda", "salt"],
          instructions: "Add milk, vegetable oil, eggs, and vanilla to flour mixture.",
          img:"https://images.unsplash.com/photo-1485474187873-a541e1da7c51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db30c7c753178d24233c513b7dbef394&auto=format&fit=crop&w=1050&q=80"
        },
        {
          title: "Pasta",
          ingredients: ["flour", "water"],
          instructions: "Mix all together",
          img:"https://images.unsplash.com/photo-1521775219710-2db5c11f85e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1450c21cf310cf6a0aa423a6d76c0001&auto=format&fit=crop&w=1050&q=80"
        },
        {
          title: "Milk Shake",
          ingredients: ["Vanilla ice cream", "1/4 cup milk", "Teaspoon vanilla"],
          instructions: "Blend it",
          img:"https://images.unsplash.com/photo-1502719414926-613118be79d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33c47ed538ba787c2466de7b4ad22754&auto=format&fit=crop&w=634&q=80"
        }
      ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render () {
        const recipes = this.props.recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe} />          
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;
