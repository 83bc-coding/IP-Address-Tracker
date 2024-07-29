import  { FC, ChangeEvent } from "react";
import iconImage from "../../assets/image/icon-arrow.svg";

interface SearchBarProps {
  ipAddress: string;
  setIpAddress: (value: string) => void;
  onClick: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ ipAddress, setIpAddress, onClick }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIpAddress(event.target.value);
  };

  const handleClick = () => {
    onClick();
    setIpAddress("");
  };

  return (
    <div className="flex flex-col justify-around items-center sm:w-[60%] md:w-[50%] lg:w-[50%] h-[110px]">
      <h1 className="text-white font-bold">IP Address Tracker</h1>
      <div className="w-[100%] flex justify-center items-center h-14">
        <input
          type="text"
          className="w-4/5 h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground"
          placeholder="Enter the IP Address here.."
          value={ipAddress}
          onChange={handleInputChange}
        />
        <div
          className="bg-black w-14 h-full flex justify-center items-center rounded-md cursor-pointer"
          onClick={handleClick}
        >
          <img src={iconImage} alt="arrow-icon" className="px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;