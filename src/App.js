import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import Popup from "./components/Popup";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`https://todoappbackend-2ubt.onrender.com/api/v1/get`)
      .then((res) => {
        setToDos(res.data); // Update the toDos state with the fetched data
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`https://todoappbackend-2ubt.onrender.com/api/v1/save`, { toDo: input })
      .then((res) => {
        // setToDos([...toDos, res.data]); // Add the new ToDo to the toDos state
        setUpdateUI((prevState) => !prevState);
        console.log(res.data);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a ToDo....."
          />

          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              text={el.toDo}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>

        {showPopup && (
          <Popup
            setShowPopup={setShowPopup}
            popupContent={popupContent}
            setUpdateUI={setUpdateUI}
          />
        )}
      </div>
    </div>
  );
}

export default App;
