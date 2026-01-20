import CourseLayout from "../../layouts/CourseLayout";
import { filters } from "../../data/courses/KanaData";
import useCourses from "../../hooks/courses/useCourses";

export default function Kana() {

  const {courses} = useCourses();
  return (
    <CourseLayout
      title="Kana"
      japaneseText="かな"
      brushImage="blue-brush.png"
      filters={filters}
      cardData={courses}
    />
  );
}
