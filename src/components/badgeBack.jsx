import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const STACK = [
  { label: "React", icon: FaReact },
  { label: "Node", icon: FaNodeJs },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "MongoDB", icon: SiMongodb },
];

/**
 * BadgeBack
 * Back face of the badge: floating anime avatar, a speech bubble
 * that pops in after the flip completes, a short quote, and a
 * row of tech-stack pills.
 */
export default function BadgeBack({ animeSrc, name = "Kirti", isVisible }) {
  return (
    <div className="badge-face badge-face--back">
      <div className="badge-back__glow" aria-hidden="true" />

      <div className="badge-back__avatar-wrap">
        <div className="badge-back__avatar">
          {animeSrc ? (
            <img
              src={animeSrc}
              alt={`Anime-style avatar of ${name}`}
              className="badge-back__avatar-img"
            />
          ) : (
            <div className="badge-back__avatar-placeholder" aria-hidden="true">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div
          className={`speech-bubble ${isVisible ? "speech-bubble--pop" : ""}`}
          role="status"
        >
          Hi 👋
        </div>
      </div>

      <p className="badge-back__name">{name}</p>
      <p className="badge-back__quote">
        Learning.
        <br />
        Building.
        <br />
        Growing.
      </p>

      <ul className="tech-pills" aria-label="Core tech stack">
        {STACK.map(({ label, icon: Icon }) => (
          <li key={label} className="tech-pill">
            <Icon aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}