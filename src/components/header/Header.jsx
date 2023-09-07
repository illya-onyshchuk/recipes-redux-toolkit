import {BsHeartFill, BsHeart} from 'react-icons/bs'
import cl from './Header.module.css'
import { useFavorites } from '../../hooks/useFavorites';

const Header = () => {
  const {favorites} = useFavorites()

  return (
      <header className={cl.header}>
          <BsHeartFill style={{fontSize: '25px', color: 'red'}}/>
          {/* <BsHeart  style={{fontSize: '18px'}}/> */}
          <span>{favorites.length}</span>
      </header>
  );
}

export default Header;
