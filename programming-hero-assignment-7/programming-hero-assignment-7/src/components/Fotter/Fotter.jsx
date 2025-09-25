const Fotter = () => {
  return (
    <div className="bg-black h-full w-full flex justify-center items-center md:h-[432px]">
      <div className="flex gap-10 md:gap-0 flex-col md:flex-row w-full mx-5 justify-between">
        {/* footer section 01 */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-bold text-[24px] text-center text-white md:text-left">
            CS — Ticket System
          </h2>
          <p className="w-[350px] h-[144px] text-[rgb(161,161,170)]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* footer section 02 */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-bold text-[20px] text-center text-white md:text-left">
            Company
          </h2>
          <ul className="flex flex-col h-[144px] text-[rgb(161,161,170)]">
            <li className="text-center md:text-left">About Us</li>
            <li className="text-center md:text-left">Our Mission</li>
            <li className="text-center md:text-left">Contact Saled</li>
          </ul>
        </div>

        {/* footer section 03 */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-bold text-[20px] text-center text-white md:text-left">
            Services
          </h2>
          <ul className=" h-[144px] text-[rgb(161,161,170)]">
            <li className="text-center md:text-left">Products & Services</li>
            <li className="text-center md:text-left">Customer Stories</li>
            <li className="text-center md:text-left">Download Apps</li>
          </ul>
        </div>

        {/* footer section 04 */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-bold text-[20px] text-center text-white md:text-left">
            Information
          </h2>
          <ul className=" h-[144px] text-[rgb(161,161,170)]">
            <li className="text-center md:text-left">Privay and Security</li>
            <li className="text-center md:text-left">Terms & Conditions</li>
            <li className="text-center md:text-left">Join Us</li>
          </ul>
        </div>

        {/* footer section 05 */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-bold text-[20px] text-center text-white md:text-left">
            Information
          </h2>
          <ul className="h-[144px] text-[rgb(161,161,170)]">
            <li className="text-center md:text-left">Privay and Security</li>
            <li className="text-center md:text-left">Terms & Conditions</li>
            <li className="text-center md:text-left">Join Us</li>
          </ul>
        </div>

        {/* footer section 06 */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-bold text-[20px] text-center text-white md:text-left">
            Social Links
          </h2>
          <ul className="text-center h-[144px] text-[rgb(161,161,170)]">
            <li>
              <i className="fa-brands fa-x-twitter"></i>@CS — Ticket System
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>@CS — Ticket System
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>support@cst.com
            </li>
            <li>
              <i className=" fa-solid fa-envelope"></i>support@cst.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
