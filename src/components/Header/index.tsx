"use client";
import { HeaderList } from "./navList";
import { usePathname } from "next/navigation";
const Header = () => {
  const path = usePathname();
  console.log(path);

  return (
    <header className="py-5">
      <div className="flex justify-between items-center">
        <span className="font-bold text-3xl">Blog</span>
        <nav className="flex">
          <ul className="flex gap-5 text-xl">
            {HeaderList.map((list) => (
              <li
                key={list.id}
                className={`${
                  path === list.link
                    ? "text-purple-700 border-b-2 border-b-purple-700"
                    : ""
                } border-b-2 border-b-transparent transition duration-300 pb-2 hover:border-b-purple-700 hover:text-purple-700 font-medium`}
              >
                <a href={list.link}>{list.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
