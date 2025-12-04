// src/components/read/RecommendSection.tsx
import { dummyImage1 } from "../../assets/images";
import RecommendItem from "./RecommendItem";

const dummyRecommend = [
    {
        id: 1,
        title: "Why you don’t need more than 3 pieces of clothing",
        description:
            "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna...",
        image: dummyImage1,
    },
    {
        id: 2,
        title: "Why you don’t need more than 3 pieces of clothing",
        description:
            "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna...",
        image: dummyImage1,
    },
];

export default function RecommendSection() {
    return (
        <article>
            <h3 className="text-sm font-semibold text-rose-900">
                Recommend Reading
            </h3>
            <ul className="mt-3 space-y-3">
                {dummyRecommend.map((item) => (
                    <RecommendItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </ul>
        </article>
    );
}