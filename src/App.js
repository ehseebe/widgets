import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './components/Header';

const items = [
  {
    title: "What is React?",
    content: "React is a frontent javascript framework",
  },
  {
    title: "Why use React?",
    content: "Super cool library that everyone looooves",
  },
  {
    title: "How do you use React?",
    content: "By creating components!!!",
  },
];

const options = [
  {
    label: "it's red",
    value: "red",
  },
  {
    label: "it's green",
    value: "green",
  },
  {
    label: "it's blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        {/* one jsx inside of another = child, therefore we receive children in the route component */}
        <Accordion items={items} />
      </Route>
      <Route path="list">
        <Search />
      </Route>
      <Route path="dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          label="Select a color"
        />
      </Route>
      <Route path="translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
