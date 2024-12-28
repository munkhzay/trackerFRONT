import OneRecord from "./OneRecord";
import axios from "axios";
import { useQueryState } from "next-usequerystate";

const Transaction = (props) => {
  const { myrecords, categories, refetchRecord } = props;
  const [search] = useQueryState("");

  const filteredproducts = myrecords.filter((item) => {
    if (!search) return true;
    return item.categoryname.toLowerCase().includes(search?.toLowerCase());
  });

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

  return (
    <div className="flex flex-col gap-4">
      {selectedeyesRecords?.map((onerecord, index) => (
        <div className="flex flex-col gap-4" key={index}>
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
              time={record.createdat}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Transaction;
