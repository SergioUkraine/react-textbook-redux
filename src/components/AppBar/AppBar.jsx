import { Wrapper, Section, Title } from './AppBar.styled';
import TaskCounter from 'components/TaskCounter';
import StatusFilter from 'components/StatusFilter';

function AppBar() {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
}

export default AppBar;
