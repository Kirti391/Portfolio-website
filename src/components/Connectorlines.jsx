function ConnectorLines() {
    return (
        <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 1200 900"
            preserveAspectRatio="none"
        >
            {/* Top Left */}
            <path
                d="M320 250 C430 250 450 300 520 360"
              stroke="rgba(56,189,248,0.18)"
                strokeWidth="2"
                fill="none"
            />

            {/* Bottom Left */}
            <path
                d="M320 620 C430 620 450 560 520 500"
               stroke="rgba(56,189,248,0.18)"
                strokeWidth="2"
                fill="none"
            />

            {/* Top Right */}
            <path
                d="M880 250 C770 250 750 300 680 360"
               stroke="rgba(56,189,248,0.18)"
                strokeWidth="2"
                fill="none"
            />

            {/* Bottom Right */}
            <path
                d="M880 620 C770 620 750 560 680 500"
               stroke="rgba(56,189,248,0.18)"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
}

export default ConnectorLines;