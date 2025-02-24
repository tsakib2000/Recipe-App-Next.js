import React from "react";
import CategoryCard from "./CategoryCard";

const BestDish = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  console.log();
  const categories = data.categories;
  return (
    <div className="mb-5">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-2">
        Discover & Cook Amazing Recipes
      </h1>
      <p className="text-center text-base text-gray-400 mb-5">
        
        Discover a variety of delicious recipes across categories like beef,
        chicken, dessert, and lamb. Click 'Explore Recipes' to find inspiration
        and start cooking amazing meals at home
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories?.slice(0,8).map((meal) => (
          <CategoryCard key={meal.idCategory} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default BestDish;
