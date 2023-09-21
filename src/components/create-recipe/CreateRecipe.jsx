import { useState } from "react";
import cl from './CreateRecipe.module.css'
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultValue = {
   name: '',
   image: '',
  }

const CreateRecipe = () => {
  const [recipe, setRecipe] =useState(defaultValue);
  const [createRecipe] = useCreateRecipeMutation();


  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe)
      .then(() => setRecipe(defaultValue))
      .catch((e) => console.log('error', e));
  }

  return (
    <div>  
      <form onSubmit={handleSubmit}>
        <p className={cl.title}>Create new recipe:</p>
        <label>
          <input
            className={cl.input}
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={e => setRecipe({...recipe, name: e.target.value})} 
            />
        </label>
        <label>
          <input
            className={cl.input}
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={e => setRecipe({...recipe, image: e.target.value})} 
            />
        </label>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
