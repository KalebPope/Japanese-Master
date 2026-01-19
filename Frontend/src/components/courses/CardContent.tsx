import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

type PropsType = {
  link: string;
  imageURL: string;
  title: string;
  paragraph: string;
  totalCompleted: number;
  totalLessons: number;
};

export default function CardContent({link, imageURL, title, paragraph, totalCompleted, totalLessons}: PropsType) {
    
  
  return (
      <Link to={link} className="select-none">
        <div className="relative w-70 h-100 gap-2 font-intervariable">
          <img
            src={`/images/courses/${imageURL}`}
            className="w-70 h-60 mb-2 rounded-t-2xl"
          />
          <div
                className="inline-flex whitespace-nowrap w-fit justify-center bg-gray-400 rounded-3xl text-white text-sm px-4 mt-2 mb-2 mr-2 font-bold">
                Not yet started
              </div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{paragraph}</p>
        </div>
      </Link>
  );
}
