export default function Header()
{
    return (
        <div className="grid grid-cols-[1fr_2fr_1fr] py-5 px-4 dark:text-white dark:bg-black">
        <h1 className="">Nihongo Master</h1>
        <div className="flex justify-center gap-4">
        <h1>Home</h1>
        <h1>Lessons</h1>
        </div>
        <div className="flex justify-end gap-4">
        <h1>Search</h1>
        <h1>Signup</h1>
        </div>
        </div>
    )
}