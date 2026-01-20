package com.JapaneseMaster.JapaneseMasterAPI.service.course;

import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CategoriesResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CategoryResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CourseResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CoursesResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.course.Course;
import com.JapaneseMaster.JapaneseMasterAPI.entity.course.Category;
import com.JapaneseMaster.JapaneseMasterAPI.repository.course.CategoryRepository;
import com.JapaneseMaster.JapaneseMasterAPI.repository.course.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CategoryRepository categoryRepository;
    private final CourseRepository courseRepository;

    public CategoriesResponse getCategoryData() {

        List<Category> categoryData = categoryRepository.findAll();

        List<CategoryResponse> responseList = categoryData.stream()
                .map(category ->
                        CategoryResponse.builder()
                                .categoryId(category.getCategoryId())
                                .link(category.getLink())
                                .imageURL(category.getImageURL())
                                .tags(category.getTags())
                                .title(category.getTitle())
                                .totalLessons(category.getTotalLessons())
                                .paragraph(category.getParagraph())
                                .build())
                .toList();

        return CategoriesResponse.builder().categories(responseList).build();
    }

    public CoursesResponse getCourseData() {
        List<Course> courseData = courseRepository.findAll();

        List<CourseResponse> responseList = courseData.stream()
                .map(course ->
                        CourseResponse.builder()
                                .courseId(course.getCourseId())
                                .link(course.getLink())
                                .imageURL(course.getImageURL())
                                .title(course.getTitle())
                                .totalLessons(course.getTotalLessons())
                                .paragraph(course.getParagraph())
                                .build())
                .toList();

        return  CoursesResponse.builder().courses(responseList).build();
    }
}
