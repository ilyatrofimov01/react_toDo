import React from 'react';
import './app-header.css';

const AppHeader = ({toDo,done}) => {
    return (
        <div className = "app-header d-flex">
            <h1 >My  toDo List</h1>
            <h2> {toDo} more to do, {done} has done</h2>
        </div>
    )
}

export default AppHeader;
  