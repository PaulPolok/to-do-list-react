
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';


const tasks = [
  { id: 1, content: "Zjeść kebsa", done: false },
  { id: 2, content: "Obalić flaszkę", done: true }
];

const hideDoneTask = false;

function App() {
  return (
    <div>
      <main className="container">
        <Header 
        title="Lista Zadań"
        />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
        />
      </main>
    </div>
  );
}

export default App;
