import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BookCreate() {
    const [title, setTitle] = useState(``);
    const [author, setAuthor] = useState(``);
    const [description, setDescription] = useState(``);

    const onSubmit = (e) => {
        e.preventDefault();
            
        axios
          .post('https://exam-backend-3ujm.onrender.com/book/', {
            title,
            author,
            description
          })
          .then((res) => {
            window.location = '/';
          });
      };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link
                            to='/'
                            className='btn btn-info float-left'
                        >
                            Show BooK List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>
                        <form noValidate="" onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Title of the Book"
                                name="title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                spellCheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Author"
                                name="author"
                                className="form-control"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                spellCheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Describe this book"
                                name="description"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                spellCheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
    </div>
    )
}