import {useState} from "react";

export default function AddNote ({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    const charLimit = 300;

    function handleChange(event) {
        if(charLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }
    function handleSaveClick() {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return(
        <div className="note new">
            <textarea cols="10" rows="8"
                placeholder="Type to add a new note..."
                onChange={handleChange}
                value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}