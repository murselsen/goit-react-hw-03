import React, { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  const localStorageContacts = JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [Contacts, setContacts] = useState(localStorageContacts);
  const [searchName, setSearchName] = useState("");

  const addContact = (contact) => {
    setContacts(prev => {
      return [...prev, contact];
    });
  }
  const searchContact = (name) => {
    setSearchName(name);
  };

  const deleteContactByID = (contactItem) => {
    console.log('Delete Contact', contactItem);
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactItem.id);
    });
  }
  useEffect(() => {
    console.log('App - useEffect', Contacts);

    localStorage.setItem('contacts', JSON.stringify(Contacts));

  }, [Contacts]);



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
          <ContactList Contacts={Contacts} SearchName={searchName} DeleteContact={deleteContactByID} />
        </div>
      </div>
    </div>

  )
}

export default App;
