package com.example.ensolverschallenge.service;

import com.example.ensolverschallenge.exceptions.NoteNotFoundException;
import com.example.ensolverschallenge.models.NoteEntity;
import com.example.ensolverschallenge.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImp implements INoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Override
    public Optional<NoteEntity> findNoteById(Long id){
        return noteRepository.findById(id);
    }

    @Override
    public ResponseEntity<?> createNote(NoteEntity note) {
        note.setCreatedAt(LocalDate.now());
        note.setArchived(false);
        noteRepository.save(note);
        return ResponseEntity.ok(note);
    }

    @Override
    public ResponseEntity<?> editNote(Long id, NoteEntity updateNote) {
        Optional<NoteEntity> noteOptional = findNoteById(id);

        if (noteOptional.isPresent()) {
            NoteEntity existingNote = noteOptional.get();

            existingNote.setTitle(updateNote.getTitle());
            existingNote.setContent(updateNote.getContent());

            return ResponseEntity.ok(noteRepository.save(existingNote));
        }
        else{
            throw new NoteNotFoundException("Nota no encontrada con ID: " + id);
        }
    }

    @Override
    public void archiveNote(Long id) {

        System.out.println("Archive note.....");
        System.out.println(id);
        Optional<NoteEntity> noteOptional = findNoteById(id);

        if(noteOptional.isPresent()){
            System.out.println("Esta presente.. queremos archivarla");
            NoteEntity noteOptionalIsPresent = noteOptional.get();
            noteOptionalIsPresent.setArchived(true);
            noteRepository.save(noteOptionalIsPresent);
        }
        else{
            throw new NoteNotFoundException("Nota no encontrada con ID: " + id);
        }
    }

    @Override
    public void activateNote(Long id) {
        Optional<NoteEntity> noteOptional = findNoteById(id);

        if(noteOptional.isPresent()){
            NoteEntity noteOptionalIsPresent = noteOptional.get();
            noteOptionalIsPresent.setArchived(false);
            noteRepository.save(noteOptionalIsPresent);
        }
        else{
            throw new NoteNotFoundException("Nota no encontrada con ID: " + id);
        }
    }

    @Override
    public List<NoteEntity> listActiveNotes() {

        return noteRepository.findActiveNotes();
    }

    @Override
    public List<NoteEntity> listArchivedNotes() {

        return noteRepository.findArchivedNotes();
    }

    @Override
    public void deleteNote(Long id) {
        Optional<NoteEntity> noteOptional = findNoteById(id);

        if (noteOptional.isPresent()) {
            NoteEntity existingNote = noteOptional.get();
            noteRepository.delete(existingNote);
        }
        else{
            throw new NoteNotFoundException("Delted note: " + id);
        }
    }


}
