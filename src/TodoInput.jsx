import PropTypes from 'prop-types'; // Импортируем PropTypes
import style from "../src/home/home.module.css";

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className={style.inputwrapper}>
      <input 
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className={style.addButton} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

// Проверяем типы пропсов с помощью PropTypes
TodoInput.propTypes = {
  todo: PropTypes.string.isRequired, // todo должен быть строкой и обязательным
  setTodo: PropTypes.func.isRequired, // setTodo должен быть функцией и обязательным
  addTodo: PropTypes.func.isRequired, // addTodo должен быть функцией и обязательным
};

export default TodoInput;
