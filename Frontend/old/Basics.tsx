// import { useEffect, useRef, useState, MouseEvent } from "react";
// import { Link } from "react-router-dom";

// export default function Basics() {
//   //Todo: put this logic into its own useHook
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const scroll = (direction: string) => {
//     if (scrollRef.current) {
//       if (direction == "Left" && currentSlide > 0) {
//         scrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });

//         setCurrentSlide((prev) => prev - 1);
//       } else if (direction == "Right" && currentSlide < 2) {
//         setCurrentSlide((prev) => prev + 1);

//         scrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });
//       }
//     }
//   };

//   // Resizing

//   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     console.log(windowWidth);

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [windowWidth]);

//   //Dragging

//   const [startX, setStartX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleDragStart = (e: MouseEvent) => {
//     e.preventDefault();
//     if (scrollRef.current) {
//       setIsDragging(true);
//       setStartX(e.pageX);
//     }
//   };

//   const handleDragMove = (e: MouseEvent) => {
//     if (!isDragging || !scrollRef.current) {
//       return;
//     }
//     e.preventDefault();

//     const distance = e.pageX - startX;

//     if (distance < -100 && currentSlide < 2) {
//       setIsDragging(false);
//       setCurrentSlide((prev) => prev + 1);
//       scrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });
//     } else if (distance > 100 && currentSlide > 0) {
//       scrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });
//       setCurrentSlide((prev) => prev - 1);
//       setIsDragging(false);
//     }
//   };

//   const handleDragEnd = () => {
//     if (scrollRef.current) setIsDragging(false);
//   };

//   return (
//     <>
//       <div className="flex items-center relative">
//         <div
//           ref={scrollRef}
//           onMouseDown={handleDragStart}
//           onMouseMove={handleDragMove}
//           onMouseUp={handleDragEnd}
//           className={`relative flex gap-6 w-full snap-x snap-center snap-mandatory scroll-hide overflow-x-auto hi h-calc justify-items-center items-center`}>
//           <div
//             className="shrink-0 snap-center relative"
//             style={{
//               paddingLeft: `${windowWidth / 2 - 506}px`,
//             }}>
//             <Link
//               to="ZeroToHero"
//               draggable={false}
//               className="bg-custom bg-cover w-250 h-150 flex items-center justify-center select-none">
//               Test
//             </Link>
//           </div>
//           <div className="shrink-0 snap-center">
//             <a className="bg-custom bg-cover w-250 h-150 flex items-center justify-center">
//               Test
//             </a>
//           </div>
//           <div
//             className="shrink-0 snap-center"
//             style={{
//               paddingRight: `${windowWidth / 2 - 506}px`,
//             }}>
//             <a className="bg-custom bg-cover w-250 h-150 flex items-center justify-center">
//               Test
//             </a>
//           </div>
//         </div>
//         <button
//           className={`absolute items-center flex left-0 ${
//             currentSlide == 0 ? "text-[#ffffff26]" : "text-white"
//           } ml-10 bg-black text-5xl font-bold`}
//           onClick={() => scroll("Left")}>
//           &#8810;
//         </button>
//         <button
//           className={`absolute right-0 ${
//             currentSlide == 2 ? "text-[#ffffff26]" : "text-white"
//           } mr-10 bg-black text-5xl font-bold`}
//           onClick={() => scroll("Right")}>
//           &#8811;
//         </button>
//       </div>
//     </>
//   );
// }

      {/* filter and sort stuff <div className="max-w-7xl mx-auto">
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
        </div> */}
