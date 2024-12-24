import React from "react";

const CategorySidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="w-1/4 ">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => onSelectCategory(category)}
              className="text-black hover:text-red"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
