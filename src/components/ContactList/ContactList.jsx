import React from 'react';

import Css from './ContactList.module.css';

import Contact from '../Contact/Contact';
const ContactList = ({ Contacts }) => {
    const HandleContactDelete = () => {
        console.log('HandleContactDelete - Delete contact');
        // Handle contact delete logic here
    };
    return (
        <div className={Css.ContactList}>
            {Contacts.map((contact) => (
                <Contact key={contact.id} name={contact.name} number={contact.number} handleContactDelete={HandleContactDelete} />
            ))}

        </div>
    );
}
export default ContactList;