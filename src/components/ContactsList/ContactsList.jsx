import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from 'redux/contactsSlice';
import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <Table>
      <TabletHead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </TabletHead>
      <TableBody>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ItemRow key={id}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button type="button" onClick={() => dispatch(removeUser(id))}>
                  Delete
                </button>
              </td>
            </ItemRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
