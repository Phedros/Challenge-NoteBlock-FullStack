import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NoteComponent from "./NoteComponent";

import NoteService from "../services/NoteService";
import "./ListNotesComponent.css";

export const ListNotesComponent = ({
    stateFilter
}) => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({ title: '', content: '' });
    const [showNoteComponent, setShowNoteComponent] = useState({ show: false, action: 'add', id: null });

    const onChangeNoteState = (note) => {
        console.log(note);
        if (note.archived) {
            NoteService.activeNote(note.id)
            .then((response) => {
                getNotes();
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            NoteService.archiveNote(note.id)
            .then((response) => {
                getNotes();
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    const onEdit = (id) => {
        setNote(notes.find((note) => note.id === id));
        setShowNoteComponent({ show: true, action: 'edit', id });
    }

    const onAddNoteClick = () => {
        setShowNoteComponent({ show: true, action: 'add', id: null });
    }

    const onCancel = () => {
        setShowNoteComponent({ show: false, action: 'add', id: null });
    }

    const getNotes = () => {
        if (stateFilter === "active") {
            NoteService.getAllNotes()
            .then((response) => {
                setNotes(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        } else if (stateFilter === "archive") {
            NoteService.getArchivedNotes()
            .then((response) => {
                setNotes(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    const onSave = (note) => {
        if (showNoteComponent.action === 'add') {
            NoteService.createNote(note).then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        } else if (showNoteComponent.action === 'edit') {
            NoteService.editNote(showNoteComponent.id, note).then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const onDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete the note?");
        if (confirmDelete) {
            NoteService.deleteNote(id)
            .then((response) => {
                console.log("Note deleted");
                getNotes();
                
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        getNotes();
    }, [stateFilter]);

    return (
        <div className="container">
            <h2 className="text-center">My {stateFilter === "active" ? 'Active' : 'Archived'} Notes</h2>
            {stateFilter === "active" && (
                <>
                    <div>
                        <button onClick={onAddNoteClick} className='btn btn-primary mb-2'>Add Note</button>
                        <Link to='/archives' className='btn btn-secondary mb-2'>View Archives</Link>
                    </div>
                </>
            )}
            {stateFilter === "archive" && (
                <div>
                <Link to='/notes' className='btn btn-secondary mb-2'>View Actives</Link>
            </div>
            )}

            <div className="note-container">
                {notes.map((noteEntity) => (
                <div key={noteEntity.id} className="note">
                    <div className="note-header">
                    <span>ID: {noteEntity.id}</span>
                    <button onClick={(event) => onChangeNoteState(noteEntity)}>{noteEntity.archived ? 'Active' : "Archive"}</button>
                    <button onClick={(event) => onEdit(noteEntity.id)}>Edit</button>
                    <button onClick={(event) => onDelete(noteEntity.id)}>Delete</button>
                    </div>
                    <div className="note-content">
                    <h3>{noteEntity.title}</h3>
                    <p>{noteEntity.content}</p>
                    </div>
                    <div className="note-footer">
                    Created at: {noteEntity.createdAt}
                    </div>
                    <div>Archived: {noteEntity.archived ? 'Si' : 'No'}</div>
                </div>
                ))}
            </div>
            {showNoteComponent.show && (
                <NoteComponent
                    note={note}
                    onCancel={onCancel}
                    onSave={onSave}
                />
            )}
        </div>
    );
    };

    export default ListNotesComponent;
