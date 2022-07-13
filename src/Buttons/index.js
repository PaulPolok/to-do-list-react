import "./style.css"

const Buttons = ({tasks, hideDoneTask}) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
    <div className={`buttons`}> 
    <button className={`buttons__button`}>{hideDoneTask ? "Pokaż" : "Ukryj"} ukończone</button>
            <button className={` buttons__button {taskElement ? "" : "tasks__item--hidden"}`} disabled={tasks.every(({done})=>done) ? "disabled" : ""}> 
            Ukończ wszystkie</button>
        
    </div>
    )
};

export default Buttons;