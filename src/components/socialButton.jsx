function SocialButton({ icon, link }) {
  return (
    <a href={link} className="
h-12 w-12
flex items-center justify-center
rounded-full
border border-white/10
bg-[#111318]/70
backdrop-blur-md
text-gray-300

transition-all
duration-300
ease-in-out

hover:-translate-y-1
hover:text-white
hover:border-indigo-400/40
hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]
">
      {icon}
    </a>
  );
}

export default SocialButton;