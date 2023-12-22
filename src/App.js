import React from 'react';

const JSXRules = ({ text }) => (
  <blockquote>{text}</blockquote>
);

const FancyTable = ({ n }) => {
  const listItems = [];
  for (let i = 1; i <= n; i++) {
    listItems.push(<li key={i}>{i}</li>);
  }

  return <ul>{listItems}</ul>;
};

const Multiple = ({ name, number }) => [
  <h2 key="header">{name}</h2>,
  <FancyTable key="table" n={number} />
];

const App = () => (
  <div>
    <JSXRules text="Text." />

    <FancyTable n={5} />

    <Multiple name="Example List" number={3} />
  </div>
);

export default App;
