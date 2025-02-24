import React from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import Image from 'next/image';

const DetailsModal =async({id}) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data= await response.json()
    const recipeData=data.meals[0]
    return (
        <DialogContent  className="max-h-[80vh] overflow-y-auto">
     
      <div className=" bg-gray-50 py-8">
              <div className=" mx-auto rounded-lg overflow-hidden">
                {/* Recipe Image */}
                {recipeData.strMealThumb ? (
                  <Image
                    src={recipeData.strMealThumb}
                    alt={recipeData.strMeal}
                    width={300}
                    height={200}
                    className="w-full h-96 object-cover"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No Image Available</p>
                  </div>
                )}
        
                {/* Recipe Details */}
                <div className="p-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {recipeData.strMeal || "No Recipe Name"}
                  </h1>
                  <p className="text-gray-600 mb-4">
                    {recipeData.strCategory || "No Category"} | {recipeData.strArea || "No Area"}
                  </p>
        
                  {/* Tags */}
                  {recipeData.strTags && recipeData.strTags !== "N/A" ? (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {recipeData.strTags.split(",").map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 mb-6">No Tags Available</p>
                  )}
        
          
        
                  {/* Instructions */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
                    {recipeData.strInstructions && recipeData.strInstructions !== "N/A" ? (
                      <p className="text-gray-700 whitespace-pre-line">
                        {recipeData.strInstructions}
                      </p>
                    ) : (
                      <p className="text-gray-500">No Instructions Available</p>
                    )}
                  </div>
        
                  {/* YouTube Video */}
                  {recipeData.strYoutube && recipeData.strYoutube !== "N/A" ? (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Video Tutorial</h2>
                      <div className="w-full h-56">
                        <iframe
                          src={recipeData.strYoutube.replace("watch?v=", "embed/")}
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">No Video Tutorial Available</p>
                  )}
                </div>
              </div>
            </div>
      </DialogContent>
    );
};

export default DetailsModal;