import ContactItem from "components/ContactItem/ContactItem"
import { List, Item } from "./ComtactList.styled"

export default function ContactsList ({contacts, onDelete}) {

    return(
    <div>
        <List>
            {contacts.map(item => (
                <Item key = {item.id}>
                    <ContactItem
                        contact = {item}
                        onDelete = {onDelete}>
                    </ContactItem>
                </Item>
            ))}
        </List>
    </div>
    
    )
}