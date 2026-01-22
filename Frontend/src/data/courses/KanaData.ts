export type courseDataType = {
  lessonId: string;
  link: string;
  imageURL: string;
  title: string;
  paragraph: string;
  totalLessons: number;
};

export const filters: string[] = [
  "Fundementals",
  "JLPT N5",
  "JLPT N4",
  "Kanji",
  "Kana",
];

export const cardData: courseDataType[] = [
  {
    lessonId: "intro-1",
    link: "introduction",
    imageURL: "kodomono.png",
    title: "Introduction",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
    totalLessons: 1,
  },
  {
    lessonId: "intro-2",
    link: "introduction",
    imageURL: "kanji.jpg",
    title: "Foundational Kanji",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
    totalLessons: 1,
  },
  {
    lessonId: "intro-3",
    link: "introduction",
    imageURL: "writing.jpg",
    title: "Foundational Grammar",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
    totalLessons: 1,
  },
  {
    lessonId: "intro-4",
    link: "introduction",
    imageURL: "basic.jpg",
    title: "Basic Sentences",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
    totalLessons: 1,
  },
  {
    lessonId: "intro-5",
    link: "introduction",
    imageURL: "verb-conjugation.jpg",
    title: "Verb Conjugation",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
    totalLessons: 1,
  },
  {
    lessonId: "intro-6",
    link: "introduction",
    imageURL: "verb-forms-1.png",
    title: "Verb Forms I",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
    totalLessons: 1,
  },
];
