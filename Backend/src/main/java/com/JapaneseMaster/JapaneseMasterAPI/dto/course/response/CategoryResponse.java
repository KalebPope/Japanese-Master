package com.JapaneseMaster.JapaneseMasterAPI.dto.course.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryResponse {
    private String categoryId;

    private String link;

    private String imageURL;

    private String tags;

    private String title;

    private int totalLessons;

    private String paragraph;
}
