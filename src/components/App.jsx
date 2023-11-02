import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";
import Filter from "./Filter";

const initialContacts =
        [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },];

export const App = () => {
    const [contacts, setContacts] = useState(() => { 
        const initialState = JSON.parse(localStorage.getItem('contactsList'));
        return initialState || initialContacts;
    });


    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contactsList', JSON.stringify(contacts))
    }, [contacts]);

    const onFormSubmit = data => {
        const isExist = contacts.some(
            ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase());
        
        if (isExist) {
            alert(`$This Name is already in contacts.`);
            return;
        };
        setContacts(prevContacts => [...prevContacts, data]);
    };

    const onFilterInput = value => {
        setFilter(value);
    };
    
    const filterVisibleContacts = () => {
        const lowerCaseFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
    };
    
    const deleteContact = deleteItemId => {
      setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== deleteItemId))
   };
    
    return (
        <div>
            <h1>Phonebook</h1>
            <FormInput
                onFormSubmit={onFormSubmit}
            >
            </FormInput>
            <h2>Contacts</h2>
            <Filter
                onInputFilterName={onFilterInput}
            >
            </Filter>
            <ContactsList
                onDelete={deleteContact}
                contacts={filterVisibleContacts()}
            />
        </div>
    );
};