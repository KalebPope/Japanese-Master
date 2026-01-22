import CategoryLayout from "../../layouts/CategoryLayout";
import useCourses from "../../hooks/courses/useCourses";


export default function Courses() {

  const {categories} = useCourses(); 

  return (
      <CategoryLayout
        title="Courses"
        japaneseText="コース"
        brushImage="red-brush.png"
        categoryData={categories}
      />


  );
}
