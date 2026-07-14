import { useState } from "react";
import MetalClip from "./MetalClip";
import Lanyard from "./Lanyard";
import BadgeFront from "./BadgeFront";
import BadgeBack from "./BadgeBack";

import photo from "../assets/Kirti.jpeg";
import "./profileCard.css";

/**
 * ProfileCard ("Developer Pass")
 * A conference-style ID badge hanging from a lanyard. Click or press
 * Enter/Space to flip between the professional front and the playful
 * anime-avatar back. Hovering the whole assembly gives it a subtle
 * hanging swing, driven entirely by CSS.
 */
export default function ProfileCard({
  name = "Kirti",
  role = "Full Stack Developer",
  photoSrc=photo,
  animeSrc,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };
console.log("photoSrc:", photoSrc);
  return (
    <div className="developer-pass">
      <MetalClip />
      <Lanyard />

      <div
        className="badge-flip"
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={
          isFlipped
            ? `Showing back of ${name}'s developer pass. Press Enter to flip to front.`
            : `Showing front of ${name}'s developer pass. Press Enter to flip to back.`
        }
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
      >
        <div className={`badge-flip__inner ${isFlipped ? "is-flipped" : ""}`}>
          <BadgeFront photoSrc={photoSrc} name={name} role={role} />
          <BadgeBack animeSrc={animeSrc} name={name} isVisible={isFlipped} />
        </div>
      </div>
    </div>
  );
}