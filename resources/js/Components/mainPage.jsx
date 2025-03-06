export default function MainPage({ Section1, Section2, Section3, Section4, Section5 }) {

  function selectedSection() {

  }
  return (
    <div className="" >
      {/* 1 section */}
      <h1 className=" text-[24px] font-semibold my-2 " >1 Section</h1>
      <div>
        <h1 className=" my-4 font-semibold " >{Section1?.title}</h1>
        {Section1?.Description.map((item, index) => (
          <p className=" text-start my-2  " key={index} >{item}</p>
        ))}
      </div>

      {/* 2 section */}

      <div className="mt-[80px]" >
        <h1 className="text-[24px] font-semibold ">2 Section</h1>

        <div className=" " >
          {Section2.map((item, index) => (
            <div key={index} >
              <h1 className=" my-4 font-semibold  " >{item?.title}</h1>
              <div className=" shadow-lg rounded-lg h-[400px] border border-gray-500 flex justify-center items-center text-gray-400 " >  Image {1 + index}</div>
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

        <div className=" grid grid-cols-5 gap-5 my-4 " >
          <div className=" border shadow-sm rounded-md h-[100px]  text-start  " >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae quae porro dolor quia facilis ipsam qui commodi voluptatum libero!
          </div>
          <div className=" border shadow-sm rounded-md  h-[100px]   " >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae quae porro dolor quia facilis ipsam qui commodi voluptatum libero!
          </div>
          <div className=" border shadow-sm rounded-md  h-[100px]  " >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae quae porro dolor quia facilis ipsam qui commodi voluptatum libero!

          </div>
          <div className=" border shadow-sm rounded-md  h-[100px]  " >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae quae porro dolor quia facilis ipsam qui commodi voluptatum libero!

          </div>
          <div className=" border shadow-sm rounded-md  h-[100px]  " >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae quae porro dolor quia facilis ipsam qui commodi voluptatum libero!

          </div>
        </div>
      </div>

      <div className=" bg-[#2d2d2d] p-4 text-[#fff] " >
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

      <div className=" grid grid-cols-4 gap-4 bg-[#2d2d2d] p-4 text-[#fff] " >

        <div className=" flex justify-center items-center " >
          <h1 className=" text-[40px] " >logo</h1>
        </div>
        <div className=" text-start " >
          <h1 className=" text-[18px]  font-semibold " >ABU DHABI</h1>
          Phone : +971 2 6273344
          Fax no. : +971 2 6271165
          Location : 6th Floor, Unit 601, Nael & Bin Harmal (NBH) Tower, Zayed The First St. Al Khalidiyah, Abu Dhabi UAE
          PO Box : 28102</div>
        <div className="text-start " >
          <h1 className=" text-[18px]  font-semibold " >DUBAI</h1>
          Phone : +971 4 3599940
          Fax no. : +971 4 3599941
          Location : 206, Building No:6 Bay Square, Business Bay, Dubai UAE
          PO Box : 29703
        </div>
        <div className="text-start " >
          <h1>Email</h1>
          <p>info@nbhh.ae</p>
          <p>binharma@emirates.net.ae</p>
        </div>
    </div>
    <div className=" bg-blue-400 flex justify-between items-center w-[100%] p-2 " >
      <h1>Construction | Engineering | Management Solution </h1>
      <p> C KSK Builder. All rights reserved.</p>
    </div>



    </div>
  )
}