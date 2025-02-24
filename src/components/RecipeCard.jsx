import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import Image from "next/image";
  import Link from "next/link";
import { Button } from "./ui/button";
import DetailsModal from "./DetailsModal";
  
  export default function RecipeCard({ meal }) {
    return (<>
    <Dialog className='w-full'>
      <Card className="w-full overflow-hidden rounded-lg shadow-lg">
        {/* Card Image */}
        <CardHeader className="p-0">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={400}
            height={300}
            className="h-48 w-full object-cover"
          />
        </CardHeader>
  
        {/* Card Content */}
        <CardContent className="p-6">
          <CardTitle className="text-xl font-bold">{meal.strMeal}</CardTitle>
          <CardDescription className="mt-2 text-sm text-gray-600">
            A delicious and hearty vegetable shepherd's pie.
          </CardDescription>
        </CardContent>
  
        {/* Card Footer */}
        <CardFooter className="p-6 pt-0">
    
        <DialogTrigger asChild>
        <Button variant="outline">view Recipe</Button>
      </DialogTrigger>
          
        </CardFooter>
      </Card>

      {/* Modal */}



      
<DetailsModal id={meal.idMeal}/>



      </Dialog>
      </>
    );
  }