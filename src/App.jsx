import React, { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {

  const [Contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filterContacts, setFilter] = useState(Contacts);

  const addContact = (contact) => {
    console.log('Add contact', contact);
  }
  const searchContact = (contactName) => {
    console.log('App - Search Contact', contactName);
    setFilter(Contacts.filter(contact => contact.name.toLowerCase().includes(contactName.toLowerCase())))
  }
  const deleteContact = (contactId) => {
    console.log('Delete Contact', contactId)
  }

  return (

    <div className='App'>
      <h1>PhoneBook</h1>
      <div className='row'>
        <div className='col'>
          <ContactForm addContact={addContact} />
        </div>
        <div className='col'>
          <SearchBox searchContact={searchContact} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <ContactList Contacts={filterContacts} />
        </div>
      </div>
    </div>

  )
}

export default App;
