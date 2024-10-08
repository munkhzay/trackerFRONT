import useSWR from "swr";
import MyCategories from "./Category";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = (props) => {
  const { categories, setCategory } = props;
  console.log(categories);

  // const [category, setCategory] = useState([]);
  // const Postcategory = () => {
  //   setCategory(categories);
  // };
  // Postcategory();

  // const [cateid, setCateid] = useState("");
  // console.log(category);
  // useEffect(() => {
  //   const getCategories = async () => {
  //     const { data } = await axios.get("http://localhost:8070/api/category");
  //     setCategory(data);
  //   };

  //   getCategories();
  // }, []);
  // const deleteCate = (e) => {
  //   setCateid(categoryid);
  // };
  const deleteCategory = async (categoryid) => {
    await axios
      .delete(`http://localhost:8070/api/category/${categoryid}`)
      .then((response) => {
        console.log(response);
        setCategory((prevcategory) =>
          prevcategory.filter((category) => category.categoryid !== categoryid)
        );
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(categoryid);
  };

  return (
    <div>
      {categories?.map((item) => {
        // setCateid(item.categoryid);
        return (
          <MyCategories
            handleDelete={() => deleteCategory(item.categoryid)}
            // values={item.categoryid}
            key={item.categoryid}
            categoryName={item.categoryname}
            description={item.description}
            categoryid={item.categoryid}
          />
        );
      })}
    </div>
  );
};
export default Profile;
