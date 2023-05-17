import React from 'react';

interface MyComponentProps {
  name: string;
}

function MyComponent(props: MyComponentProps) {
  return <div>{props.name}</div>;
}

export default MyComponent;