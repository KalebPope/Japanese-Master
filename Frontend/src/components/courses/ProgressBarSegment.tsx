type ProgressBarType = {
    completed: number;
    total: number;
}

export default function ProgressBarSegment({completed, total}: ProgressBarType) {

    const segments = Array.from({length: total})
    return(

        // Gets amount of segments from the total. then map over the amount of segments.
        // If the segment is < the amount of completed segments, bg is green otherwise its grey. 
        // The next two ones are to make sure the first segment is rounded and the last segment is rounded.
        <div className="flex gap-1">
            {segments.map((value, index) => (
                <div key={index} className={`flex-1 h-6 ${index < completed ? "bg-green-500" : "bg-gray-200"} ${index === 0 ? "rounded-l-2xl" : ""} ${index === total - 1 ? "rounded-r-2xl" : ""}`} /> 
            ))}
        </div>
    )
}