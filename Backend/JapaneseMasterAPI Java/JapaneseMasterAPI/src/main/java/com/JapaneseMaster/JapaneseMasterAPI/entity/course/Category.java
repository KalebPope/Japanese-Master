package com.JapaneseMaster.JapaneseMasterAPI.entity.course;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
public class Category {

    @Id
    private String categoryId;

    private String link;

    private String imageURL;

    private String tags;

    private String title;

    private int totalLessons;

    private String paragraph;

    @OneToMany(mappedBy = "category")
    private List<Course> courses;
}
