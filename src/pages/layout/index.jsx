//projectg import
import { Outlet } from "react-router-dom";
import { Project_logo_url } from "../../common/commonData";
import "../../index.css";

//import

const App = () => {

  
  

  return (
    <div className="w-full">
      <section className="w-full flexCenterSpaceBetween  sm:container lg:container md:container mx-auto  py-5">
        <div className="flexCenterSpaceBetween w-1/3 list-none p-2 text-gray-800 [&>li]:cursor-pointer font-semibold uppercase hover:[&>li]:text-blue-800">
          <li>
            <img src={Project_logo_url} alt="logo" className="w-[32px]" />
          </li>
          <li>Home</li>
          <li>Projects</li>
          <li>Login </li>
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Search..."
            className="border-b-2 border-gray-600 focus:outline-none outline-none "
          />
        </div>
      </section>

      <section className="w-full flexCenterSpaceBetween  sm:container lg:container md:container mx-auto">

        <Outlet />
      </section>

    </div>
  );
};

export default App;
