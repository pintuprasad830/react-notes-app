import { useState } from "react";

export function NotesApp() {

    const [note, setNote] = useState("");
    const [noteList, setNoteList] = useState([]);

    function addNote() {

        if (note === "") {
            alert("Enter a note");
            return;
        }

        setNoteList([...noteList, note]);

        setNote("");
    }

    function removeNote(index) {

        let data = noteList.filter((item, i) => i !== index);

        setNoteList(data);
    }

    return (
        <div className="container mt-4">

            <h2>Notes App</h2>

            <div className="input-group">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={addNote}
                >
                    Add Note
                </button>

            </div>

            <ul className="list-group mt-3">

                {
                    noteList.map((item, index) =>
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between"
                        >
                            {item}

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeNote(index)}
                            >
                                Delete
                            </button>

                        </li>
                    )
                }

            </ul>

        </div>
    );
}