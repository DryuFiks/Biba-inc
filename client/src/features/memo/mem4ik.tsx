/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react';

function MyHeading(): JSX.Element {
  const [count, setCount] = useState(0);
  const [cssStyle, setCssStyle] = useState(false);

  const heavyFunction = (number: number): number => {
    console.log('Current value count: ', number);
    let result;
    for (let index = 0; index < 999999999; index += 1) {
      result = number * index;
    }
    console.log(result);

    return number * number;
  };

  const countSquare = useMemo(() => heavyFunction(count), [count]);
  return (
    <>
      <h1 onClick={() => setCssStyle(!cssStyle)} style={{ color: cssStyle ? 'green' : 'red' }}>
        useMemo
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <h2>{countSquare}</h2>
    </>
  );
}
export default MyHeading;