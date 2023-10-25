import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={e => dispatch(setFilter(e.target.value))} />
    </Label>
  );
};
