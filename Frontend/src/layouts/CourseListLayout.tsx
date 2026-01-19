import SideContent from "../components/courses/SideContent";
import BannerContent from "../components/courses/BannerContent";
import { useCourseFilters } from "../hooks/courses/useCourseFilters";
import { cardDataType } from "../data/courses/CoursesData";
import ListContent from "../components/courses/ListContent";
import { userProgressCourseData } from "../data/user/userProgressData";

type CoursesProps = {
  title: string;
  japaneseText: string;
  brushImage: string;
  filters: string[];
  cardData: cardDataType[];
};

export default function Courses({
  title,
  japaneseText,
  brushImage,
  filters,
  cardData,
}: CoursesProps) {
  const { activeFilters, filteredCards, filterSort } =
    useCourseFilters(cardData);

  return (
    <>
      {/*--------------*/}
      {/*Banner section*/}
      {/*--------------*/}

      <BannerContent
        title={title}
        japaneseText={japaneseText}
        brushImage={brushImage}
      />

      {/*--------------------*/}
      {/*Side content section*/}
      {/*--------------------*/}

      <div className="max-w-7xl mx-auto mt-10">
        <div className="relative">
          <aside className="flex flex-col justify-center absolute -left-50">
            <label className="text-3xl">Filters</label>
            {filters.map((filter) => (
              <SideContent
                key={filter}
                title={filter}
                checked={activeFilters.includes(filter)}
                onChange={() => filterSort(filter)}
              />
            ))}
          </aside>

          {/*--------------------*/}
          {/*Card content section*/}
          {/*--------------------*/}

          <div>
            {filteredCards.map((card) => {
              const courseId = userProgressCourseData.find(
                (p) => p.courseId === card.courseId
              );
              const completed = courseId ? courseId.completed : 0;

              return (
                <ListContent
                  key={card.courseId}
                  {...card}
                  totalCompleted={completed}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
