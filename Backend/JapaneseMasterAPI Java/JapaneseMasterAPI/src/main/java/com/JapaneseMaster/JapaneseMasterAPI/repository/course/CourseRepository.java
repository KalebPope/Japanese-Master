package com.JapaneseMaster.JapaneseMasterAPI.repository.course;

import com.JapaneseMaster.JapaneseMasterAPI.entity.course.CourseData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<CourseData, String> {
}
