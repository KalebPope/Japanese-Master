package com.JapaneseMaster.JapaneseMasterAPI.service.auth.course;

import com.JapaneseMaster.JapaneseMasterAPI.dto.course.response.CoursesResponse;
import jakarta.servlet.http.HttpServletResponse;

public interface CourseService {
    public CoursesResponse getCourseData();
}
