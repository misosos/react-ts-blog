// src/components/home/HomePostsSection.tsx
import PostCard from "./PostCard";
import { dummyImage1, dummyImage2 } from "../../assets/images";

const dummyPosts = [
    {
        id: 1,
        tag: "Travel",
        title: "My Travel Stories from the Past Year",
        author: "George Costanazv",
        date: "Aug 16, 2025",
        image: dummyImage1,
        excerpt:
            "Over the past year, I had the opportunity to explore new places and immerse myself in different cultures...",
    },
    {
        id: 2,
        tag: "Food",
        title: "Delicious Chicken Dishes & Tips",
        author: "George Costanazv",
        date: "Aug 16, 2025",
        image: dummyImage2,
        excerpt:
            "Chicken is one of the most versatile and beloved foods around the world...",
    },
    // 필요하면 더 추가
];

export default function HomePostsSection() {
    return (
        <section className="mx-auto mt-4 grid max-w-5xl gap-6 md:grid-cols-2">
            {dummyPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
}