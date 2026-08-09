import { Button } from "./components/Button/Button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main>
      <h1>React Homework 38</h1>

      <Button text="Click me" type="button" onClick={handleClick} />
    </main>
  );
};

export default App;
