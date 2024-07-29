import { useState } from "react";
import useGetEnteredData from "./component/qurey/useGetEnteredData";
import SearchBar from "./component/searchBar/SearchBar";
import useGetInitialData from "./component/qurey/useGetInitialData";
import Map from "./component/Map/Map";
import Stats from "./component/stats/Stats";

function App() {
  const [address] = useGetInitialData();
  const [ipAddress, setIpAddress] = useState("");
  const { getEnteredData, addressEnter } = useGetEnteredData();

  const handleSearchClick = () => {
    getEnteredData(ipAddress);
  };
  console.log(addressEnter);
  return (
    <>
      <div className="w-[100%] h-[390px]  bg-imageDesktop flex flex-col md:justify-center sm-justify-between items-center ">
        <SearchBar
          onClick={handleSearchClick}
          setIpAddress={setIpAddress}
          ipAddress={ipAddress}
        />
        <Stats
          ipAddress={addressEnter ? addressEnter?.ip : address?.ip}
          location={
            addressEnter
              ? addressEnter?.location?.region
              : address?.location?.region
          }
          timezone={
            addressEnter
              ? addressEnter?.location?.timezone
              : address?.location?.timezone
          }
          isp={addressEnter ? addressEnter?.isp : address?.isp}
        />
      </div>
      <div className=" h-[800px] truncate w-[100%]">
        {address && <Map coordinates={addressEnter ? addressEnter : address} />}
      </div>
    </>
  );
}
export default App;
