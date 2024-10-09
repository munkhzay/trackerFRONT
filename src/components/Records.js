import useSWR from "swr";
import OneRecord from "./OneRecord";
import axios from "axios";
import { useEffect, useState } from "react";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import { useQueryState } from "next-usequerystate";
import MyCategories from "./Category";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export const IconCategory = (props) => {
//   const { item } = props;
//   console.log(item);

// };

const Recor = (props) => {
  const { myrecords, setMyrecords, allRecords, setAllRecords, categoryname } =
    props;
  console.log(categoryname);
  // const [alldata, setAlldata] = useState([]);

  const [search] = useQueryState("search");
  // const filterDta = () => {
  const filteredproducts = myrecords.filter((item) => {
    if (!search) return true;
    return item.categoryname.toLowerCase().includes(search?.toLowerCase());
  });
  // const selectEyes = filteredproducts.filter((item) => {
  //   item.categoryname === categoryname;
  // });

  // const filteredrecordsByCategories = filteredproducts.filter((record) => {
  //   console.log("record: ", record);

  //   // const foundedCategory = category.find((category) => {
  //   //   return record.categorid === category.categorid;
  //   // });

  //   return foundedCategory.selected;
  // });

  return (
    <div>
      {filteredproducts?.map((item) => {
        return (
          <OneRecord
            key={item.userid}
            text={item.categoryname}
            transaction_type={item.transaction}
            money={item.amount}
          />
        );
      })}
    </div>
  );
};
export default Recor;

const numbers = [1, 2, 3];

const selectedNumbers = [1];

const filterddNUmbers = numbers.filter((number) => {
  if (selectedNumbers.includes(number)) {
    return true;
  } else {
    return false;
  }
});
