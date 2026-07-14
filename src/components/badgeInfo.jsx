import StatusChip from "./StatusChip";

/**
 * BadgeInfo
 * Text content block for the front of the badge: eyebrow label,
 * name, role, a divider, the status chip, and a footer meta row.
 */
export default function BadgeInfo({
  eyebrow = "DEVELOPER PASS",
  name = "Kirti",
  role = "Full Stack Developer",
  location = "India",
  year = "2025",
}) {
  return (
    <div className="badge-info">
      <p className="badge-info__eyebrow">{eyebrow}</p>

      <h3 className="badge-info__name">{name}</h3>
      <p className="badge-info__role">{role}</p>

      <div className="badge-info__divider" />

      <StatusChip />

      <div className="badge-info__meta">
        <span>{location}</span>
        <span className="badge-info__meta-sep" aria-hidden="true">
          •
        </span>
        <span>{year}</span>
      </div>
    </div>
  );
}