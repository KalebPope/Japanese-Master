export type categoryDataType = {
  courseId: string;
  link: string;
  imageURL: string;
  tags: string[];
  title: string;
  totalLessons: number;
  paragraph: string;
};

export const filters: string[] = [
  "Fundementals",
  "JLPT N5",
  "JLPT N4",
  "Kanji",
  "Kana",
];