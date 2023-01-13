import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const dropDownItems = [
    { id: 1, title: "Test 1" },
    { id: 2, title: "Test 2" },
    { id: 3, title: "Test 3" },
  ];
  return (
    <div className="flex">
      <Dropdown
        items={dropDownItems}
        value={selection}
        onChange={handleSelect}
      />

      <Dropdown
        items={dropDownItems}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
};

export default App;
