import CoursesLayout from "../../layouts/CoursesLayout";
import { filters, cardData } from "../../data/courses/KanaData";

export default function Kana() {
  return (
    <CoursesLayout
      title="Kana"
      japaneseText="かな"
      brushImage="blue-brush.png"
      filters={filters}
      cardData={cardData}
    />
  );
}
