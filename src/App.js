import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/DropDown'

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

const options = [
  {
    label: 'it\'s red',
    value: 'red'
  },
  {
    label: 'it\'s green',
    value: 'green',
  },
  {
    label: 'it\'s blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
   <div> 
     {/* <Accordion items={items}/>  */}
     {/* <Search /> */}
     <Dropdown 
     selected={selected} 
     onSelectedChange={setSelected} 
     options={options}
     />
     </div>
  )
}

export default App;