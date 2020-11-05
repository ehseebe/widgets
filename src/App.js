import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/DropDown';
import Translate from './components/Translate';

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
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
   <div> 
     {/* <Accordion items={items}/>  */}
     {/* <Search /> */}
     {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
     {showDropdown ? 
     <Dropdown 
     selected={selected} 
     onSelectedChange={setSelected} 
     options={options}
     /> : null} */}
     <Translate />
     </div>
  )
}

export default App;