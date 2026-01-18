import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { Fragment } from "react/jsx-runtime";

type ListContentType = {
  link: string;
  imageURL: string;
  title: string;
  totalLessons: number;
  totalCompleted: number;
  tags: string[];
  paragraph: string;
};

export default function ListContent({
  link,
  imageURL,
  title,
  totalLessons,
  totalCompleted,
  tags,
  paragraph,
}: ListContentType) {
  const courseTitleParts = title.split("&");

  return (
    <div className="flex max-w-7xl h-60 shadow-lg">
      <div className="flex justify-items-center items-center gap-2 w-full">
        <img src={`/images/courses/${imageURL}`} className="w-70 h-50 pl-5" />
        <div className="flex flex-col font-bold">
          <div className="font-scarfire text-3xl">
            {courseTitleParts.map((value, index) => (
              <Fragment key={index}>
                {value}
                {index < courseTitleParts.length - 1 && (
                  <span className="font-nuku1 text-3xl"> & </span>
                )}
              </Fragment>
            ))}
          </div>
          <div className="flex flex-wrap">
            {tags.map((value, index) => (
              <div
                key={index}
                className="inline-flex whitespace-nowrap w-fit justify-center bg-red-500 rounded-3xl text-white text-sm px-4 mt-2 mb-2 mr-2 font-bold">
                {value}
              </div>
            ))}
          </div>

          <ProgressBar completed={totalCompleted} total={totalLessons} />
          <div className="w-150">{paragraph}</div>
        </div>
        <Link
          to={link}
          className="font-sukajan rounded-3xl px-8 py-3 bg-red-500 text-white ml-auto mr-10">
          View Course
        </Link>
      </div>
    </div>
  );
}
