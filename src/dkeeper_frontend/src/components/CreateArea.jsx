import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {



  const [isExpanded, setIsExpanded] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });



  function handleChange(event) {



    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    setIsExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" action="/submit" method="POST">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={() => setIsExpanded(true)}
        />

        {isExpanded && <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />}

        <Zoom in={isExpanded} >
          <Fab onClick={submitNote}> <AddIcon
            color="secondary"
            fontSize='large'
          /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
