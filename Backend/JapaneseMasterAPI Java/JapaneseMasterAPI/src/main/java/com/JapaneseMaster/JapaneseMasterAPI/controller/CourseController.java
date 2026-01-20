package com.JapaneseMaster.JapaneseMasterAPI.controller;

import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CategoriesResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CoursesResponse;
import com.JapaneseMaster.JapaneseMasterAPI.service.course.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/course")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping("/getcategorydata")
    public ResponseEntity<CategoriesResponse> getCategoryData() {
        return ResponseEntity.ok(courseService.getCategoryData());
    }

    @GetMapping("/getcoursedata")
    public ResponseEntity<CoursesResponse> getCourseData() {
        return ResponseEntity.ok(courseService.getCourseData());
    }
}
