import { FC } from 'react'
import { Action, Contact } from '../reducer/contactsReducer'
import ContactItem from './ContactItem'

interface ContactListProps {
    contacts: Contact[];
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>;
}

const ContactList: FC<ContactListProps> = ({ contacts, handleEdit, dispatch }) => {
  return (
    <div className='contacts-list'>
        <h3 className='contacts-list-title'>List of Contacts</h3>
        <div className="contacts-list-table-container">
            <table className="contacts-list-table">
                <thead className="contacts-list-header">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((props) => (
                        <ContactItem key={props.id} {...props} handleEdit={handleEdit} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ContactList