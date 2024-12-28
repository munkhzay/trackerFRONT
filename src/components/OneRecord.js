// import { format } from "date-fns";
import { format } from "date-fns";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import RentIcon from "../../public/icons/RentIcon";
import IconCategory from "../../util/FindCategoryIcon";
import { TbHttpDelete } from "react-icons/tb";

const OneRecord = (props) => {
  const { text, time, money, transaction_type, handleDelete } = props;
  const iconcolor = transaction_type === "Expense" ? "#F54949" : "#23E01F";
  const incomeorexp = transaction_type === "Expense" ? "-" : "+";
  const IconImg =
    transaction_type === "Expense" ? <FoodExpense /> : <RentIcon />;
  const IconMoney = transaction_type === "Expense" ? "#F54949" : "#23E01F";
  const foundIcon = IconCategory(props);

  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full`}
          style={{ backgroundColor: iconcolor }}
        >
          {foundIcon?.image}
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-base">{text}</p>
          <p className="font-normal text-xs text-[#6B7280]"> {time}</p>
        </div>
      </div>
      <p
        className={`font-semibold text-base flex gap-10`}
        style={{ color: iconcolor }}
      >
        {money}{" "}
        <button style={{ color: "gray" }} onClick={handleDelete}>
          <TbHttpDelete />
        </button>
      </p>
    </div>
  );
};

export default OneRecord;
