import { use, useState } from "react";







const MainSection = ({ fetchPromise }) => {
  const inisialData = use(fetchPromise);

  return (
    <div className="mb-[80px] md:mx-20">
        <div className="flex justify-between w-full mb-10 md:mb-0">
      <h2 className="font-bold text-[24px]">Customer Tickets</h2>
      <h2 className="font-bold text-[24px] mr-12">Task Status</h2>
      </div>
    <div className="w-full flex md:flex-row flex-col gap-3">
        {/* left side functionality */}
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5">
      {inisialData.map((data) => (
        
        <div className="w-fit mx-4">
          <div
            className="h-auto md:h-[148px]
         flex flex-col justify-center items-start 
        gap-5  md:gap-[10px] p-4 rounded-[4px] 
         shadow-lg bg-white"
          >
            <div className="flex justify-between w-full">
                {/* cart's title */}
              <h4 className="font-medium text-[18px]">{data.title}</h4>
              {/* cart's button */}
              {data.button === "Open" ? (
                <button className="w-22 h-8 flex justify-center items-center gap-[10px] rounded-full bg-[#B9F8CF]">
                  <i className="fa-solid fa-circle text-green-500"></i> Open
                </button>
              ) : (
                data.button === "In-progress" && (
                  <button className="w-38 h-8 flex justify-center items-center gap-[10px] rounded-full bg-[#f8f3b9]">
                    <i className="fa-solid fa-circle text-yellow-500"></i>{" "}
                    In-progress
                  </button>
                )
              )}
            </div>
            {/* cart's description */}
            <p className="text-[#627382]">{data.description}</p>

            <div className="flex justify-between w-full">
              <div className="flex gap-5">
                {/* cart's code */}
                <p className="text-[#627382]">{data.code}</p>
                {/* cart's conditoin check */}
                {data.condition === "HIGH PRIORITY" ? (
                  <p className="text-[#f83044] font-bold">{data.condition}</p>
                ) : data.condition === "MEDIUM PRIORITY" ? (
                  <p className="text-yellow-500 font-bold">{data.condition}</p>
                ) : (
                  data.condition === "LOW PRIORITY" && (
                    <p className="text-green-500 font-bold">{data.condition}</p>
                  )
                )}
              </div>
              <div className="flex gap-5">
                {/* every people's name */}
                <p className="text-[#627382]">{data.name}</p>
                {/* cart's date */}
                <p className="text-[#627382]">
                  <i class="fa-solid fa-calendar-days"></i>
                  {data.date}
                </p>
              </div>
            </div>
          </div>
</div>
       
      ))}
      </div>

{/* --------------------------------------************--------------------------------------- */}

      {/*right side functionality  */}
      <div className="w-2/12 ">
   fjdsklfj
   <h2 className="font-bold text-[24px] text-center">Resolved Task</h2>
      
      </div>







      </div>
    </div>
  );
};

export default MainSection;
