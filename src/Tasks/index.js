import './style.css'

const Tasks = (props) => (
<ul className="tasks">
    {props.tasks.map(task => (
        <li className={`tasks__item ${props.hideDoneTask && task.done ? "tasks__item--hidden" : ""}`} >
          <button class="tasks__button tasks__button--toggleDone ">
                            {task.done ? "✔" : ""}
                        </button>
                        <span class={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>
                            {task.content}
                        </span>
                        <button class="tasks__button tasks__button--remove">
                            🗑
                        </button>
        </li> 
        ))}
    
</ul>
)

export default Tasks; 