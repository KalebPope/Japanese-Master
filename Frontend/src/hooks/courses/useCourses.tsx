import axios from "axios";
import { useEffect, useState } from "react";
import { cardDataType } from "../../data/courses/CoursesData";

export default function useCourses() {
  const [courses, setCourses] = useState<cardDataType[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/course/getcoursedata",
        );
        const data = response.data;

        const filteredData = data.courses.map((course: any) => ({
          courseId: course.courseId,
          link: course.link,
          imageURL: course.imageURL,
          tags: course.tags.split(",").map((tag:string) => tag.trim()),
          title: course.title,
          totalLessons: course.totalLessons,
          paragraph: course.paragraph,
        }));

        setCourses(filteredData)


      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Signup failed:", error.response?.data);
        }
      }
    };
    fetchCourses();
  }, []);

  return { courses };
}
