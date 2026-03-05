package com.JapaneseMaster.JapaneseMasterAPI.dto.course.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseResponse {

    private String courseId;

    private String link;

    private String imageURL;

    private String title;

    private String paragraph;

    private int totalLessons;

}
