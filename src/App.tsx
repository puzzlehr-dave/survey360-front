import axios from "axios";
import { useEffect, useState } from "react";
import { Notes } from "./types/notes";

export default function App() {
  const [notes, setNotes] = useState<Notes>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      const { data } = await axios.get("http://localhost:4000/notes");
      const notes: Notes = data.notes;
      setNotes(notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  async function deleteNote(id: number) {
    try {
      await axios.delete("http://localhost:4000/notes/" + id);
      await fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  return (
    <div className="max-w-[300px] mx-auto my-5">
      <div className="flex items-center gap-2">
        <input
          className="border-[1px] border-gray-400 focus:border-gray-800 px-2 py-1 outline-none rounded-lg w-full"
          type="text"
        />
        <button className="text-xs bg-gray-200 p-2 ml-auto">ADD</button>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {notes.map((note) => (
          <div key={note.id} className="flex items-center  bg-gray-100 p-2">
            <p>{note.message}</p>
            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => deleteNote(note.id)}
                className="text-xs bg-gray-200 p-2"
              >
                DEL
              </button>
              <button className="text-xs bg-gray-200 p-2">EDT</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
