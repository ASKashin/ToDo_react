import { useState } from "react";
import { Button, Input } from "semantic-ui-react";

// 1. сначало решил что нужно плучить значение из инпут
// 2. использовать это значение по нажатию кнопки

function App() {
  const [listItem, setListItem] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value); // тут погуглил, не мог понять сразу как получить значение из инпут
    // в функции handleChange мы берем value и записываем егго в наш inputValue через setInputValue
  };
  const addListItem = () => {
    setListItem((prevState) => {
      return;
      [...prevState, inputValue];
    });
  };
  return (
    <div className="ToDoList">
      <h1>ToDo list</h1>
      <Input type="text" value={inputValue} onChange={handleChange} />
      <Button
        onClick={() => {
          addListItem;
        }}
      >
        add
      </Button>
      <ul>
        <li>
          124 <span role="presentation">X</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
