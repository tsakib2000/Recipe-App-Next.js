import Image from "next/image";
import Link from "next/link";


const CategoryCard = ({meal}) => {
console.log(meal);
    return (
        <div className=" rounded-lg flex flex-col justify-between border p-5">
        
        <div className="relative h-48">
          <Image
            src={meal.strCategoryThumb}
            alt={meal.strCategory}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
  
     
        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {meal.strCategory}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3">
            {meal.strCategoryDescription}
          </p>
          <Link href={`/category/${meal.strCategory}`} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
            Explore Recipes
          </Link>
        </div>
      </div>
    );
};

export default CategoryCard;