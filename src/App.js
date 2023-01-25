import "./App.css";
import Form from "./components/form";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [names, setName] = useState([]);
  const [cant, setCant] = useState([0]);

  function handleAdd(value) {
    let temp = [...cant];
    temp.push(value);
    setCant(temp);
  }

  function handleDelete(index) {
    const temp = names.filter((i) => i.id != index);

    setName(temp);
    const temp2 = cant.filter((i) => i != index);

    setCant(temp2);
  }

  function handleNewName(newName, num) {
    const newNames = {
      id: num,
      name: newName,
    };

    let temp = [...names];
    const index = temp.findIndex((object) => {
      return object.id === newNames.id;
    });


    if (temp.length === 0) {
      let temp = [...names];
      temp.push(newNames);
      setName(temp);
    } else if (index >= 0) {
      let temp = [...names];
      let item = temp.find((item) => item.id === newNames.id);
      item.name = newNames.name;
      setName(temp);
    } else {
      let temp = [...names];
      temp.push(newNames);
      setName(temp);
    }
  }

  return (
    <div className="App">
      {cant.map((item, index) => (
        <>
          <Form key={index + 1} index={index} newName={handleNewName} />
          <Button
            index={index}
            key={index + 2}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          ></Button>
        </>
      ))}
      <div> {JSON.stringify(names)} </div>
    </div>
  );
}

export default App;
