import React, { FC } from "react";

interface StatsProps {
  ipAddress: any;
  location: any;
  timezone: any;
  isp: any;
}

const Stats: FC<StatsProps> = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="w-4/5 rounded-lg absolute top-[20px] sm:top-[200px] md:top-[250px] left-10 m-auto left-[10%] bg-white z-10 flex flex-col md:flex-row container gap-4 md:gap-2 p-4 md:p-8">
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">IP Address</p>
        <p className="md:text-2xl text-black font-bold">{ipAddress}</p>
      </div>
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">Location</p>
        <p className="md:text-2xl text-black font-bold">{location}</p>
      </div>
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">Timezone</p>
        <p className="md:text-2xl text-black font-bold">{timezone}</p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">ISP</p>
        <p className="md:text-2xl text-black font-bold">{isp}</p>
      </div>
    </div>
  );
};

export default Stats;