import { useGetRecipesQuery } from '../store/api/api';
import Loader from './UI/loader/Loader';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import User from './user/User';

function App() {
  const {data, isLoading} = useGetRecipesQuery('dd');
 
  return (
    <section>
      <Header />
      {/* <User /> */}
      <>
      {isLoading
        ? <Loader/> : data 
        ? data.map(recipe => 
          <RecipeItem 
          key={recipe.id}
          recipe={recipe}
          />
          ) : <div>Not Found</div>
      }
      </>
    </section>
  );
}

export default App;
