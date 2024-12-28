import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuthContext } from "@/providers/AuthProvider";
import { format } from "date-fns";
const AddRecord = (props) => {
  const { currentUser, isLoading } = useAuthContext();
  const { onCloseModal, refetchRecord } = props;
  const [incomeExpense, setIncomeExpense] = useState("Expense");
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState();
  const [select, setSelect] = useState();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const handleIncomeOrExpense = () => {
    if (incomeExpense === "Expense") {
      setIncomeExpense("Income");
    } else {
      setIncomeExpense("Expense");
    }
  };
  const handleAdd2 = (e) => {
    setAmount(e.target.value);
  };
  const handleAdd3 = (e) => {
    setName(e.target.value);
  };
  const userid = currentUser.userid;
  const createCategory = async () => {
    if (!amount || !select) return toast.error("something went wrong");
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/transaction`, {
        userid: userid,
        recordname: name,
        amount: amount,
        transaction: incomeExpense,
        description: value,
        categoryid: select,
      })
      .then(function (response) {
        if (response) onCloseModal();
        refetchRecord();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const getcategory = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`)
        .then(function (response) {
          setCategories(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    };
    getcategory();
  }, []);

  const Expensebackground = incomeExpense === "Expense" ? "#0166FF" : "#31a82f";
  const Incomebackground = incomeExpense === "Income" ? "#16A34A" : "#31a82f";
  const textColorIncome =
    incomeExpense === "Income" ? "text-black" : "text-base";
  const textColorExpense =
    incomeExpense === "Expense" ? "text-white" : "text-base";

  return (
    <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0] bg-slate-200">
      <div className="py-5 px-6 flex justify-between">
        <p className="font-semibold text-xl">Add Record</p>
        <IoClose size={24} onClick={onCloseModal} />
      </div>
      <div className="flex w-full">
        <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
          <div className="rounded-[100px] bg-[#F3F4F6] flex gap-1">
            <div
              onClick={() => handleIncomeOrExpense("Expense")}
              className={`py-2 px-[55.5px] ${textColorExpense} font-normal text-base rounded-3xl bg-[${Expensebackground}]`}
            >
              Expense
            </div>
            <div
              onClick={() => handleIncomeOrExpense("Income")}
              className={`py-2 px-[55.5px] ${textColorIncome} font-normal text-base rounded-3xl bg-[${Incomebackground}]`}
            >
              Income
            </div>
          </div>
          <div className="flex flex-col mb-3 gap-[22px]">
            <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
              <p className="font-normal text-base"> Amount </p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="₮ 000.00"
                className="font-normal text-xl bg-[#F3F4F6]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p> Category </p>
              <select
                onChange={(e) => setSelect(e.target.value)}
                className="bg-[#F9FAFB] py-3 px-4 text-base font-normal border border-[#D1D5DB] rounded-lg"
              >
                <option value="Find or choose category" defaultChecked>
                  {" "}
                  Find or choose category
                </option>
                {categories.map((record, index) => {
                  return (
                    <option key={index} value={record.categoryid}>
                      {record.categoryname}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <p>Date</p>
                <div className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg">
                  {format(new Date(), "dd:MM:yyyy")}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>Time</p>
                <div className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg">
                  {format(new Date(), "hh:mm:ss")}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={createCategory}
            className={`bg-blue-500  flex items-center justify-center py-2 rounded-3xl m-4 text-black`}
          >
            Add Record
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6 pt-[18px] w-full ">
          <p className="text-[#1F2937]">Description</p>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write here"
            className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
