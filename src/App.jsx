import { useState } from "react";

function App() {
  const [poems, setPoems] = useState();

  function fetchPoems() {
    fetch("https://poetrydb.org/random/20")
      .then((response) => response.json())
      .then((data) => {
        setPoems(data);
        console.log(data);
      });
  }

  return (
    <div className="App">
      <button onClick={fetchPoems}>Fetch Poems</button>
      {poems &&
        poems.map((poem, index) => {
          return (
            <div>
              <small>{index + 1}</small>
              <h3>{poem.title}</h3>
              <span>{poem.author}</span>
            </div>
          );
        })}
    </div>
  );
}

export default App;
