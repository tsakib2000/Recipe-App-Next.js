import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const CategoryCard = ({meal}) => {

    return (
      <Card className="flex flex-col justify-between">
      <CardHeader>
               
      <div className="relative h-48">
          <Image
            src={meal.strCategoryThumb}
            alt={meal.strCategory}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardTitle>{meal.strCategory}</CardTitle>
       
      </CardHeader>
      <CardContent>
        <p>{meal.strCategoryDescription.slice(0,200)}...</p>
      </CardContent>
      <CardFooter>
      <Link className="w-full" href={`/meals/${meal.strCategory}`}>
      <Button className="w-full">
   Explore 
        </Button>
        </Link>
      </CardFooter>
    </Card>
    
    );
};

export default CategoryCard;
{/* <h2 className="text-2xl font-bold mb-2 text-gray-800">

</h2>
<p className="text-gray-600 text-sm line-clamp-3">

</p> */}