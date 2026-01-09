type PropsType = {
  title: string;
  checked: boolean;
  onChange: () => void;
};

export default function SideContent({ title, checked, onChange }: PropsType) {

  return (
    <label className="flex items-center gap-2 text-xl">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5"
      />
      {title}
    </label>
  );
}
