package com.JapaneseMaster.JapaneseMasterAPI.dto.course.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseResponse {
    private String courseId;

    private String link;

    private String imageURL;

    private String tags;

    private String title;

    private int totalLessons;

    private String paragraph;
}
