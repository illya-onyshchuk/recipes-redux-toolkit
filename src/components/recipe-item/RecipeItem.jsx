import { useSelector } from 'react-redux';
import Button from '../../components/UI/Button';
import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

const RecipeItem = ({recipe}) => {
  const {toggleFavorites} = useActions();
  const {favorites} = useFavorites();

  const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={styles.item}>
      {/* <img src="" alt="" /> */}
      <h3>{recipe.name}</h3>
      <Button toggleFavorites={toggleFavorites} recipe={recipe}>
        {isExists ? 'Remove from' : 'Add to favorites'}
        </Button>
    </div>
  );
}

export default RecipeItem;
