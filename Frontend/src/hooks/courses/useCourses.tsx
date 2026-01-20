import axios from "axios";
import { useEffect, useState } from "react";
import { categoryDataType } from "../../data/courses/CoursesData";
import { courseDataType } from "../../data/courses/KanaData";

export default function useCourses() {
  const [categories, setCategories] = useState<categoryDataType[]>([]);
  const [courses, setCourses] = useState<courseDataType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/course/getcategorydata",
        );
        const data = response.data;

        const filteredData = data.categories.map((category: any) => ({
          categoryId: category.categoryId,
          link: category.link,
          imageURL: category.imageURL,
          tags: category.tags.split(",").map((tag:string) => tag.trim()),
          title: category.title,
          totalLessons: category.totalLessons,
          paragraph: category.paragraph,
        }));

        setCategories(filteredData)


      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Signup failed:", error.response?.data);
        }
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/course/getcoursedata",
        );
        const data = response.data;

        const filteredData = data.courses.map((course: any) => ({
          lessonId: course.lessonId,
          link: course.link,
          imageURL: course.imageURL,
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

  return { categories, courses };
}
