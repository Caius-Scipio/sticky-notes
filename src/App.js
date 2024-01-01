import React, { useState, useEffect } from "react";
import StickyNote from "./components/StickyNotes";
import './App.css';

const App = () => {
  const [stickies, setStickies] = useState([]);
    const [noteText, setNoteText] = useState("");
    const [noteColor, setNoteColor] = useState("LightYellow");

  useEffect(() => {
    const stickiesArray = JSON.parse(localStorage.getItem("stickiesArray")) || [];
    const stickyObjects = stickiesArray.map((key) => {
      const stickyData = JSON.parse(localStorage.getItem(key));
      return stickyData ? { id: key, ...stickyData } : null;
    }).filter((sticky) => sticky !== null);
    setStickies(stickyObjects);
  }, []);

  const createSticky = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const key = `sticky_${currentDate.getTime()}`;
    const stickyObj = { id: key, value: noteText, color: noteColor };

    localStorage.setItem(key, JSON.stringify(stickyObj));
    localStorage.setItem("stickiesArray", JSON.stringify([...stickies, key]));

    setStickies([...stickies, stickyObj]);
    setNoteText("");
  };

  const deleteSticky = (id) => {
    localStorage.removeItem(id);
    const updatedStickies = stickies.filter((sticky) => sticky.id !== id);
    localStorage.setItem("stickiesArray", JSON.stringify(updatedStickies.map((s) => s.id)));
    setStickies(updatedStickies);
  };

  const colorOptions = [
    { value: "LightYellow", label: "Yellow" },
    { value: "PaleGreen", label: "Green" },
    { value: "LightPink", label: "Pink" },
    { value: "LightBlue", label: "Blue" },
  ];

  return (
    <div>
      <form onSubmit={createSticky}>
        <label htmlFor="note_color">Color:</label>
        <select
          id="note_color"
          value={noteColor}
          onChange={(e) => setNoteColor(e.target.value)}
        >
          {colorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor="note_text">Text: </label>
        <input
          type="text"
          id="note_text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button type="submit"> Add Sticky Note</button>
      </form>
      <ul id="stickies">
        {stickies.map((sticky) => (
          <StickyNote
            key={sticky.id}
            id={sticky.id}
            color={sticky.color}
            value={sticky.value}
            onDelete={deleteSticky}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
