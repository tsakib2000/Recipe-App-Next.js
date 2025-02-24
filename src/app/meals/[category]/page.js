import RecipeCard from '@/components/RecipeCard';
import React from 'react';

const CategoryFood = async({params}) => {
    const {category}= await params
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
const data = await response.json()
const meals= data.meals
console.log(meals);
    return (
        <div className='my-5'>
             <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Explore Delicious Recipes</h1>
          <p className="text-base ">Discover a variety of mouth-watering recipes from around the world.</p>
         
        </div>
        <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                meals.map(meal=><RecipeCard key={meal.idMeal} meal={meal}/>)
            }
        </div>
        </div>
    );
};

export default CategoryFood;