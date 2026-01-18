import ContentLayout from "../../layouts/CourseListLayout";
import { filters, cardData } from "../../data/courses/CoursesData";

export default function Courses() {
  return (
      <ContentLayout
        title="Courses"
        japaneseText="コース"
        brushImage="red-brush.png"
        filters={filters}
        cardData={cardData}
      />


  );
}
