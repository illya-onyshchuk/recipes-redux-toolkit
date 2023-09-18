import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import Loader from '../UI/loader/Loader'

const User = () => {
  const {isLoading, error, user} = useSelector(state => state.user);
  const { getUserById } = useActions();

  return (
    <div>
      <button onClick={() => getUserById()}>
        Get user
      </button>
      {isLoading
       ? <Loader />
       : error ? <div>{error.message}</div> 
       : user?.name ? <h1>User: {user.name}</h1>
       : <h1>User Not Found</h1>
      }
    </div>
  );
}

export default User;
