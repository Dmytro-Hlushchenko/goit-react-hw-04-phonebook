import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";
import Filter from "./Filter";

export const App = () => { 
    const [isContacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    const [isFilter, setFilter] = useState('');

    const onFilterInput = value => {
        setFilter(value);
    };
    
    const filterVisibleContacts = () => {
        const lowerCaseFilter = isFilter.toLocaleLowerCase();
        return isContacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
    };
    
    const deleteContact = deleteItemId => {
        setContacts(isContacts.filter(item => item.id !== deleteItemId))
        
    };
    
    return (
    <div>
      <h1>Phonebook</h1>
        <FormInput
        //   onFormSubmit = {onFormSubmit}
          >
        </FormInput>
        <h2>Contacts</h2>
        <Filter
            onInputFilterName={onFilterInput}
        >
        </Filter>
        <ContactsList
            onDelete = {deleteContact}
            contacts = {filterVisibleContacts()}
        />
    </div>
    );
}