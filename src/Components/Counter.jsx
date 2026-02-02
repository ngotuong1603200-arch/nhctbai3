import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
    const handleClick =() => {
        setCount(count+1);
    };
  return (
    <div className="counter-container">
        <h2>Components Counter</h2>
      <p>Bạn đã Click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click để tăng
      </button>
    </div>
  );
}
export default Counter;