import React from 'react';
import './App.css';

function App() {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive(!active);
  }

  function randomPosition(min, max) {
    return Math.random() * (max - min) + min + '%';
  }

  function handleHover({ target }) {
    target.style.position = 'absolute';
    target.style.bottom = randomPosition(10, 90);
    target.style.left = randomPosition(10, 90);
  }

  return (
    <>
      {active ? (
        <section>
          <figure className="gif">
            <img src="./img/shrek-meme.gif" />
          </figure>
        </section>
      ) : (
        <section>
          <div className="content">
            <h1>Cuzinho hoje?</h1>
          </div>
          <nav className="navBar">
            <button onClick={handleClick}>Sim</button>
            <button
              onMouseOver={handleHover}
              style={{
                cursor: 'default',
              }}
            >
              Não
            </button>
          </nav>
        </section>
      )}
    </>
  );
}

export default App;
