import React from 'react';

import Css from './ContactList.module.css';

import Contact from '../Contact/Contact';
const ContactList = ({ Contacts, SearchName, DeleteContact }) => {
    const HandleContactDelete = (contact) => {
        // Handle contact delete logic here
        console.log('HandleContactDelete', contact);
        DeleteContact(contact);
    };

    const MapFilterContacts = (Contacts, SearchName) => {
        if (!SearchName) {
            return Contacts;
        }
        return Contacts.filter((contact) =>
            contact.name.toLowerCase().includes(SearchName.toLowerCase())
        );
    }


    return (
        <div className={Css.ContactList}>
            {MapFilterContacts(Contacts, SearchName).map((contact) => (
                <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} handleContactDelete={HandleContactDelete} />
            ))}

        </div>
    );
}
export default ContactList;