import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface Address {
  ip: string;
  location: {
    city: string;
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}

const useGetInitialData = () => {
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const response: AxiosResponse<Address> = await axios.get(
          "https://geo.ipify.org/api/v2/country,city",
          {
            params: {
              apiKey: "at_2oRwNE4DrksT0MclgtuV3exqHgCQi",
              ipAddress: "82.114.160.37",
            },
          }
        );
        setAddress(response.data);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    getInitialData();
  }, []);

  return [address, setAddress] as const;
};

export default useGetInitialData;
