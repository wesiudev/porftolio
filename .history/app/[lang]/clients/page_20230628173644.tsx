"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function ClientsPage() {
  const dispatch = useDispatch();
  const [{ userName, password }, setUserInput] = useState<{
    userName: string;
    password: string;
  }>({ userName: "", password: "" });
  const handleFormSubmit: React.MouseEventHandler<HTMLDivElement> = () => {};
  const handleTextInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput({
      userName,
      password,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full min-h-screen linear-gradient">
      <div className="flex flex-col lg:flex-row w-full px-3 lg:px-0 lg:w-3/4 mx-auto">
        <div>
          <h1>Zarządzanie sklepem</h1>
          <h2>Zaloguj się,</h2>
          <h2>Dodawaj, edytuj i usuwaj przedmioty w swoim sklepie</h2>
        </div>
        <div className="h-screen flex items-center justify-center w-full bg-red-500">
          <div>
            <div>
              <label htmlFor="userName">Login</label>
              <input
                onChange={(e) => handleTextInput(e)}
                type="text"
                name="userName"
                value={userName}
              />
            </div>
            <div>
              <label htmlFor="password">Hasło</label>
              <input
                onChange={(e) => handleTextInput(e)}
                type="password"
                name="password"
                value={password}
              />
            </div>
            <div onClick={handleFormSubmit} className="btn">
              <button>ZALOGUJ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
