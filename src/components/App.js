import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import React,{useState, useEffect} from 'react';


function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact)=>{
    setContacts([...contacts,  contact ]);
  }
 

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler} />    
      <ContactList contacts={contacts} ></ContactList> 
    </div>
  );
}

export default App;
