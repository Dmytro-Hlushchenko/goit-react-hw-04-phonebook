export default function Filter ({onInputFilterName}) {
    return (
        <div>
                <label>Find contacts by name: 
                <input type="text" 
                onChange={evt => onInputFilterName(evt.target.value)}/>
                </label>
        </div>
    )
}