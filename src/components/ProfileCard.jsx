function ProfileCard({ image }) {
    return (
        <div className="relative w-full max-w-sm">

            {/* Glow */}
            <div
                className="
                    absolute
                    -inset-1
                    rounded-3xl
                    bg-gradient-to-r
                    from-indigo-500/20
                    via-violet-500/10
                    to-cyan-500/20
                    blur-2xl
                "
            ></div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111318]/70 backdrop-blur-md shadow-xl">
                <img
                    src={image}
                    alt="Profile"
                    className="w-full aspect-[4/5] object-cover"
                />
            </div>

        </div>
    );
}

export default ProfileCard;