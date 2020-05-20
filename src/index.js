import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';
import ItemStatusFilter from './item-status-filter.js';

import './index.css';

const App = () =>{

  const toDoData =[
    {label: 'Drink Coffee', important: false, id:1},
    {label: 'Make Awsome App', important: true,id:2},
    {label: 'Have a lunch', important: false, id:3}
  ];

  return(
    <div className = "todo-app">
      <AppHeader toDo ={1} done ={3} />
      <div className ="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <ToDoList todos ={ toDoData } />
    </div>
  );
}


ReactDOM.render(<App />,document.getElementById('root'));