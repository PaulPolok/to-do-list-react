import './style.css'

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className='tasks'>
        {tasks.map(task => (
            <li className={`tasks__item ${hideDone && task.done ? 'tasks__item--hidden' : ''}`} >
                <button className='tasks__button tasks__button--toggleDone ' 
                onClick={()=> toggleTaskDone(task.id)}> {/* use ()=> remove... when you need transfer variable*/}
                    {task.done ? '✔' : ''}
                </button>
                <span className={`tasks__content ${task.done ? 'tasks__content--done' : ''}`}>
                    {task.content}
                </span>
                <button
                    className='tasks__button tasks__button--remove'
                    onClick={() => removeTask(task.id)}> {/* use ()=> remove... when you need transfer variable*/}
                    🗑
                </button>
            </li>
        ))}

    </ul>
)

export default Tasks; 