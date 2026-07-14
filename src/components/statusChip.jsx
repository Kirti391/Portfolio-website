/**
 * StatusChip
 * Small pill communicating current availability, with a soft
 * breathing dot to signal "live" status.
 */
export default function StatusChip({ label = "Open to Internships" }) {
  return (
    <span className="status-chip">
      <span className="status-chip__dot" aria-hidden="true" />
      {label}
    </span>
  );
}