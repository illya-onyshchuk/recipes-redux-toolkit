import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const User = () => {
  const {isLoading, error, user} = useSelector(state => state.user)
  const acotion = useActions()

  console.log(acotion)
  return (
    <div>
      <button onClick={() => {}}>
        Get user
      </button>
      {isLoading
       ? <div>Loading...</div>
       : error ? <div>{error.message}</div> 
       : user?.name ? <h1>User: {user.name}</h1>
       : <h1>User Not Found</h1>
      }
    </div>
  );
}

export default User;
