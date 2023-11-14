import { Wrapper } from './StatusFilter.styled';
import Button from 'components/Button';

function StatusFilter() {
  return (
    <Wrapper>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </Wrapper>
  );
}

export default StatusFilter;
