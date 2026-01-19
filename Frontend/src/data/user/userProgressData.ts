type userProgressCourseDataType = {
    courseId: string;
    completed: number;
}

type userProgressLessonDataType = {
    lessonId: string;
    completed: number;
}

export const userProgressCourseData: userProgressCourseDataType[] = [
    {
        courseId: "hira-101",
        completed: 11
    }
]

export const userProgressLessonData: userProgressLessonDataType[] = [
    {
        lessonId: "intro-1",
        completed: 1
    }
]