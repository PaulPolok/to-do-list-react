import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className={`buttons`}>
            <button className={`buttons__button`}
                onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className={`buttons__button {taskElement ? "" : "tasks__item--hidden"}`}
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done) ? "disabled" : ""}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;