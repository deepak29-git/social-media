import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const { data } = await axios.get("/api/users");
        setLoader(false);
        setData(data.users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return { data, loader };
};
