import useSWR from "swr";
import MyCategories from "./Category";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Profile = () => {
  const { data, isLoading, error } = useSWR(
    "http://localhost:8070/api/category",
    fetcher
  );
  console.log(data?.category);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  //   useEffect(() => {
  //     const getCategories = async () => {
  //       const { data } = await axios.get("http://localhost:8070/api/category");
  //       setCategories(data.category);
  //     };
  // console.log(categories);
  //   });
  return (
    <div>
      {data?.category.map((item, index) => {
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
