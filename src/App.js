import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">COLUMN1</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home" />
            Home
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
