export default function ContactUs() {
  return (
    <div className="  " >

      <div className=" relative my-[20px] flex justify-center items-center h-[40px] px-[5%] " >
        <h1 className=" text-[30px] text-[#333333] font-semibold  " > Contact Us</h1>
        <button className="" >Edit</button>
      </div>
      <div class="breadcrumb mb-[40px]">
        <a href="#" className=" font-semibold " >KSK BUILDER</a>
        <span className=" font-semibold ">Contact Us</span>
      </div>


      <div className=" px-[5%]" >

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173061785!2d76.88483257251708!3d11.
014126297388279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741409429642!5m2!1sen!2sin"
          allowFullScreen className=" w-[100%] h-[400px] my-[20px] "
          referrerPolicy="no-referrer"
        ></iframe>

        <div className=" my-2  grid grid-cols-4 mb-[500px] gap-4 " >
          <div className=" " >
            <h1 className=" text-[18px] my-2 font-semibold " >KSK Builder</h1>
            <p className=" my-2 text-[16px] text-gray-500  " >
              Nael & Bin Harmal Hydroexport Est
              6th Floor, Unit 601
              Nael & Bin Harmal (NBH) Tower
              Zayed The First St. Al Khalidiyah
              Abu Dhabi, UAE
            </p>

            <ul className=" font-semibold my-[40px] space-y-1 text-gray-500 text-[14px] " >
              <li>+971 2 6273344</li>
              <li>+971 2 6273344</li>
              <li>info@nbhh.ae</li>
            </ul>
            <div className=" flex flex-col items-start  my-2 " >
              <h1>Sun -Thu 8.00am - 5.00pm</h1>
              <span className=" my-2 text-gray-500 " >Friday 8:00am - 2:00pm
                Saturday CLOSED </span>
            </div>

            <div className=" my-2  " >
              <h1 className=" font-semibold " >Human Resources Department</h1>

              <p className=" my-2 text-gray-500 " >If you would enjoy working in a dynamic environment and are looking for an opportunity to become part of a stellar team of professionals, please send your CV to : hr@nbhh.ae</p>

            </div>

          </div>
          <div className=" col-span-3 grid grid-cols-3 gap-4 " >
            <div className=" space-y-4 " >
              <input type="text" placeholder="Your Name" className=" h-[40px] w-[100%] bg-gray-50  rounded-lg border border-gray-300 " />
              <input type="text" placeholder="E-mail Address" className=" h-[40px] w-[100%] bg-gray-50  rounded-lg border border-gray-300  " />
              <input type="text" placeholder="subject" className=" h-[40px] w-[100%] bg-gray-50  rounded-lg border border-gray-300" />
            </div>
            <div className="col-span-2" >
              <textarea name="" id="" className="w-[100%] h-[280px] rounded-md border border-gray-300 " placeholder=" Message" ></textarea>
              <div className="  flex justify-end items-center " >
                <button className=" h-[40px] border-[1px]  bg-blue-400 px-2 hover:bg-blue-500 my-2 rounded-md " >SEND MESSAGE</button>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}