package com.JapaneseMaster.JapaneseMasterAPI.entity.course;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Lesson {


    @Id
    private String lessonId;

    private String title;

    @Column(columnDefinition = "json")
    private String content;

    @ManyToOne
    @JoinColumn(name = "course_Id")
    private Course course;
}
