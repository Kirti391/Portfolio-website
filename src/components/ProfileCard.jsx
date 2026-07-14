import BadgeFront from "./BadgeFront";
import BadgeBack from "./BadgeBack";

function ProfileCard({ image }) {
    return (
        <div
            className="
                group
                relative
                w-[290px]
                h-[410px]
                [perspective:1600px]
                hover:rotate-1
                transition-transform duration-500
            "
        >
          <div
className="
absolute

inset-0

rounded-[30px]

bg-gradient-to-br

from-indigo-500/10

to-cyan-500/10

opacity-0

transition

duration-700

group-hover:opacity-100
"/>
            {/* Glow */}

            <div
                className="
                    absolute
                    -inset-2
                    rounded-[34px]
                    bg-gradient-to-br
                    from-indigo-500/20
                    via-violet-500/10
                    to-cyan-500/20
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                "
            />

            {/* Card */}
<div
className="
absolute
left-1/2
top-1/2
-z-10

h-72
w-72

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-indigo-500/15

blur-[90px]
"/>
            <div
                className="
                    relative
                    h-full
                    w-full

                    transition-all
                    duration-700

                    [transform-style:preserve-3d]

                    group-hover:rotate-y-180

                    group-hover:-translate-y-3
                "
            >
                <BadgeFront image={image} />

                <BadgeBack />

            </div>
        </div>
    );
}

export default ProfileCard;