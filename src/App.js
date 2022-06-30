import Form from './Form';
import Tasks from './Tasks';
import Button from './Buttons';
import "./Section/style.css";



const tasks = [
  { id: 1, content: "Zjeść kebsa" },
  { id: 2, content: "Obalić flaszkę", done: true }
];

const hideDoneTask = false;

function App() {
  return (
    <div>
      <main className="container">
        <header className="Header">
          <h1>Lista zadań</h1>
        </header>

        <section className="section">
          <h2 className="section__header">Dodaj nowe zadanie</h2>
          <Form />
        </section>

        <section className="section">
          <div className="section__buttonHeader">Lista zadań </div>
          <Button />

          <Tasks tasks={tasks} hideDoneTask={hideDoneTask} />

        </section>
      </main>
    </div>
  );
}

export default App;
