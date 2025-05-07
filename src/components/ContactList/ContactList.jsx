import React from 'react';

import Css from './ContactList.module.css';

import Contact from '../Contact/Contact';
const ContactList = () => {
    // const handleChange = () => { };
    return (
        <div className={Css.ContactList}>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    );
}
export default ContactList;