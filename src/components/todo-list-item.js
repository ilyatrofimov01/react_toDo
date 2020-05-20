import React from 'react';
import './todo-list-item.css';

const ToDoListItem = ({ label, important = false }) =>{

    const style ={
        color: important? 'tomato' : 'black'
    }

return (
    <span 
        style = {style }>
        { label }
    </span>)
};

export default  ToDoListItem; 