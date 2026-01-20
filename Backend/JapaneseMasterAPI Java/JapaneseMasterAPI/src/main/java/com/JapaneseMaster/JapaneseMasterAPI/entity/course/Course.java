package com.JapaneseMaster.JapaneseMasterAPI.entity.course;

import jakarta.persistence.*;
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
public class Course {

    @Id
    private String courseId;

    private String link;

    private String imageURL;

    private String title;

    private String paragraph;

    private int totalLessons;

    @ManyToOne
    @JoinColumn(name = "category_Id")
    private Category category;

    @OneToMany(mappedBy = "course")
    private List<Lesson> lessons;
}
