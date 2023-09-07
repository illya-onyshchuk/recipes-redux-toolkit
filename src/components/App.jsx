import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import User from './user/User';

function App() {
  return (
    <section>
      <Header />
      <User />
      <div>
      <RecipeItem 
        recipe={{
          id: 1,
          name: 'Pizza'
        }}
      />
      <RecipeItem 
        recipe={{
          id: 2,
          name: 'Pasta'
        }}
      />
      <RecipeItem 
        recipe={{
          id: 3,
          name: 'Sendwitch'
        }}
      />
      </div>
    </section>
  );
}

export default App;
