import React, {  useState } from 'react';

const CounterPage = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      count is {count}
    </button>
  );
};

export default CounterPage;