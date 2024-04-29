// ToDo.js
import axios from "axios";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios
      .delete(`https://todoappbackend-2ubt.onrender.com/api/v1/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      });
  };

  const updateToDo = () => {
    setPopupContent({text,id})
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      <div className="text-richblack-5">{text}</div>
      <div className="icons">
        <CiEdit className="icon" onClick={updateToDo} />
        <RxCrossCircled className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
