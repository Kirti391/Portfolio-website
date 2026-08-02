function BrowserMockup() {
    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111318]
            "
        >
            {/* Browser Top */}

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                <div className="flex gap-2">

                    <span className="h-3 w-3 rounded-full bg-red-400"></span>

                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>

                    <span className="h-3 w-3 rounded-full bg-green-400"></span>

                </div>

                <div
                    className="
                        rounded-full
                        bg-white/5
                        px-5
                        py-1
                        text-xs
                        text-gray-400
                    "
                >
                    kirti.dev
                </div>

            </div>

            <div className="aspect-video"></div>

        </div>
    );
}

export default BrowserMockup;