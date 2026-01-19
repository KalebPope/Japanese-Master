package com.JapaneseMaster.JapaneseMasterAPI.entity.course;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CourseData {

    @Id
    private String courseId;

    private String link;

    private String imageURL;

    private String tags;

    private String title;

    private int totalLessons;

    private String paragraph;
}
