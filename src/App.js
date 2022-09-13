import { useState } from "react";
import { Button, Input } from "semantic-ui-react";

function App() {
  const [listItem, setListItem] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const addListItem = () => {
    setListItem((prevState) => {
      return [...prevState, { value: inputValue, id: new Date() }];
    });
    setInputValue("");
  };

  const itemDelete = (id) => {
    setListItem((prevState) => prevState.filter((item) => item.id !== id));
  };
  return (
    <div className="ToDoList">
      <h1>ToDo list</h1>
      <Input type="text" value={inputValue} onChange={handleChange} />
      <Button
        onClick={() => {
          addListItem();
        }}
      >
        add
      </Button>
      <ul>
        {listItem.map((item) => (
          <li key={item.id}>
            {item.value}
            <span
              role="presentation"
              onClick={() => {
                itemDelete(item.id);
              }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
