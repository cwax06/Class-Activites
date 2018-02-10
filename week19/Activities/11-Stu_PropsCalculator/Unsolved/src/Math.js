import React from "react";

const Math = props => {
  let value;

  switch(props.operator){
    case "+":
        value = props.num1 + props.num2;
        break;
    case "-":
        value = props.num1 - props.num2;
        break;
    case "*":
        value = props.num1 - props.num2;
        break:
    case "/":
        value = props.num1 - props.num2;
        break:
  }

  value = 10;

  return <span>{value}</span>;
};
