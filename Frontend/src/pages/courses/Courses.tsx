import CardContent from "../../components/courses/CardContent";

export default function Courses() {
  return (
    <>
      <div className="h-100 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 justify-center items-center relative">
          <div className="h-130 w-450 -z-10 overflow-hidden absolute -top-30 -right-60">
            <img src="images/home/red-brush.png" className="" />
          </div>
          <h1 className="font-sukajan text-7xl pt-40 pb-5 flex justify-center -rotate-8 text-white">
            Courses
          </h1>
          <div className="flex justify-center items-center h-100 overflow-hidden pt-100">
            <img src="/images/home/samurai.png" className="w-100 pt-10" />
          </div>
          <p className=" text-7xl max-w-150 mx-auto pb-10 pr-10 text-center flex justify-center self-end text-white">
            コース
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <span className="material-symbols-outlined">filter_list</span>
            <label>Filter</label>
          </div>
          <div className="flex items-center justify-self-end pr-5 mb-5">
            <span className="material-symbols-outlined">sort</span>
            <label>Sort by:</label>
            <select>
              <option>Test 1</option>
              <option>Test 2</option>
              <option>Test 3</option>
            </select>
          </div>
        </div>

        {/*--------------------*/}
        {/*Card content section*/}
        {/*--------------------*/}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <CardContent
            link="introduction"
            imageURL="kodomono.png"
            tags={[`Fundementals`]}
            title="Hiragana & Katakana"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
                aspernatur ducimus quia!"
          />

          <CardContent
            link="introduction"
            imageURL="kanji.jpg"
            tags={[`Fundementals`]}
            title="Foundational Kanji"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
                aspernatur ducimus quia!"
          />

          <CardContent
            link="introduction"
            imageURL="writing.jpg"
            tags={[`Fundementals`]}
            title="Foundational Grammar"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
                aspernatur ducimus quia!"
          />

          <CardContent
            link="introduction"
            imageURL="basic.jpg"
            tags={[`Fundementals`]}
            title="Basic Sentences"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
                aspernatur ducimus quia!"
          />

          <CardContent
            link="introduction"
            imageURL="verb-conjugation.jpg"
            tags={[`Fundementals`]}
            title="Verb Conjugation"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
                aspernatur ducimus quia!"
          />

          <CardContent
            link="introduction"
            imageURL="verb-forms-1.png"
            tags={[`Fundementals`]}
            title="Verb Forms I"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
                aspernatur ducimus quia!"
          />
        </div>
      </div>
    </>
  );
}
