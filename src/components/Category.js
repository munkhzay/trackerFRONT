import EyeIcon from "../../public/icons/EyeIcon";
import ClosedEyeIcon from "../../public/icons/ClosedEyeIcon";
import { useState } from "react";
import axios from "axios";
import Recor from "./Records";

const Category = (props) => {
  const { categoryName, selected, handleDelete, onSelect } = props;
  console.log(selected);
  const icon = selected === true ? <ClosedEyeIcon /> : <EyeIcon />;

  return (
    <div className="flex">
      <div
        onClick={onSelect}
        className="w-full pl-3 py-1.5 flex gap-5 items-center"
      >
        {icon}
        <p onChange={""} className="font-normal w-24  text-base text-[#1F2937]">
          {categoryName}
        </p>
      </div>
      <button onClick={handleDelete}>
        <svg
          // values={categoryid}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 30 30"
        >
          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Category;
