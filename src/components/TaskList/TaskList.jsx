import { List, ListItem } from './TaskList.styled';
import Task from 'components/Task';

function TaskList({ visibleTasks }) {
  return (
    <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
