// src/pages/Read.tsx
import ReadContent from "../components/read/ReadContent";
import RecommendSection from "../components/read/RecommendSection";

export default function Read() {
    // 나중에 실제 데이터 연동 시:
    // const { id } = useParams();

    return (
        <main className="px-4 py-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
                <div className="md:w-3/5">
                    <ReadContent />
                </div>
                <div className="md:w-2/5">
                    <RecommendSection />
                </div>
            </div>
        </main>
    );
}