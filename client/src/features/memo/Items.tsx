import React from 'react';

const Items = ({
  addInConsole,
  items,
}: {
  items: string[];
  addInConsole: (value: string) => void;
}): JSX.Element => {
  console.log('render');

  return (
    <div>
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default React.memo(Items);