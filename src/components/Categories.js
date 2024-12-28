import Category from "./Category";
import axios from "axios";

const Categories = (props) => {
  const { categories, onSelectCategory, refetchRecord } = props;

  const deleteCategory = async (categoryid) => {
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category/${categoryid}`
      )
      .then((response) => {
        refetchRecord();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {categories?.map((category) => {
        return (
          <Category
            handleDelete={() => deleteCategory(category.categoryid)}
            selected={category.selected}
            onSelect={() => onSelectCategory(category)}
            key={category.categoryid}
            categoryName={category.categoryname}
            description={category.description}
            categoryid={category.categoryid}
          />
        );
      })}
    </div>
  );
};
export default Categories;
