package com.example.ensolverschallenge.repositories;

import com.example.ensolverschallenge.models.NoteEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends CrudRepository<NoteEntity, Long> {

    @Query("SELECT n FROM NoteEntity n WHERE n.archived = true")
    List<NoteEntity> findArchivedNotes();

    @Query("SELECT n FROM NoteEntity n WHERE n.archived = false")
    List<NoteEntity> findActiveNotes();



}
