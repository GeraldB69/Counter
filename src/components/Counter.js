import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count 
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <input
          type="number"
          value={count}
          onChange={e => setCount(parseInt(e.target.value))}
        />      
      <button onClick={() => setCount(parseInt(count + 1))}>
        +1
      </button>
      <button onClick={() => setCount(parseInt(count - 1))}>
        -1
      </button>
    </div>

  );
}

export default Counter;
