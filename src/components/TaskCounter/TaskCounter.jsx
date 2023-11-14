import { Wrapper, Text } from './TaskCounter.styled';

function TaskCounter() {
  return (
    <Wrapper>
      <Text>Active: </Text>
      <Text>Completed: </Text>
    </Wrapper>
  );
}

export default TaskCounter;
