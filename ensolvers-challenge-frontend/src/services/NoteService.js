import axios from "axios";

const BASE_API_URL = "http://localhost:8080";
const NOTE_ROUTE = `${BASE_API_URL}/note`;

class NoteService{

    getAllNotes(){
        return axios.get(`${NOTE_ROUTE}/all`);
    }

    getArchivedNotes(){
        return axios.get(`${NOTE_ROUTE}/archived`);
    }

    archiveNote(id) {
        return axios.post(`${NOTE_ROUTE}/archive/${id}`);
    }

    activeNote(id) {
        return axios.post(`${NOTE_ROUTE}/activate/${id}`);
    }

    createNote(note){
        return axios.post(NOTE_ROUTE, note);
    }

    editNote(id, note) {
        return axios.put(`${NOTE_ROUTE}/${id}`, note);
    }

    deleteNote(id) {
        return axios.delete(`${NOTE_ROUTE}/${id}`);
    }

}

export default new NoteService();