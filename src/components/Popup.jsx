import axios from 'axios';
import React, { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios
      .put(`https://todoappbackend-2ubt.onrender.com/api/v1/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCrossCircled className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo </h1>
        <div className="popup__input_holder">
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo} >Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup
