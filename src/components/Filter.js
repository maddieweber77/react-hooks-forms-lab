import React from "react";

//3. passing state thru to Filter function
function Filter({ onCategoryChange, onSearchChange, search }) {
  function handleSearchChange(event) {
     // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onSearchChange(event.target.value);
  }
  
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."
      
      // 4. connecting state to input field
      value={search} 
      onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
