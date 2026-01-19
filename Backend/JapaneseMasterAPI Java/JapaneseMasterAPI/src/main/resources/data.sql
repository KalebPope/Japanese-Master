DELETE FROM course_data;

--Hiragana & Katakana
INSERT INTO course_data (course_id, link, imageurl, tags, title, total_lessons, paragraph)
    VALUES ('hira-101', 'kana', 'kodomono.png', 'Fundamentals, JLPT N5', 'Hiragana & Katakana', 15, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (course_id) DO NOTHING;


--Foundational Kanji
INSERT INTO course_data (course_id, link, imageurl, tags, title, total_lessons, paragraph)
VALUES ('kanji-101', 'introduction', 'kanji.jpg', 'Fundamentals, JLPT N5, Kanji', 'Foundational Kanji', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (course_id) DO NOTHING;

--Foundational Grammar
INSERT INTO course_data (course_id, link, imageurl, tags, title, total_lessons, paragraph)
VALUES ('grammar-101', 'introduction', 'writing.jpg', 'Fundamentals',  'Foundational Grammar', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (course_id) DO NOTHING;

--Basic Sentences
INSERT INTO course_data (course_id, link, imageurl, tags, title, total_lessons, paragraph)
VALUES ('sentence-101', 'introduction', 'basic.jpg', 'Fundamentals', 'Basic Sentences', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (course_id) DO NOTHING;

--Verb Conjugation
INSERT INTO course_data (course_id, link, imageurl, tags, title, total_lessons, paragraph)
VALUES ('verbconj-101', 'introduction', 'verb-conjugation.jpg', 'Fundamentals', 'Verb Conjugation', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (course_id) DO NOTHING;

--Verb Forms I
INSERT INTO course_data (course_id, link, imageurl, tags, title, total_lessons, paragraph)
VALUES ('verbform-101-1', 'introduction', 'verb-forms-1.png', 'Fundamentals', 'Verb Forms I', 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sintaspernatur ducimus quia!')
ON CONFLICT (course_id) DO NOTHING;