import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
    <section>
      <Header />
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
