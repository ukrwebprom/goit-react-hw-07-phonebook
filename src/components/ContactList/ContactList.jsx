import { Contact } from './Contact';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import './contactlist.scss'

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const sortedContacts = contacts.sort((a, b) => Number(b.id) - Number(a.id));
  return (
    <ul className='contact-list'>
      {sortedContacts.map(item => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};

export const ContactListHeader = ({children}) => {
  return (
      <div className="contactlistheader">
          <h2 className="subtitle">Contacts</h2>
          {children}
      </div>
  )
}
