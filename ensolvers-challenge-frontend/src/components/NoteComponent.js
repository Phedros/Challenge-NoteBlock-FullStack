import React, { useState } from 'react'

export const Note = ({
    note = {
        title: "",
        conent: ""
    },
    onCancel,
    onSave
}) => {

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const onSaveClick = () => {
        onSave({
            title,
            content
        });
    }

    return (
        <div style={{ display: 'flex', position: 'fixed', justifyContent: 'center', alignItems: 'center', top: '25%', left: '30%' }}>
            <div className='container' style={{ width: '800px' }}>
                <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add note</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-s'>
                                <label className='form-label'>Title</label>
                                <input 
                                    type='text'
                                    placeholder='Add title'
                                    title='title'
                                    className='form-control'
                                    value={ title }
                                    onChange={ (e) => setTitle(e.target.value) }
                                />
                            </div>
                            <div className='form-group mb-s'>
                                <label className='form-label'>Content</label>
                                <textarea 
                                    type='content'
                                    placeholder='Add content'
                                    content='content'
                                    className='form-control'
                                    value={ content }
                                    onChange={ (e) => setContent(e.target.value) }
                                />
                            </div>
                            <button className='btn btn-success' onClick={onSaveClick}>Save</button>
                            <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Note;
