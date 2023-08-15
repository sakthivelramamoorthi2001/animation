//projectg import
import { useEffect, useState } from "react";
import { Home_page_Image_url } from "../common/commonData";
import "../index.css";

//import
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const naviagte = useNavigate();
  const [search, setSearch] = useState('');
  const project_data =[
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXkDtbprHQfPhCyVSXq7XrdNLD6ny2kxQEg&usqp=CAU",
      title: "Box Image Animation",
      path:'/p1',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore odit aliquid natus corporis officia ipsa illum aut ex illo animi ea distinctio perferendis, culpa nisi nostrum in magni qui!",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXkDtbprHQfPhCyVSXq7XrdNLD6ny2kxQEg&usqp=CAU",
      path:'/p1',
      title: "CNETER image",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore odit aliquid natus corporis officia ipsa illum aut ex illo animi ea distinctio perferendis, culpa nisi nostrum in magni qui!",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXkDtbprHQfPhCyVSXq7XrdNLD6ny2kxQEg&usqp=CAU",
      path:'/p1',
      title: "correct",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore odit aliquid natus corporis officia ipsa illum aut ex illo animi ea distinctio perferendis, culpa nisi nostrum in magni qui!",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXkDtbprHQfPhCyVSXq7XrdNLD6ny2kxQEg&usqp=CAU",
      path:'/p1',
      title: "correct d",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore odit aliquid natus corporis officia ipsa illum aut ex illo animi ea distinctio perferendis, culpa nisi nostrum in magni qui!",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXkDtbprHQfPhCyVSXq7XrdNLD6ny2kxQEg&usqp=CAU",
      path:'/p1',
      title: "ss",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore odit aliquid natus corporis officia ipsa illum aut ex illo animi ea distinctio perferendis, culpa nisi nostrum in magni qui!",
    },
  ]

  const [projects_data, setProjectsData] = useState(project_data)



  const ProjectComponent = () => {
    if(!projects_data.length){
      return <div className="text-center h-[20vh] w-full border border-1-black flex items-center justify-center mt-5">
      project not found</div>
    }

    return projects_data.map((item, index) => {
      return (
        <div 
          className="border border-1-black w-[45%] p-3 text-left m-5 h-[28vh] overflow-scroll flexCenterSpaceBetween cursor-pointer "
          key={index} onClick={() => naviagte(item.path) }
        >
          <img src={item?.img} alt="" className="w-1/3 p-1" />
          <div className="ml-3 mt-3">
            <h1 className="text-xl font-semibold uppercase mb-1 hover:text-blue-800 ">
              {item.title}
            </h1>
            <p>{item.content} </p>
          </div>
        </div>
      );
    });
  };


  useEffect(() => {
    if(search != ""){
      setProjectsData(project_data.filter(item => (String(item.title).toLowerCase().match(search))))
    }else {
      setProjectsData(project_data)
    }

  },[search])
  

  return (
    <div className="w-full">
      <section className="!w-full  ">
        <h1 className=" w-full text-center top-[10%]   animate-charcter  ">
          Animation
        </h1>
        <img
          src={Home_page_Image_url}
          alt="image"
          className="w-full border-r-4 "
        />
        <h1 className=" w-full text-center top-[10%]   animate-charcter  ">
          Css
        </h1>

        <hr />
      </section>

      <section className="sm:container lg:container md:container mx-auto w-full mt-5">
       <div className="flexCenterSpaceBetween">
       <h1 className="text-2xl uppercase">Projects</h1>
        <div className="">
          <input
            type="text"
            placeholder="Search..."
            className="border-b-2 border-gray-600 focus:outline-none outline-none"
            onChange={(e) => setSearch(String(e.target?.value).toLowerCase())}
          />
        </div>
       </div>
        <section className="w-full flex flex-row items-center justify-between flex-wrap  fl">
          <ProjectComponent />
        </section>
      </section>

      <section className="sm:container lg:container md:container mx-auto w-full">
        <Outlet />
      </section>
    </div>
  );
};

export default App;
