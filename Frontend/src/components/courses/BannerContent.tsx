type PropsType = {
    title: string;
    japaneseText: string;
    brushImage: string;
}

export default function BannerContent({title, japaneseText, brushImage}: PropsType) {
  
  
  
    return (
    <>
      {/*Canvas*/}
      <div className="h-100 max-w-7xl mx-auto">
        {/*Grid container*/}
        <div className="grid grid-cols-3 justify-center items-center relative">
          {/*Brush*/}
          <div className="h-130 w-450 -z-10 overflow-hidden absolute -top-30 -right-60">
            <img src={`/images/home/${brushImage}`} className="" />
          </div>
          {/*Course text*/}
          <h1 className="font-sukajan text-7xl pt-40 pb-5 flex justify-center -rotate-8 text-white">
            {title}
          </h1>
          {/*Samurai image*/}
          <div className="flex justify-center items-center h-100 overflow-hidden pt-100">
            <img src="/images/home/samurai.png" className="w-100 pt-10" />
          </div>
          {/*Course Japanese text */}
          <p className=" text-7xl max-w-150 mx-auto pb-10 pr-10 text-center flex justify-center self-end text-white">
            {japaneseText}
          </p>
        </div>
      </div>
    </>
  );
}
