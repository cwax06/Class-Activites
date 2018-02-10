import React from "react";

const List = props => (
  <ul className="list-group">
    props.groceries.map(groceryItem => {
    <li>{groceryItem.name}</li>; 
    });
  }
  </ul>
);

export default List;
