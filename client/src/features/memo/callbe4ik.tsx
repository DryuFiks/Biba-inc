import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Items from './Items';

function Callbek(): JSX.Element {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const addInConsole = useCallback((message: string) => console.log(message), []);

  useEffect(() => {
    addInConsole(text);
  }, [addInConsole, text]);
  const items = useMemo(() => ['1231234123', 'fasdfs', 'fasdfasdf', 'asdfasdfads'], []);
  return (
    <>
      <input type="text" onChange={(event) => setText(event.target.value)} value={text} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Already {count} clicks
      </button>
      <Items items={items} addInConsole={addInConsole} />
    </>
  );
}
export default Callbek;