import React from 'react';

import ToDoListItem from './todo-list-item';


const ToDoList = ({ todos }) => {
    const items = ['Learn React','Built Awsome app'];

    const elements =  todos.map((item) => {
        return (  
            <li>
                <ToDoListItem {...item} />
            </li>
            );
    });

    return ( 
      <ul>
          { elements }
      </ul>);
};

export default ToDoList;