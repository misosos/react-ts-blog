import { search } from "../../assets/images";

// src/components/home/HomeSearchSection.tsx
export default function HomeSearchSection() {
    return (
        <section className="mb-10">
            <article className="mx-auto max-w-3xl rounded-2xl bg-rose-50 px-5 py-6 shadow-sm">
                <h2 className="text-xl font-bold text-rose-900 md:text-2xl">
                    Blog Project
                </h2>
                <p className="mt-1 text-sm text-rose-500">
                    A Blog About Food, Experience, and Recipes.
                </p>
                <form className="mt-4 flex items-center gap-2">
                    <input
                        type="text"
                        name="q"
                        placeholder="검색어를 입력하세요"
                        className="flex-1 rounded-xl border border-rose-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-300"
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-400"
                    >
                        <img
                            src={search}
                            alt="search-icon"
                            className="mr-1 h-4 w-4"
                        />
                    </button>
                </form>
            </article>
        </section>

    );
}