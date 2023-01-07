import { useEffect } from "react";
import AuthFetch from "../axios/global";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await AuthFetch("/react-store-products");
      const resp2 = await axios(randomUserUrl);
      console.log(resp1, resp2);
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
