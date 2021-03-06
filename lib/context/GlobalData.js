import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState, createContext, useContext, useEffect } from 'react';
import useSWR from 'swr';

const qs = require('qs');
export const GlobalContext = createContext();

const GlobalData = ({ children }) => {
  const [user, setUser] = useState({});
  const [globalSession, setGlobalSession] = useState(null);
  const { data: session } = useSession();

  // console.log('session :>> ', session);
  // console.log('globalSession :>> ', globalSession);

  const query = qs.stringify(
    {
      filters: {
        email: {
          $eq: session?.user?.email,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const fetcher = (url) =>
    axios.get(url).then((res) => {
      let newData = {
        id: res.data.data[0].id,
        ...res.data.data[0].attributes,
      };
      return newData;
    });
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles?${query}`,
    fetcher
    // { refreshInterval: 1000 }
  );

  useEffect(() => {
    if (data) {
      setGlobalSession(data);
    }
  }, [session, data]);

  // console.log(data);
  return (
    <GlobalContext.Provider
      value={{ user, setUser, globalSession, setGlobalSession }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalData;
export const useGlobal = () => useContext(GlobalContext);

/**
 * 
  useEffect(() => {
    async function getData() {
      const query = qs.stringify(
        {
          filters: {
            email: {
              $eq: session?.user?.email,
            },
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles?${query}`
      );
      // console.log('data :>> ', data);
      if (data?.data.length > 0) {
        let newData = {
          id: data.data[0].id,
          ...data.data[0].attributes,
        };
        setGlobalSession(newData);
      }
    }
    if (session) {
      getData();
    } else {
      setGlobalSession(null);
    }
  }, [session]);

 */
