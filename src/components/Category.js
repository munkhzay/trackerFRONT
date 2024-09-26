import EyeIcon from "../../public/icons/EyeIcon";

const MyCategories = (props) => {
  const { categoryName } = props;
  return (
    <div className="w-full pl-3 py-1.5 flex gap-2 items-center">
      <EyeIcon />
      <p className="font-normal text-base text-[#1F2937]">{categoryName}</p>
    </div>
  );
};

export default MyCategories;
