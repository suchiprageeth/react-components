import React, { useEffect, useState, useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (item) => {
    setIsOpen(false);
    onChange(item);
  };

  const renderedItems = items.map((item) => {
    return (
      <div
        className="hover:bg-sky-100 round cursor-pointer p-1"
        onClick={() => handleOptionClick(item)}
        key={item.id}
      >
        {item.title}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.title || "Select an Option"}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderedItems}</Panel>}
    </div>
  );
};

export default Dropdown;
