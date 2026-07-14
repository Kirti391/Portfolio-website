import { FiRotateCw } from "react-icons/fi";
import BadgeInfo from "./BadgeInfo";
import photoSrc from "./src/assets/Kirti.jpeg;"
/**
 * BadgeFront
 * Front face of the conference badge: photo panel + identity info.
 * Purely presentational — flip state and hover lift live on the
 * parent <ProfileCard /> so front/back share one physical card.
 */
export default function BadgeFront({ photoSrc, name, role }) {
  return (
    <div className="badge-face badge-face--front">
      <div className="badge-face__glare" aria-hidden="true" />

      <div className="badge-photo">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={`Portrait of ${name}`}
            className="badge-photo__img"
          />
        ) : (
          <div className="badge-photo__placeholder" aria-hidden="true">
            {name?.charAt(0) ?? "?"}
          </div>
        )}
      </div>

      <BadgeInfo name={name} role={role} />

      <span className="badge-flip-hint" aria-hidden="true">
        <FiRotateCw />
      </span>
    </div>
  );
}