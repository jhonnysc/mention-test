import React from "react";
import "./App.css";

interface User  {
  id: number;
  name: string;
}

const users: Array<User> = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Jack Doe",
  },
  {
    id: 4,
    name: "Jill Doe",
  },
];


const Modal = () => {
  return (
    <div>
      <div>Modal</div>
    </div>
  );
}


function App() {
  const [showUsers, setShowUsers] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [usersSelect, setUsersSelect] = React.useState<User[]>([]);

  const handleTextChange: React.TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    (event) => {
      const text = event.target.value;

      setTextAreaValue(text);

      const lastCharacter = text.slice(-1);
      

      if (lastCharacter === "@") {
        setShowUsers(true);
      } else {
        setShowUsers(false);
      }
    };


  const handleUserClick = (userId: number) => {
    const user = users.find((user) => user.id === userId);



    if (user) {
      setUsersSelect([...usersSelect, user]);
      setTextAreaValue((prevValue) => `${prevValue}${user.name} `)
    }
    setShowUsers(false)
  };

  return (
    <div className="App">
      {usersSelect.map((user) => {
        return (
          <>
            <input type='checkbox' key={user.id} />
            <span>{user.name}</span>
          </>
        )
      })}
      <textarea onChange={handleTextChange} value={textAreaValue}></textarea>
      <div>
        <ul>
          {showUsers &&
            users.map((user) => {
              return (
                <li key={user.id} onClick={() => handleUserClick(user.id)}>
                  {user.name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
