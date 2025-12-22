import { Link } from "react-router-dom";

type PropsType = {
  link: string;
  imageURL: string;
  tags: string[];
  title: string;
  paragraph: string;
};

export default function CardContent(props: PropsType) {
  return (
      <Link to={props.link} className="select-none">
        <div className="relative w-70 h-100 gap-2 font-intervariable">
          <img
            src={`images/courses/${props.imageURL}`}
            className="w-70 h-60 mb-2 rounded-t-2xl"
          />
          {props.tags.map((value, index) => (
            <div
              key={index}
              className="flex justify-center bg-red-500 rounded-3xl text-white w-30 mb-2 font-bold">
              {value}
            </div>
          ))}
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p>{props.paragraph}</p>
        </div>
      </Link>
  );
}
