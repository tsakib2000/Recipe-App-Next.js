import Banner from "@/components/Banner";
import BestDish from "@/components/BestDish";
import FeaturedMeals from "@/components/FeaturedMeal";



export default function Home() {
 

  return (
<div className="">
<Banner/>
<div className="w-11/12 mx-auto">
<BestDish/>
<FeaturedMeals/>
</div>

</div>
  );
}
