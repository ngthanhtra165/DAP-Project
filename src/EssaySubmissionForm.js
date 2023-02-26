import React, { useState } from 'react';
import './EssaySubmissionForm.css';

function EssaySubmissionForm() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for submitting the essay
  };

  return (
    <form onSubmit={handleSubmit} className="essay-form">
      <div className='task'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          required
          placeholder='Add your task'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='essay'>
        <label htmlFor="essay">Essay:</label>
        <input
          type="text"
          id="essay"
          required
          placeholder='Add your essay'
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
        />
        <button type="submit">Submit Essay</button>
      </div>
    </form>
  );
}

export default EssaySubmissionForm;
