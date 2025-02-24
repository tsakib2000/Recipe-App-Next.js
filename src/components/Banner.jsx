import Image from "next/image"
// import thumb from ""
const Banner = () => {
    return (
        <div className="mb-5 relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        
        <Image
          src='/02.jpg'
          alt="Restaurant Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Our Restaurant
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Delicious food served with love
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    );
};

export default Banner;