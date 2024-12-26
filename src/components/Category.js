import EyeIcon from "../../public/icons/EyeIcon";
import ClosedEyeIcon from "../../public/icons/ClosedEyeIcon";
import { TiDelete } from "react-icons/ti";
const Category = (props) => {
  const { categoryName, selected, handleDelete, onSelect } = props;
  const icon = selected === false ? <ClosedEyeIcon /> : <EyeIcon />;

  return (
    <div className="flex">
      <div
        onClick={onSelect}
        className="w-full pl-3 py-1.5 flex gap-10 items-center"
      >
        {icon}
        <p onChange={""} className="font-normal w-24  text-base text-[#1F2937]">
          {categoryName}
        </p>
      </div>
      <button onClick={handleDelete}>
        <TiDelete />
      </button>
    </div>
  );
};

export default Category;
