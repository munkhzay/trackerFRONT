import { IoClose } from "react-icons/io5";

const AddRecord = () => {
  const today = Date.now();
  return (
    <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0]">
      <div className="py-5 px-6 flex justify-between">
        <p className="font-semibold text-xl">Add Record</p>
        <IoClose width={24} height={24} />
      </div>
      <div className="flex w-full">
        <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
          <div className="rounded-[100px] bg-[#F3F4F6] flex gap-1">
            <div className="py-2 px-[55.5px] font-normal text-base rounded-3xl bg-[#0166FF]">
              Expense
            </div>
            <div className="py-2 px-[55.5px] font-normal text-base rounded-3xl bg-[#16A34A]">
              Income
            </div>
          </div>
          <div className="flex flex-col mb-3 gap-[22px]">
            <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
              <p className="font-normal text-base"> Amount </p>
              <input
                placeholder="₮ 000.00"
                className="font-normal text-xl bg-[#F3F4F6]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p> Category </p>
              <select className="bg-[#F9FAFB] py-3 px-4 text-base font-normal border border-[#D1D5DB] rounded-lg">
                <option defaultChecked> Find or choose category</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <p>Date</p>
                <input
                  type="date"
                  value="2024-09-27"
                  className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>Time</p>
                <input
                  type="time"
                  value="15:30"
                  className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                />
              </div>
            </div>
          </div>
          <button className="bg-[#0166FF] flex items-center justify-center py-2 rounded-3xl">
            Add Record
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6 pt-[18px] w-full ">
          <p className="text-[#1F2937]">Description</p>
          <textarea
            placeholder="Write here"
            className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
