const PRINT_TEXT = "KIRTI.DEV • REACT • FULL STACK • BUILD • CREATE • LEARN • ";
 
export default function Lanyard() {
  // Repeat enough copies so the strip never shows a gap at any strap height.
  const repeated = PRINT_TEXT.repeat(6);
 
  return (
    <div className="lanyard" role="presentation" aria-hidden="true">
      <div className="lanyard__fabric" />
      <div className="lanyard__stitch lanyard__stitch--left" />
      <div className="lanyard__stitch lanyard__stitch--right" />
      <div className="lanyard__text-track">
        <span className="lanyard__text">{repeated}</span>
      </div>
    </div>
  );
}
 