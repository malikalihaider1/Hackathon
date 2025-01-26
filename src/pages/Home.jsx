import Button from "../Components/Button";
import NewArrivalGrid from "../Components/NewArrivalGrid";
import img4 from "../assets/images/home-image.png"
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import SpinLoader from "../assets/images/SpinLoader.svg";
import { useSelector } from "react-redux";

export default function Home() {
  const { products, isLoading, error } = useProducts("limit=15&skip=35");
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      className={`container-x transition-colors duration-300 ${darkMode ? "bg-slate-700" : ""}`}
     >
      
      <div className={`text-center ${darkMode ? "dark" : ""}`}>
  <img 
    src={img4} 
    alt="Saylani Welfare Trust" 
    className="w-full h-auto max-w-xl"
  />
  <div className="mt-6 px-4">
    <h2 className="text-2xl font-semibold text-green-400 dark:text-green">Welcome to the Saylani Welfare</h2>
    <p className="text-lg text-green-400 dark:text-green-400 mt-4">
      Non Governmental Organization in Pakistan
    </p>
    <p className="text-lg text-green-400 dark:text-green-400 mt-2">
      The largest NGO offering free daily Meals, Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.
    </p>
  </div>
</div>



    

      <Link
        to={"/products"}
        className="font-medium rounded bg-[#8dc63f] centre text-white h-14 w-56 mx-auto my-16"
      >
        View All Category
      </Link>



 

      <div className="flex  justify-between my-16">
        <h3 className={`heading ${darkMode ? "text-white" : ""}`}>
        What We Are Doing
        </h3>
        <Button className="h-14 bg-[#8dc63f] w-40">View All</Button>
      </div>
      <div className="flex gap-7">
        {isLoading ? (
          <img className="m-auto" src={SpinLoader} alt="SpinLoader" />
        ) : (
          ""
        )}
        
      </div>
      <div className="flex gap-7">
        {isLoading ? (
          <img className="m-auto" src={SpinLoader} alt="SpinLoader" />
        ) : (
          ""
        )}
        
      </div>

      <NewArrivalGrid />

      <a
        href="#top"
        className="my-5 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl ml-auto sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      >
        <FaArrowUp />
      </a>
    </div>
  );
}
