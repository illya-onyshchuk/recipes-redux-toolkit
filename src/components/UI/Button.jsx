import cl from './Button.module.css'

const Button = ({children, toggleFavorites, recipe}) => {
  return (
    <button
     className={cl.btn}
     onClick={() => toggleFavorites(recipe)}
     >
      <span className={cl.textContainer}>
        <span className={cl.text}>{children}</span>
      </span>
    </button>
  );
}

export default Button;
