import ContentLayout from "../../layouts/CourseListLayout";
import { filters } from "../../data/courses/CoursesData";
import useCourses from "../../hooks/courses/useCourses";


export default function Courses() {

  const {courses} = useCourses(); 

  return (
      <ContentLayout
        title="Courses"
        japaneseText="コース"
        brushImage="red-brush.png"
        filters={filters}
        cardData={courses}
      />


  );
}
