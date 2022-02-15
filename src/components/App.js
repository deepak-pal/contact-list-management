import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const Contacts = [
    {
      id:"1",
      name:"Dipesh",
      email: "sample@gmail.com"

    },
    {
      id:"2",
      name:"Dipesh2",
      email: "sample2@gmail.com"

    },
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>    
      <ContactList contacts = {Contacts}></ContactList> 
    </div>
  );
}

export default App;
