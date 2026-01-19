package com.JapaneseMaster.JapaneseMasterAPI.service.auth.course;

import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CourseResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CoursesResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.course.CourseData;
import com.JapaneseMaster.JapaneseMasterAPI.repository.course.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    public CoursesResponse getCourseData() {

        List<CourseData> courseData = courseRepository.findAll();

        List<CourseResponse> responseList = courseData.stream()
                .map(course ->
                        CourseResponse.builder()
                                .courseId(course.getCourseId())
                                .link(course.getLink())
                                .imageURL(course.getImageURL())
                                .tags(course.getTags())
                                .title(course.getTitle())
                                .totalLessons(course.getTotalLessons())
                                .paragraph(course.getParagraph())
                                .build())
                .toList();

        return CoursesResponse.builder().courses(responseList).build();
    }
}
