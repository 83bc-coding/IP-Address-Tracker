import { useCallback, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Address {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}

const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
const useGetEnteredData = () => {
  const [addressEnter, setAddress] = useState<Address | null>(null);

  const getEnteredData = useCallback(async (ipAddress?: any) => {

    try {
      let params: { ipAddress?: string; domain?: string } = {};
      if (checkIpAddress.test(ipAddress)) {
        params = { ipAddress };
      } else if (checkDomain.test(ipAddress)) {
        params = { domain: ipAddress };
      } else {
        throw new Error('Invalid IP address or domain');
      }

      const response: AxiosResponse<Address> = await axios.get(
        'https://geo.ipify.org/api/v2/country,city',
        {
          params: {
            apiKey: 'at_2oRwNE4DrksT0MclgtuV3exqHgCQi',
            ...params,
          },
        }
      );
      setAddress(response.data);
    } catch (error) {
      console.error('Error fetching entered data:', error);
    }
  }, []);

  return {getEnteredData , addressEnter};
};

export default useGetEnteredData;