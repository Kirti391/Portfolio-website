function Navbar(){
const navItems = [
    "About",
    "Skills",
    "Projects",
    "Contact"
];
// const list=navItems.map((item)=><li key={item} ><a href={`#${item.toLowerCase()}`} className="transition-colors duration-300 hover:text-cyan-400">{item}</a></li>)
    return(
      
        <nav className="flex justify-between items-center px-8 py-4 mx-auto max-w-7xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
            <h1 className="text-2xl font-bold"> 
          &lt; Alice/&gt;</h1>
             <ul className="flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-cyan-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul></div>
        </nav>

    );
}

export default Navbar;