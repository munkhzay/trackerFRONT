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
    selectedcategory,
    setMyrecords,
    allRecords,
    setAllRecords,
    categoryname,
    categories,
  } = props;
  // console.log(selectedcategory);
  const [allselectedcategory, setAllselectedcategory] = useState([]);
  const [search] = useQueryState("");
  const filteredproducts = myrecords.filter((item) => {
    if (!search) return true;
    return item.categoryname.toLowerCase().includes(search?.toLowerCase());
  });

  const oneCategorySelected = categories.filter(
    (category) => category.selected === false
  );

  const selectedeyesRecords = oneCategorySelected.map((category) => {
    const recordsEye = filteredproducts.filter(
      (record) => record.categoryid === category.categoryid
    );
    console.log(recordsEye);
    return recordsEye;
  });
  console.log(selectedeyesRecords);

  // const selectedEyesCategory = filteredproducts.filter((onerecord) => {
  //   if (
  //     onerecord.categoryid === selectedcategory.categoryid &&
  //     selectedcategory.selected === true
  //   )
  //     return onerecord;
  //   if (onerecord.categoryid !== selectedcategory.categoryid) return;
  // });
  // const data = () => {
  //   setAllselectedcategory(selectedEyesCategory);
  // };

  // console.log(allselectedcategory);
  // const allSelectedRecords = selectedcategory.map((product) => {
  //   const filteredrecordsByCategories = filteredproducts.filter(
  //     (record) => record.categoryid === product.categoryid
  //   );

  //   return filteredrecordsByCategories;
  // });
  return (
    <div>
      {selectedeyesRecords?.map((onerecord, index) => (
        <div key={index}>
          {onerecord.map((record) => (
            <OneRecord
              key={record.userid}
              text={record.categoryname}
              transaction_type={record.transaction}
              money={record.amount}
            />
          ))}
        </div>
      ))}
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
