// import { format } from "date-fns";
import { format } from "date-fns";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import RentIcon from "../../public/icons/RentIcon";
import IconCategory from "../../util/FindCategoryIcon";

const OneRecord = (props) => {
  const { text, image, time, color, money, transaction_type, handleDelete } =
    props;
  // const date = new Date(time);
  // const farmated = isNaN(date) ? "inValidtime" : format(date, "HH:mm");
  const iconcolor = transaction_type === "Expense" ? "#F54949" : "#23E01F";
  const incomeorexp = transaction_type === "Expense" ? "-" : "+";
  const IconImg =
    transaction_type === "Expense" ? <FoodExpense /> : <RentIcon />;
  const IconMoney = transaction_type === "Expense" ? "#F54949" : "#23E01F";
  const foundIcon = IconCategory(props);

  // const textcategory = <IconCategory text={text} />;
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
          <p className="font-normal text-xs text-[#6B7280]">
            {" "}
            {time}
            {/* {format(Date(time), "MMM:dd HH:mm")} */}
          </p>
        </div>
      </div>
      <p
        className={`font-semibold text-base flex gap-10`}
        style={{ color: iconcolor }}
      >
        {incomeorexp}
        {money} <button onClick={handleDelete}>X</button>
        {/* <script>
          {function handleDelete() {
            alert("Your file is being uploaded!");
          }}
        </script> */}
      </p>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 30 30"
      >
        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
      </svg> */}
    </div>
  );
};

export default OneRecord;
