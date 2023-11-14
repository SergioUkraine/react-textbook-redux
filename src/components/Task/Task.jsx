import { Wrapper, CheckBox, Text, Button } from './Task.styled';
import { MdClose } from 'react-icons/md';

function Task({ task }) {
  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Button>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
}

export default Task;
