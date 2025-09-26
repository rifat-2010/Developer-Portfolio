const BoxComponent = ({ bgImg, inProgressCount, ResolvedCount }) => {

  return (
    <div className="mb-[80px] md:mx-20">
    <div className="relative flex flex-col md:flex-row gap-[24px]">
      {/* 1st functionality box */}
      <div className="rounded-lg w-full md:w-[708px] h-[250px] relative overflow-hidden bg-gradient-to-tr from-[rgb(99,46,227)] to-[rgb(159,98,242)]">
        {/* Left image - normal */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-no-repeat bg-contain pointer-events-none bg-left scale-x-100"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        {/* Right image - flipped */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-contain pointer-events-none bg-right scale-x-[-1]"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 p-10 z-10">
          <h3 className="text-[24px] font-semibold text-white">In-Progress</h3>
          <span className="text-[60px] text-white font-bold">{inProgressCount}</span>
        </div>
      </div>
      {/* ---------------------------------******------------------------------------ */}
      {/* 2nd functionality box */}
      <div className="rounded-lg w-full md:w-[708px] h-[250px] relative overflow-hidden bg-gradient-to-r from-[rgb(84,207,104)] to-[rgb(0,130,122)]">
        {/* Left image - normal */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-no-repeat bg-contain pointer-events-none bg-left scale-x-100"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        {/* Right image - flipped */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-contain pointer-events-none bg-right scale-x-[-1]"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 p-10 z-10">
          <h3 className="text-[24px] font-semibold text-white">Resolved</h3>
          <span className="text-[60px] text-white font-bold">{ResolvedCount}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BoxComponent;