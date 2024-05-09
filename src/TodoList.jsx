import PropTypes from 'prop-types';
import style from "../src/home/home.module.css";
const TodoList = ({ list, remove }) => {
    return (
        <>
        {list?.length > 0 ? (
            <ul className="todo-list">
                {list.map((entry, index) => (
                    <div className={style.todo} key={index}>
                        <li>{entry}</li>
                        <button
                            className={style.deletebutton}
                            onClick={() => {
                                remove(entry);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
        ) : (
            <div className={style.empty}>
                <p>no task found</p>
            </div>
        )}
        </>
    );
};

TodoList.propTypes = {
    list: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
};

export default TodoList;
