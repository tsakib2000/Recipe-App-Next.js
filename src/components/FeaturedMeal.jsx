

import Image from "next/image";
import Link from "next/link";

const FeaturedMeals =async () => {

        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await res.json();
const meals=data.meals


  return (
    <div className=" my-10  max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-5">Featured Meals</h2>
      <div className=" ">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white p-4 shadow-lg rounded-lg">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={300}
              height={100}
    
    
              className="rounded-md w-full"
            />
            <h3 className="text-xl font-semibold mt-3">{meal.strMeal}</h3>
            <Link
              href={`/featuredRecipe/${meal.idMeal}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMeals;
