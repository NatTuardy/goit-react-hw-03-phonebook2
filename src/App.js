import { Component } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

class App extends Component {
  state = {
    contacts: [
      
    ],
    filter: "",
  };

  componentDidMount() {
    const contactsString = localStorage.getItem("contacts");
    const contactsParse = JSON.parse(contactsString);
    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = () => {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (newContact) => {
    this.setState(({ contacts }) => {
      const findDoubleContact = contacts.find(
        (contact) => contact.name === newContact.name
      );
      if (findDoubleContact) {
        alert(`${findDoubleContact.name} is already in contacts`);
        return;
      }
      const newContactsList = [...contacts, newContact];
      return {
        contacts: newContactsList,
        name: "",
        number: "",
      };
    });
  };

  handleDelete = (id) => {
    this.setState(({ contacts }) => {
      const copyContactsList = [...contacts];
      const newContactsList = copyContactsList.filter(
        (contact) => contact.id !== id
      );
      return {
        contacts: newContactsList,
      };
    });
  };

  render() {
    const { handleChange, handleSubmit, handleFilter, handleDelete } = this;
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <h1 className="App-header">Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />
        <Filter onChange={handleChange} data={contacts} filter={filter} />
        <ContactList data={handleFilter()} onDelete={handleDelete} />
      </div>
    );
  }
}

export default App;
