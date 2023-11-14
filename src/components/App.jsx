import AppBar from './AppBar';
import Layout from './Layout';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList visibleTasks={tasksInitialState} />
    </Layout>
  );
};
