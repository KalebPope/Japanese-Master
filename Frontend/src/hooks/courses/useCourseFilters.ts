import { useState } from "react";

type cardDataType = {
    tags: string[];
    [key: string]: any;
}

export function useCourseFilters<T extends cardDataType>(cardData: T[]) {
 const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Checks if any tags are in there. If none, display as normal. If there is, then include if the tag is included in course filter using some method.
   const filteredCards =
     activeFilters.length === 0
       ? cardData
       : cardData.filter((card) =>
           card.tags.some((tag) => activeFilters.includes(tag))
         );
 
   // First checks the prev list of filters. If the prev list of filters includes the filter, then filter the list by only putting into the array the filters that are not equal to item. Else add the filter to the list.
   const filterSort = (filter: string) => {
     setActiveFilters((prev) =>
       prev.includes(filter)
         ? prev.filter((item: string) => item !== filter)
         : [...prev, filter]
     );
   };

   return {activeFilters, setActiveFilters, filteredCards, filterSort}
}