import Category from "./Category";
import axios from "axios";

const Categories = (props) => {
  const { categories, setCategory, onSelectCategory } = props;

  // const onSelectCategory = (onecategory) => {
  //   console.log(onecategory.categoryid);
  //   const updatedCategory = categories.map((category) => {
  //     if (category.categoryid === onecategory.categoryid) {
  //       return {
  //         ...category,
  //         selected: !category.selected,
  //       };
  //     }
  //     return category;
  //   });
  //   setCategory(updatedCategory);
  // };

  const deleteCategory = async (categoryid) => {
    await axios
      .delete(`http://localhost:8070/api/category/${categoryid}`)
      .then((response) => {
        console.log(response);
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
