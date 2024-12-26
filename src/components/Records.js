import OneRecord from "./OneRecord";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQueryState } from "next-usequerystate";

const Transaction = (props) => {
  const { myrecords, categories, refetchRecord } = props;
  const [search] = useQueryState("");
  const filteredproducts = myrecords.filter((item) => {
    if (!search) return true;
    return item.categoryname.toLowerCase().includes(search?.toLowerCase());
  });
  console.log(filteredproducts);
  const oneCategorySelected = categories?.filter(
    (category) => category.selected === true
  );
  const selectedeyesRecords = oneCategorySelected?.map((category) => {
    const recordsEye = filteredproducts.filter(
      (record) => record.categoryid === category.categoryid
    );
    return recordsEye;
  });

  const deleteRecord = async (recordid) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/transaction/delete/${recordid}`
      );
      refetchRecord();
    } catch (error) {
      console.error(error);
    }
  };
  // const incomeorexp = transaction_type === "Expense" ? "-" : "+";
  return (
    <div>
      {selectedeyesRecords?.map((onerecord, index) => (
        <div key={index}>
          {onerecord.map((record) => (
            <OneRecord
              handleDelete={() => deleteRecord(record.recordid)}
              key={record.userid}
              text={record.categoryname}
              transaction_type={record.transaction}
              money={[
                record.transaction === "Expense" ? "-" : "+",
                record.amount,
              ]}
              time={record.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Transaction;
