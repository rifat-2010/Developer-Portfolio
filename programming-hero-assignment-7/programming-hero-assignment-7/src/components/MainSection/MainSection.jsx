import { use, useState } from "react";
import Alert from './Alert';




const MainSection = ({ fetchPromise, handleResolvedCount }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const [resolvedData, setResolvedData] = useState([]); // right side

   // 👇 এটি যোগ করুন
  const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('In Progress!');

  const handleRemoveCart = (code) => {
    

    
    // Alert show করার লজিক
    setAlertMessage("In Progress!"); 
    
    // Alert show করার লজিক
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    const selected = data.find((cart) => cart.code === code);
    if (!selected) return;


  

    // left side থেকে remove করা
    setData(data.filter((cart) => cart.code !== code));

    // right side এ add করা
    setResolvedData((prev) => [...prev, selected]);
  };

  return (
    <div className="mb-[80px] md:mx-20">
      <div className="flex justify-between w-full mb-10 md:mb-0">
        <h2 className="font-bold text-[24px]">Customer Tickets</h2>
        <h2 className="font-bold text-[24px] mr-12">Task Status</h2>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-3">
        {/* Left side content*/}
        <div className="w-9/12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((item) => (
            <div
              className="w-full mx-4 cursor-pointer"
              key={item.code}
              onClick={() => handleRemoveCart(item.code)}
            >
              <div className="h-auto md:h-full flex flex-col justify-center items-start gap-5 md:gap-[10px] p-4 rounded-[4px] shadow-lg bg-white">
                <div className="flex justify-between w-full">
                  <h4 className="font-medium text-[18px]">{item.title}</h4>
                  {item.button === "Open" ? (
                    <button className="w-22 h-8 flex justify-center items-center gap-[10px] rounded-full bg-[#B9F8CF]">
                      <i className="fa-solid fa-circle text-green-500"></i> Open
                    </button>
                  ) : (
                    item.button === "In-progress" && (
                      <button className="w-38 h-8 flex justify-center items-center gap-[10px] rounded-full bg-[#f8f3b9]">
                        <i className="fa-solid fa-circle text-yellow-500"></i>{" "}
                        In-progress
                      </button>
                    )
                  )}
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex gap-5">
                    {/* cart's code */}
                    <p className="text-[#627382]">{item.code}</p>
                    {/* cart's conditoin check */}
                    {item.condition === "HIGH PRIORITY" ? (
                      <p className="text-[#f83044] font-bold">
                        {item.condition}
                      </p>
                    ) : item.condition === "MEDIUM PRIORITY" ? (
                      <p className="text-yellow-500 font-bold">
                        {item.condition}
                      </p>
                    ) : (
                      item.condition === "LOW PRIORITY" && (
                        <p className="text-green-500 font-bold">
                          {item.condition}
                        </p>
                      )
                    )}
                  </div>
                  <div className="flex gap-5">
                    {/* every people's name */}
                    <p className="text-[#627382]">{item.name}</p>
                    {/* cart's date */}
                    <p className="text-[#627382]">
                      <i className="fa-solid fa-calendar-days"></i> {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side content*/}
        <div
          onClick={handleResolvedCount}
          className="w-3/12 mx-7 p-3 rounded-md shadow bg-white"
        >
          <h2 className="font-bold text-[24px] text-center mb-3">
            Resolved Task
          </h2>
          <div className="flex flex-col gap-3">
            {resolvedData.map((task) => (
              <div
                key={task.code}
                className="flex flex-col gap-1 p-3 rounded-md shadow bg-white "
              >
                <h1 className="font-medium text-[20px] text-center">
                  {task.title}
                </h1>
                <button className="btn w-full bg-green-500 text-white">
                  Complete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
        <Alert 
      showAlert={showAlert} 
      setShowAlert={setShowAlert} 
      // 👇 prop হিসেবে মেসেজ পাঠানো হলো
      message={alertMessage} 
    />
  </div>
   
  );
};

export default MainSection;
