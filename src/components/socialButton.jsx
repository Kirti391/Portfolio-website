function SocialButton({ icon, link }) {
  return (
    <a href={link}>
      {icon}
    </a>
  );
}

export default SocialButton;