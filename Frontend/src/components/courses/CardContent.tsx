import { Link } from "react-router-dom";

type PropsType = {
  link: string;
  imageURL: string;
  tags: string[];
  title: string;
  paragraph: string;
};

export default function CardContent({link, imageURL, tags, title, paragraph}: PropsType) {
  return (
      <Link to={link} className="select-none">
        <div className="relative w-70 h-100 gap-2 font-intervariable">
          <img
            src={`images/courses/${imageURL}`}
            className="w-70 h-60 mb-2 rounded-t-2xl"
          />
          {tags.map((value, index) => (
            <div
              key={index}
              className="inline-flex justify-center bg-red-500 rounded-3xl text-white text-sm px-4 mb-2 mr-2 font-bold">
              {value}
            </div>
          ))}
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{paragraph}</p>
        </div>
      </Link>
  );
}
