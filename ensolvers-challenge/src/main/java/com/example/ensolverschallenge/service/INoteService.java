package com.example.ensolverschallenge.service;

import com.example.ensolverschallenge.models.NoteEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;


public interface INoteService {

    public ResponseEntity<?> createNote(NoteEntity note);
    public ResponseEntity<?> editNote(Long id, NoteEntity updateNote);
    public void archiveNote(Long id);
    public void activateNote(Long id);
    public Optional<NoteEntity> findNoteById(Long id);
    public List<NoteEntity> listActiveNotes();
    public List<NoteEntity> listArchivedNotes();
    public void deleteNote(Long id);

}
