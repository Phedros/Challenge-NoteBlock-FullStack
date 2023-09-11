package com.example.ensolverschallenge.controller;

import com.example.ensolverschallenge.models.NoteEntity;
import com.example.ensolverschallenge.service.NoteServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/note")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {

    @Autowired
    NoteServiceImp noteServiceImp;

    @PostMapping("")
    public Optional<NoteEntity> createNote(@RequestBody NoteEntity note){
        noteServiceImp.createNote(note);
        return noteServiceImp.findNoteById(note.getId());
    }

    @PutMapping("{id}")
    public Optional<NoteEntity> editNote(@PathVariable Long id, @RequestBody NoteEntity updateNote){
        noteServiceImp.editNote(id, updateNote);
        return noteServiceImp.findNoteById(id);
    }

    @PostMapping("/archive/{id}")
    public ResponseEntity<?> archiveNote(@PathVariable Long id){
        noteServiceImp.archiveNote(id);
        return ResponseEntity.ok(noteServiceImp.findNoteById(id));
    }

    @PostMapping("/activate/{id}")
    public ResponseEntity<?> activateNote(@PathVariable Long id){
        noteServiceImp.activateNote(id);
        return ResponseEntity.ok(noteServiceImp.findNoteById(id));
    }

    @GetMapping("/all")
    public List<NoteEntity> listActiveNotes(){
        return noteServiceImp.listActiveNotes();
    }

    @GetMapping("/archived")
    public List<NoteEntity> listArchivedNotes(){
        return noteServiceImp.listArchivedNotes();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id){
        noteServiceImp.deleteNote(id);
    }
}
