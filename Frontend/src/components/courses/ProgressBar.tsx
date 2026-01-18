type ProgressBarType = {
  completed: number;
  total: number;
};

export default function ProgressBar({ completed, total }: ProgressBarType) {
  const percent = Math.round((completed / total) * 100);
  return (
    <div className="flex items-center w-full whitespace-nowrap">
      <div className="w-full h-6 bg-gray-200 rounded-2xl overflow-hidden">
        <div
          className={`h-full bg-green-500`}
          style={{ width: `${percent}%` }}></div>
      </div>
      <span className="font-scarfire ml-1">
        {percent}
        <span className="font-geishta text-2xl">%</span>
      </span>
    </div>
  );
}
