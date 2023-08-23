import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


/*const items = ["a", "b", "c", "d", "e"];         111
const listItems = items.map((number) =>
<li>{number}</li>
);*/


const initialList = [
 {
   id: 1,
   name: 'david',
 },
 {
   id :2 ,
   name: 'chana',
 }
];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat({ name: action.name, id: action.id });
      default:
        throw new Error();
}
};

const initialState = { count: 0 };

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      +
    </button>
  </div>
 );

 const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
      ))}
  </ul>
 );
 
const App = () => {    //function App what is the difference question mark
                           //problem with upload pictures
                           //<ul>{listItems}</ul>  111
   const [list, dispatcherList] = React.useReducer(
    listReducer,
    initialList
    );

   const [state, dispatch] = useReducer(countReducer, initialState);

   const [name, setName] = React.useState('');

   function handleChange(event){
    setName(event.target.value);
   }

   function handleAdd(){
    dispatcherList({ type: 'ADD_ITEM', name, id: uuidv4() });
  
    setName('');
   }

  return (
    <div>
     <header>      
       <img src='images/logo.png' alt='' /> 
     </header>
     <body>
        Holidays
     </body>
     <button>
       Refresh data
     </button>
      <div>       
       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
       count {state.count}
       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      </div>

 
     <div>
      <AddItem
       name={name}
       onChange={handleChange}
       onAdd={handleAdd}
       />
       <List list={list} />
       </div>

     </div>
   );
 };
 









export default App;


