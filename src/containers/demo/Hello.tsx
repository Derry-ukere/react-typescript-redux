import React from 'react';

type proptype = {
  name: string
} 
export default function Hello(props:proptype) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}
