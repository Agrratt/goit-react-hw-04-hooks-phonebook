import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { ContactsList } from 'components/ListContacts/ListContacts.styled';
import PropTypes from 'prop-types';

export const ListContacts = ({ item, deleteContact }) => {
  return (
    <>
      <ContactsList>
        {item.map(({ id, name, number }) => {
          return (
            <ItemContacts
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          );
        }

        )}
      </ContactsList>

    </>
  );
};
  
ListContacts.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func
};