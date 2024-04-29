const ToDoModel = require("../model/ToDoModel");

module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.send(toDos);
  } catch (error) {
    console.error("Error retrieving todos:", error);
    res.status(500).send({ error: "Failed to retrieve todos" });
  }
};

module.exports.saveToDos = async (req, res) => {
  try {
    const { toDo } = req.body;
    const newToDo = await ToDoModel.create({ toDo });
    console.log("Saved Successfully");
    res.status(201).send(newToDo);
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).send({ error: "Failed to save todo" });
  }
};


module.exports.updateToDos = async (req, res) => {
  try {
    const { id } = req.params;
    const { toDo } = req.body;

    await ToDoModel.findByIdAndUpdate(id, { toDo });
    console.log("Updated Successfully");
    res.status(200).send("Updated Successfully");
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).send({ error: "Failed to update todo" });
  }
};

module.exports.deleteToDos = async (req, res) => {
  try {
    const { id } = req.params;
    await ToDoModel.findByIdAndDelete(id);
    console.log("Deleted Successfully");
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).send({ error: "Failed to delete todo" });
  }
};
