import client_img from "../../img/Screenshot 2025-03-08 175703.png";


export default function Footer(){
      return (
            <div>
      <div className=" grid grid-cols-4 gap-10 bg-[#282828] py-[60px] text-[#fff] " >
       <div className=" flex justify-center items-start " >
         <img src={client_img} alt="" className=" h-[60px] w-[80%] " />
       </div>
       <div className=" text-start !text-[14px] text-[#666666] " >
         <h1 className="text-[#fff]  text-[14px] my-2  font-semibold" >ABU DHABI</h1>
         Phone : +971 2 6273344 <br />
         Fax no. : +971 2 6271165 <br />
         Location : 6th Floor, Unit 601, Nael & Bin  <br /> Harmal (NBH) Tower, Zayed The First St. <br /> Al Khalidiyah, Abu Dhabi UA
         PO Box : 28102</div>
       <div className="text-start text-[14px] text-[#666666]   " >
         <h1 className="text-[#fff]  text-[14px] my-2  font-semibold" >DUBAI</h1>
         Phone : +971 4 3599940 <br />
         Fax no. : +971 4 3599941 <br />
         Location : 206, Building No:6 Bay  <br /> Square, Business Bay, Dubai UAE  <br />
         PO Box : 29703
       </div>
       <div className="text-start text-[14px] text-[#666666]  " >
         <h1 className="text-[#fff]  text-[14px] my-2  font-semibold" >Email</h1>
         <p className=" my-2 text-[#fff] " >info@nbhh.ae</p>
         <p className=" my-2 text-[#fff] " >binharma@emirates.net.ae</p>
       </div>
     </div>
     <div className=" bg-blue-400 flex justify-between items-center w-[100%] p-2 px-[5%] text-[#fff] " >
       <h1>Construction | Engineering | Management Solution </h1>
       <p> C KSK Builder. All rights reserved.</p>
     </div>
            </div>
      )
}