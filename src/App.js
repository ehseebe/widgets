import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontent javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'Super cool library that everyone looooves'
  },
  {
    title: 'How do you use React?',
    content: 'By creating components!!!'
  }
]

const App = () => {
  return (
   <div> 
     {/* <Accordion items={items}/>  */}
     <Search />
     </div>
  )
}

export default App;