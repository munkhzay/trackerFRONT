import useSWR from "swr";
import OneRecord from "./OneRecord";
import axios from "axios";
import { useEffect, useState } from "react";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export const IconCategory = (props) => {
//   const { item } = props;
//   console.log(item);

// };

const Recor = () => {
  const [record, setRecord] = useState([]);
  //   console.log(record);

  //   const { data, isLoading, error } = useSWR(
  //     fetcher,
  //     "http://localhost:8070/api/transaction"
  //   );
  //   if (isLoading) return <div>isLoading</div>;
  //   if (error) return <div>oh sorry error</div>;

  //   console.log(data?.data);

  useEffect(() => {
    const getrecord = async () => {
      const data = await axios.get("http://localhost:8070/api/transaction");
      setRecord(data.data);
    };
    getrecord();
  }, []);
  // const findIcon = records.filter((icon) => {
  //   if (icon.text === item.recordname)
  //     return <OneRecord iconColor={icon.color} />;
  // });
  return (
    <div>
      {record.map((item) => {
        console.log(item.transaction);
        return (
          <OneRecord
            time={item.userid}
            text={item.recordname}
            // image={item.}
            transaction_type={item.transaction}
            // time={record.time}
            color={""}
            money={item.amount}
            iconColor={""}
          />
        );
      })}
    </div>
  );
};
export default Recor;
