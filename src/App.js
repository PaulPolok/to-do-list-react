import React, { useState } from 'react';
import Container from './Container';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';


function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: 'Zjeść kebsa', done: false },
      { id: 2, content: 'Zrobić stronę', done: true }
    ]
  );

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task;
    }));
  }

  return (
    <div>
      <Container>
        <Header
          title='Lista Zadań'
        />

        <Section
          title='Dodaj nowe zadanie'
          body={<Form />}
        />

        <Section
          title='Lista zadań'
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }

          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
        />

      </Container>
    </div>
  );
}

export default App;
