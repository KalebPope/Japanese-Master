package com.JapaneseMaster.JapaneseMasterAPI.service.course;

import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CategoriesResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CoursesResponse;

public interface CourseService {
    public CategoriesResponse getCategoryData();

    public CoursesResponse getCourseData();
}
