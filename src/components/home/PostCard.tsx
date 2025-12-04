// src/components/home/PostCard.tsx
import { Link } from "react-router-dom";

type Post = {
    id: number;
    tag: string;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
};

export default function PostCard({ post }: { post: Post }) {
    return (
        <article className="overflow-hidden rounded-2xl bg-white/95 shadow-sm ring-1 ring-rose-100 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-rose-200">
            <Link to={`/read/${post.id}`} className="flex h-full flex-col">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-40 w-full object-cover transition duration-200 hover:brightness-[1.03]"
                />
                <div className="flex flex-1 flex-col px-4 py-3">
                    <em className="inline-flex w-fit rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-500">{post.tag}</em>
                    <h2 className="mt-1 line-clamp-2 text-sm font-semibold text-rose-900 md:text-base">
                        {post.title}
                    </h2>
                    <p className="mt-1 text-[11px] text-rose-400">
                        {post.author} • {post.date}
                    </p>
                    <p className="mt-2 line-clamp-3 text-xs text-rose-500/90">
                        {post.excerpt}
                    </p>
                </div>
            </Link>
        </article>
    );
}