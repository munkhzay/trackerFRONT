import FoodExpense from "../public/icons/FoodExpenseIcon";
import RentIcon from "../public/icons/RentIcon";
import OneRecord from "../src/components/OneRecord";
import { FaCarAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SiRemedyentertainment } from "react-icons/si";
import { IoFastFoodSharp } from "react-icons/io5";
import { icon } from "@fortawesome/fontawesome-svg-core";
const records = [
  {
    color: "#23E01F",
    image: <FaCarAlt />,
    iconColor: "#0166FF",
    text: "Vehicle",
  },
  {
    color: "#F54949",
    image: <FaHouseUser />,
    text: "Housing",
    iconColor: "#FF4545",
  },
  {
    color: "#F54949",
    image: <FaCartShopping />,
    text: "Shopping",
    iconColor: "#FF4545",
  },
  {
    color: "#23E01F",
    image: <SiRemedyentertainment />,
    text: "Life & Entertainment",
    iconColor: "#0166FF",
  },
  {
    color: "#23E01F",
    image: <RentIcon />,
    text: "Lending & Renting",
    iconColor: "#0166FF",
  },
  {
    color: "#23E01F",
    image: <IoFastFoodSharp />,
    text: "Food & Drinks",
    iconColor: "#0166FF",
  },
];
const IconCategory = (props) => {
  const { text } = props;
  console.log(text);
  const foundIcon = records.find((icon) => icon.text === text);
  return foundIcon;
};
export default IconCategory;
