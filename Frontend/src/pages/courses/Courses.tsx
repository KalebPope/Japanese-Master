import { useState } from "react";
import CardContent from "../../components/courses/CardContent";
import SideContent from "../../components/courses/SideContent";
import { cardData } from "../../data/courses/cardData";

export default function Courses() {
  const [courseFilters, setCourseFilters] = useState<string[]>([]);

  // Checks if any tags are in there. If none, display as normal. If there is, then include if the tag is included in course filter using some method.
  const filteredCards =
    courseFilters.length === 0
      ? cardData
      : cardData.filter((card) =>
          card.tags.some((tag) => courseFilters.includes(tag))
        );

  // First checks the prev list of filters. If the prev list of filters includes the filter, then filter the list by only putting into the array the filters that are not equal to item. Else add the filter to the list.
  const FilterSort = (filter: string) => {
    setCourseFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item: string) => item !== filter)
        : [...prev, filter]
    );
  };

  const filters = ["Fundementals", "JLPT N5", "JLPT N4", "Kanji", "Kana"];

  return (
    <>
      {/*--------------*/}
      {/*Banner section*/}
      {/*--------------*/}

      {/*Canvas*/}
      <div className="h-100 max-w-7xl mx-auto">
        {/*Grid container*/}
        <div className="grid grid-cols-3 justify-center items-center relative">
          {/*Brush*/}
          <div className="h-130 w-450 -z-10 overflow-hidden absolute -top-30 -right-60">
            <img src="images/home/red-brush.png" className="" />
          </div>
          {/*Course text*/}
          <h1 className="font-sukajan text-7xl pt-40 pb-5 flex justify-center -rotate-8 text-white">
            Courses
          </h1>
          {/*Samurai image*/}
          <div className="flex justify-center items-center h-100 overflow-hidden pt-100">
            <img src="/images/home/samurai.png" className="w-100 pt-10" />
          </div>
          {/*Course Japanese text */}
          <p className=" text-7xl max-w-150 mx-auto pb-10 pr-10 text-center flex justify-center self-end text-white">
            コース
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        {/*--------------------*/}
        {/*Side content section*/}
        {/*--------------------*/}

        <div className="relative">
          <aside className="flex flex-col justify-center absolute -left-50">
            <label className="text-3xl">Filters</label>
            {filters.map((filter) => (
              <SideContent
                key={filter}
                title={filter}
                checked={courseFilters.includes(filter)}
                onChange={() => FilterSort(filter)}
              />
            ))}
          </aside>

          {/*--------------------*/}
          {/*Card content section*/}
          {/*--------------------*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-7xl">
            {filteredCards.map((card) => (
              <CardContent key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
