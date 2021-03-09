import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNode from "./CreateNode";
import Note from "./Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert('hi goreous')
    setAddItem((preValue) => {
      return [...preValue, note];
    });
  };

  const ondelete = (id) => {
    setAddItem((preValue) => {
      return preValue.filter((currentData, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />

      <CreateNode passNote={addNote} />

      {addItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={ondelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
