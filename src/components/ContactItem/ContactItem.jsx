import {DeleteBtn} from "./ContactItem.styled"

export default function ContactItem ({contact: {id, name, number}, onDelete}) {
    
    return(
        <>
            <p>{name}: {number} </p>
            <DeleteBtn 
            onClick={() => onDelete(id)}
            >Delete
            </DeleteBtn>
        </>
        
    )
} 