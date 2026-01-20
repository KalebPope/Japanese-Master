DELETE FROM lesson;
DELETE FROM course;
DELETE FROM category;

--Categories
INSERT INTO category (category_id, link, imageurl, tags, title, total_lessons, paragraph)
    VALUES ('hira-101', 'kana', 'kodomono.png', 'Fundamentals, JLPT N5', 'Hiragana & Katakana', 15, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!'),
           ('kanji-101', 'introduction', 'kanji.jpg', 'Fundamentals, JLPT N5, Kanji', 'Foundational Kanji', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!'),
           ('grammar-101', 'introduction', 'writing.jpg', 'Fundamentals',  'Foundational Grammar', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!'),
           ('sentence-101', 'introduction', 'basic.jpg', 'Fundamentals', 'Basic Sentences', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!'),
           ('verbconj-101', 'introduction', 'verb-conjugation.jpg', 'Fundamentals', 'Verb Conjugation', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!'),
           ('verbform-101-1', 'introduction', 'verb-forms-1.png', 'Fundamentals', 'Verb Forms I', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (category_id) DO NOTHING;


--Courses
INSERT INTO course (course_id, link, imageurl, title, total_lessons, paragraph, category_id)
VALUES ('intro-1', 'introduction', 'kodomono.png',  'Introduction', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!', 'hira-101'),
           ('kanji-1', 'introduction', 'kanji.jpg', 'Foundational Kanji', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!', 'kanji-101'),
           ('grammar-1', 'introduction', 'writing.jpg','Foundational Grammar', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!', 'grammar-101'),
           ('sentence-1', 'introduction', 'basic.jpg', 'Basic Sentences', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!', 'sentence-101'),
           ('verbconj-1', 'introduction', 'verb-conjugation.jpg', 'Verb Conjugation', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!', 'verbconj-101'),
           ('verbform-1', 'introduction', 'verb-forms-1.png', 'Verb Forms I', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!', 'verbform-101-1')
ON CONFLICT (course_id) DO NOTHING;


