import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () =>{

  const toDoData =[
    {label: 'Drink Coffee', important: false},
    {label: 'Make Awsome App', important: true},
    {label: 'Have a lunch', important: false}
  ];

  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos ={ toDoData } />
    </div>
  );
}


ReactDOM.render(<App />,document.getElementById('root'));