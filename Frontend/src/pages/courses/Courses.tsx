import CoursesLayout from "../../layouts/CoursesLayout";
import { filters, cardData } from "../../data/courses/CoursesData";

export default function Courses() {
  return (
      <CoursesLayout
        title="Courses"
        japaneseText="コース"
        brushImage="red-brush.png"
        filters={filters}
        cardData={cardData}
      />


  );
}
