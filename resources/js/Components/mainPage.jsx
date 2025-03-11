import Footer from "@/Components/Footer";
import client_img from "../../img/Screenshot 2025-03-08 175703.png";

export default function MainPage({ Section1, Section2, Section3, Section4, Section5 }) {

  function selectedSection() {

  }
  return (
    <div>
      <div className=" px-[5%]" >
        {/* 1 section */}
        <h1 className=" text-[24px] font-semibold my-2 " >1 Section</h1>
        <div>
          <h1 className=" my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >{Section1?.title}</h1>
          {Section1?.Description.map((item, index) => (
            <p className=" text-start my-2 text-[14px] text-[#636363]  " key={index} >{item}</p>
          ))}
        </div>

        {/* 2 section */}

        <div className="mt-[80px]" >
          <h1 className="text-[24px] font-semibold ">2 Section</h1>

          <div className=" " >
            {Section2.map((item, index) => (
              <div key={index} >
                <h1 className=" my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333] " >{item?.title}</h1>
                <div className=" shadow-lg rounded-lg h-[400px] border border-gray-500 text-gray-400 " >
                <video class=" object-cover w-[100%] h-[100%] " id="video-3181-1" preload="metadata" controls="controls"><source type="video/mp4" src="https://web.think.ind.in/wp-content/uploads/2022/01/AL-MINA-LINK-PROJECT230a.mp4?_=1" /><source type="video/mp4" src="https://web.think.ind.in/wp-content/uploads/2022/01/AL-MINA-LINK-PROJECT230a.mp4?_=1" /><a href="wp-content/uploads/
2022/01/AL-MINA-LINK-PROJECT.mp4">https://nbhh.ae/wp-content/uploads/2022/01/AL-MINA-LINK-PROJECT.mp4</a></video> 

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 section */}

        <div className="mt-[80px]" >
          <h1 className=" my-2 font-semibold text-[24px]  " >3 Section</h1>
          <div className=" grid grid-cols-2 gap-5 " >
            <div className=" border-[1px] border-gray-200 shadow-lg " >
            </div>
            <div className=" flex flex-col items-center " >
              <h1 className=" my-2 font-semibold text-start py-2 border-b border-gray-400 w-[100%] " >TONY SALIBA | MANAGING DIRECTOR</h1>
              <div className=" my-2 flex justify-start flex-col " >
                <p className="my-2" >Our construction operations continue to secure new work throughout the region by aiming those projects on which we have a competitive advantage either through a specific technical proficiency, a well-built geographical presence and a successful track record with the client.</p>
                <p className="my-2">Our construction operations continue to secure new work throughout the region by projects on which we have a competitive advantage either through a specific technic well-built geographical presence and a successful track record with the client.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 section */}

        <div className=" mt-[80px] " >
          <h1 className=" my-2 font-semibold text-[24px]  " >FEATURED PROJECTS</h1>

          <div className=" grid grid-cols-3 w-[100%] h-[240px] gap-4" >
            <div className=" flex flex-col justify-center items-center " >
              <div className="bg-gray-50  border shadow-md rounded-md h-[100%] w-[100%] " ></div>
              <span className="my-2 " >SPECIAL PROJECTS</span>
            </div>
            <div className=" flex flex-col justify-center items-center " >
              <div className="bg-gray-50  border shadow-md rounded-md h-[100%] w-[100%] " ></div>
              <span className="my-2 " >SEWERAGE & ROAD WORKS</span>
            </div>
            <div className=" flex flex-col justify-center items-center " >
              <div className="bg-gray-50  border shadow-md rounded-md h-[100%] w-[100%] " ></div>
              <span className="my-2 " >WATERSYSTEM WORKS</span>
            </div>
          </div>
        </div>

        {/* 5 section */}

        <div className="my-[100px]" >
          <h1>5 section </h1>
          <h1 className=" my-2  text-[24px]  " >CLIENTS</h1>

          <div className=" grid grid-cols-5 gap-5 my-4 border-gray-300 border-y-[1px] py-10 " >
            <div className=" border shadow-sm rounded-md h-[100px] text-start" >
              <img src={client_img} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]   " >
              <img src={client_img} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]  " >
              <img src={client_img} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]  " >
              <img src={client_img} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]  " >
              <img src={client_img} alt="" className="w-[100%] h-[100%]  " />
            </div>
          </div>
        </div>        

      </div>

      <div className=" bg-[#000] p-4 text-[#fff] " >
        <h1 className="" > 6 Section</h1>
        <h1 className=" my-2 " >Insta</h1>
        <div className=" grid grid-cols-3  h-[240px] gap-4 " >
          <div className=" bg-[#fff] rounded-lg  " >
          </div>
          <div className=" bg-[#fff] rounded-lg" >
          </div>
          <div className=" bg-[#fff] rounded-lg" >
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}