import React from "react";
import { Component } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";
import Filter from "./Filter";

export class App extends Component {
  
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const savedContactsList = localStorage.getItem('contactsList')
    console.log(typeof savedContactsList)

    if (savedContactsList !== null) {
      this.setState ({
        contacts: JSON.parse(savedContactsList),
      });
    }
  }

  componentDidUpdate(PrevProps, PrevState) {
    if (PrevState.contacts !== this.state.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts))
    }
  }

  onFormSubmit = data => {
    const isExist = this.state.contacts.some(
      ({name}) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase());
        
    if (isExist) {
      alert(`$This Name is already in contacts.`);
      return
    }
      this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }));
  
  }

  onFilterInput = value => {
    this.setState({
    filter:value
    })
  }

   filterVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const lowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
   }

   deleteContact = deleteItemId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(item => item.id !== deleteItemId)
      }) )
   }
   
render(){
  const visibleContacts = this.filterVisibleContacts();
   
  return (
    <div>
      <h1>Phonebook</h1>
        <FormInput
          onFormSubmit = {this.onFormSubmit}
          >
        </FormInput>
        <h2>Contacts</h2>
        <Filter
        onInputFilterName={this.onFilterInput}>
        </Filter>
        <ContactsList
          onDelete = {this.deleteContact}
          contacts = {visibleContacts}
        />
    </div>
  );
};
};