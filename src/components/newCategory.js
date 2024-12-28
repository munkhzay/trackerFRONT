import axios from "axios";
import daisyui from "daisyui";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IoClose } from "react-icons/io5";
const NewCategories = (props) => {
  const { onCloseModal, refetchRecord } = props;
  const [categoryName, setCategoryName] = useState("");

  const handlecategories = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`, {
        categoryname: categoryName,
        description: "Flintstone",
      })
      .then(function (response) {
        onCloseModal();
        refetchRecord();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="m-60 mx-96 text-center border-solid border-2  rounded-xl ">
        {" "}
        <div className="navbar bg-base-100 align-text-center ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Add Categories</a>
          </div>
          <div className="flex-none items-center">
            <IoClose size={24} onClick={onCloseModal} />
          </div>{" "}
        </div>
        <div className="flex justify-between  px-5 gap-10 my-5">
          <div className="flex items-center border w-fit rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
            >
              <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"></path>
            </svg>
            <select className="select w-fit max-w-xs">
              <option></option>
              <option></option>
            </select>
          </div>
          <input
            onChange={(e) => setCategoryName(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mb-5">
          <button
            onClick={handlecategories}
            className="btn btn-secondary w-72 "
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewCategories;
