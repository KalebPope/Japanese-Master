export type cardDataType = {
  link: string;
  imageURL: string;
  tags: string[];
  title: string;
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
    link: "introduction",
    imageURL: "kodomono.png",
    tags: ["Fundementals", "JLPT N5"],
    title: "Test",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    link: "introduction",
    imageURL: "kanji.jpg",
    tags: ["Fundementals", "JLPT N5", "Kanji"],
    title: "Foundational Kanji",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    link: "introduction",
    imageURL: "writing.jpg",
    tags: ["Fundementals"],
    title: "Foundational Grammar",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    link: "introduction",
    imageURL: "basic.jpg",
    tags: ["Fundementals"],
    title: "Basic Sentences",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    link: "introduction",
    imageURL: "verb-conjugation.jpg",
    tags: ["Fundementals"],
    title: "Verb Conjugation",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
  {
    link: "introduction",
    imageURL: "verb-forms-1.png",
    tags: ["Fundementals"],
    title: "Verb Forms I",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!",
  },
];
