import { FiSearch ,FiCode} from "react-icons/fi";

function Navbar() {
  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact"
  ];
  // const list=navItems.map((item)=><li key={item} ><a href={`#${item.toLowerCase()}`} className="transition-colors duration-300 hover:text-cyan-400">{item}</a></li>)
  return (
    <nav className="sticky top-0 z-50 w-full pt-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#111318]/70 px-16 py-3 backdrop-blur-xl shadow-lg">

        <a href="/" className="flex items-center gap-2 text-xl font-bold transition duration-300 hover:brightness-125">
    <FiCode className="text-indigo-200" />
    <span
    className="
      bg-gradient-to-r
      from-indigo-200
      via-violet-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
  >Kirti</span>
</a>
        <ul className="flex items-center  text-sm font-medium">
          {navItems.map((item) => <li key={item}><a href={`#${item.toLowerCase()}`} className="  px-4 py-1
transition-colors
duration-300
text-gray-400 hover:text-indigo-300
">{item}</a></li>)}

          {/* <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li> */}
        </ul>

        <button className="flex items-center gap-2.5 border transition-colors duration-300  rounded-xl  border-white/5
bg-white/5
hover:bg-white/10 hover:text-indigo-300 py-2 px-4">
          <div className="flex items-center gap-2.5">
            <FiSearch />
           <kbd className=" rounded-md bg-white/5 px-2 py-1 text-xs tracking-wide text-gray-400">
    Ctrl+K
</kbd>
          </div>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;