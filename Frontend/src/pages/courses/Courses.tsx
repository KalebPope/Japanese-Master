import CategoryLayout from "../../layouts/CategoryLayout";
import { filters } from "../../data/courses/CoursesData";
import useCourses from "../../hooks/courses/useCourses";


export default function Courses() {

  const {categories} = useCourses(); 

  return (
      <CategoryLayout
        title="Courses"
        japaneseText="コース"
        brushImage="red-brush.png"
        filters={filters}
        cardData={categories}
      />


  );
}
