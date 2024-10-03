import useSWR from "swr";
import MyCategories from "./Category";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [category, setCategory] = useState([]);
  //   console.log(data);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get("http://localhost:8070/api/category");
      setCategory(data);
    };
    getCategories();
  }, []);

  return (
    <div>
      {category.map((item) => {
        return (
          <MyCategories
            key={item.index}
            categoryName={item.categoryname}
            description={item.description}
          />
        );
      })}
    </div>
  );
};
export default Profile;
