export type cardDataType = {
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

export const cardData: cardDataType[] = [
  {
    courseId: "hira-101",
    link: "kana",
    imageURL: "kodomono.png",
    tags: ["Fundementals", "JLPT N5"],
    title: "Hiragana & Katakana",
    totalLessons: 15,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    courseId: "kanji-101",
    link: "introduction",
    imageURL: "kanji.jpg",
    tags: ["Fundementals", "JLPT N5", "Kanji"],
    title: "Foundational Kanji",
    totalLessons: 10,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    courseId: "grammar-101",
    link: "introduction",
    imageURL: "writing.jpg",
    tags: ["Fundementals"],
    title: "Foundational Grammar",
    totalLessons: 10,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    courseId: "sentence-101",
    link: "introduction",
    imageURL: "basic.jpg",
    tags: ["Fundementals"],
    title: "Basic Sentences",
    totalLessons: 10,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    courseId: "verbconj-101",
    link: "introduction",
    imageURL: "verb-conjugation.jpg",
    tags: ["Fundementals"],
    title: "Verb Conjugation",
    totalLessons: 10,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    courseId: "verbform-101-1",
    link: "introduction",
    imageURL: "verb-forms-1.png",
    tags: ["Fundementals"],
    title: "Verb Forms I",
    totalLessons: 10,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
];
