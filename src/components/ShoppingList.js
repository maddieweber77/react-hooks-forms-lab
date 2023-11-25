import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //1. setting up state for filter
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

//Creates a new array called itemsToDisplay by filtering the items prop based on two conditions:
// ? First condition: Filters items based on the selected category. If the selected category is "All" or if the item's category matches the selected category, it passes this filter.
// ! Second condition: Filters items based on the search term. It checks if the lowercase version of the item's name includes the lowercase version of the search term.

  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      {/* 2. passing down state  to filter (and renaming state)*/}
      <Filter
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;