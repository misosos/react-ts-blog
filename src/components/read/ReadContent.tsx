// src/components/read/ReadContent.tsx
import { dummyImage1 } from "../../assets/images";

export default function ReadContent() {
    return (
        <article className="rounded-2xl bg-white/95 p-5 shadow-sm ring-1 ring-rose-100">
            <section>
                <strong className="inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-500">
                    Travel
                </strong>

                <h2 className="mt-2 text-lg font-bold text-rose-900 md:text-xl">
                    My Travel Stories from the Past Year
                </h2>

                <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-xs text-rose-400">
                        George Costanazv • Dec 16, 2024
                    </p>
                    <button className="rounded-full border border-rose-200 px-3 py-1 text-xs font-medium text-rose-500 transition hover:bg-rose-50">
                        삭제
                    </button>
                </div>

                <img
                    src={dummyImage1}
                    alt="My Travel Stories from the Past Year"
                    className="mt-4 h-56 w-full rounded-xl object-cover"
                />
            </section>

            <section className="mt-5 space-y-3 text-sm leading-relaxed text-rose-800">
                <p>
                    Over the past year, I had the opportunity to explore new places
                    and immerse myself in different cultures. From the vibrant streets
                    of Europe to the serene beaches of Asia, each journey taught me
                    something unique. The experience of stepping out of my comfort
                    zone helped me grow as a person, providing new perspectives on
                    life. Traveling also allowed me to reconnect with myself, as I
                    embraced moments of solitude while navigating unfamiliar
                    environments.
                </p>
                <p>
                    One of the most memorable trips was to Greece, where I spent time
                    wandering through ancient ruins and soaking in the breathtaking
                    landscapes. The historical sites told stories of civilizations
                    long gone, while the beauty of nature left me in awe. Each day
                    felt like an adventure, whether it was hiking up a mountain,
                    enjoying fresh seafood by the coast, or simply watching the sunset
                    over the Mediterranean Sea. It was a reminder of the importance of
                    appreciating the simple, beautiful things in life.
                </p>
                <p>
                    This past year has been a testament to the power of travel in
                    shaping who we are. The connections I made with locals, the
                    friendships that blossomed during shared experiences, and the
                    lessons learned through challenges all contributed to my personal
                    growth. Every trip, whether near or far, reminded me that there is
                    so much more to life beyond what we know. Travel has taught me to
                    be more present, to embrace the unknown, and to appreciate the
                    diversity of the world around us.
                </p>
                <p>
                    Throughout my travels, I also learned the importance of
                    flexibility and embracing spontaneity. Sometimes, plans didn’t go
                    as expected—flights were delayed, weather wasn’t ideal, or I got
                    lost in a new city. But rather than feeling frustrated, I learned
                    to adapt and enjoy the unplanned moments. These detours often led
                    me to hidden gems or unexpected adventures that I wouldn’t have
                    experienced otherwise. It reminded me that life, much like travel,
                    is full of surprises, and the best moments often come when you
                    least expect them.
                </p>
            </section>
        </article>
    );
}