export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched all notes");
};

export const createNote = (req, res) => {
  res.status(201).send("Notes Created Successfully");
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Notes Updated Successfully" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Notes Deleted Successfully" });
};
