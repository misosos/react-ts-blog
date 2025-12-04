// src/pages/Home.tsx
import HomeSearchSection from "../components/home/HomeSearchSection";
import HomePostsSection from "../components/home/HomePostsSection";

export default function Home() {
    return (
        <main className="px-4 py-6">
            <HomeSearchSection />
            <HomePostsSection />
        </main>
    );
}