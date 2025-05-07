import React from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {

  return (

    <div className='App'>
      <h1>PhoneBook</h1>
      <div className='row'>
        <div className='col'>
          <ContactForm />
        </div>
        <div className='col'>
          <SearchBox />

        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <ContactList />
        </div>
      </div>
    </div>

  )
}

export default App;
