import React from 'react';
import './App.css';
import RichTextEditor from './components/RichTextEditor';

const style = {
  margin: '1rem'
}

function App() {
  return (
      <div style={style}>
        <h1>Rich Text Editor</h1>
        <RichTextEditor/>
      </div>
  );
}

export default App;
