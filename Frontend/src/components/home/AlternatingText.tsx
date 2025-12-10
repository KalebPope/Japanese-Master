import { useState, useEffect } from "react";

export default function AlternatingText() {
  const phrases: string[] = [
    "Immerse in Japanese Culture",
    "See the world from a different view",
    "Consume Japanese media in its native from",
    "Seek new opportunities",
    "Make new friends",
  ];

  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {

         // This interval sets the Fade to true to fade it every 3 seconds. the setTimeout fades it out and then fades the new one in

    const interval = setInterval(() => {
      setFade(true);

      // This iterates up by one and when it is above however many are in the array it goes back to 0
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setFade(false)
      }, 500);

    }, 3000);


    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`font-intervariable font-extrabold pb-5 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
      {phrases[index]}
    </span>
  );
}
