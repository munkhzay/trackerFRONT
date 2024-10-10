import useSWR from "swr";
import OneRecord from "./OneRecord";
import axios from "axios";
import { useEffect, useState } from "react";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import { useQueryState } from "next-usequerystate";
import MyCategories from "./Category";

const Transaction = (props) => {
  const {
    myrecords,
    onecategory,
    setMyrecords,
    allRecords,
    setAllRecords,
    categoryname,
    categories,
  } = props;
  const [allselectedrecords, setAllselectedrecords] = useState([]);
  const [search] = useQueryState("search");
  const filteredproducts = myrecords.filter((item) => {
    if (!search) return true;
    return item.categoryname.toLowerCase().includes(search?.toLowerCase());
  });

  const filteredrecordsByCategories = filteredproducts.filter((record) => {
    if (onecategory.selected === true)
      return record.categoryid === onecategory.categoryid;
    if (onecategory.selected === false) return;
  });
  console.log(filteredrecordsByCategories);

  // const filteredrecordsByCategories = filteredproducts.filter((record) => {
  //   const selectCategory = record.find(
  //     (categoryid) => categoryid === onecategory.categorid
  //   );
  //   console.log(selectCategory);
  //   return selectCategory;
  // });
  // console.log(filteredrecordsByCategories);
  return (
    <div>
      {filteredrecordsByCategories?.map((item) => {
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
export default Transaction;

const numbers = [1, 2, 3];

const selectedNumbers = [1];

const filterddNUmbers = numbers.filter((number) => {
  if (selectedNumbers.includes(number)) {
    return true;
  } else {
    return false;
  }
});
