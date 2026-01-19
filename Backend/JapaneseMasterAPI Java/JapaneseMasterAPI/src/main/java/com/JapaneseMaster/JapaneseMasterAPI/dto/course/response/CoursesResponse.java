package com.JapaneseMaster.JapaneseMasterAPI.dto.course.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoursesResponse {
    private List<CourseResponse> courses;
}
