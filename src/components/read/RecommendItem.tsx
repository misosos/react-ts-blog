// src/components/read/RecommendItem.tsx
type RecommendItemProps = {
    title: string;
    description: string;
    image: string;
};

export default function RecommendItem({
                                          title,
                                          description,
                                          image,
                                      }: RecommendItemProps) {
    return (
        <li>
            <a
                href="#"
                className="block rounded-2xl bg-white/95 p-3 shadow-sm ring-1 ring-rose-100 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-rose-200"
            >
                <div className="flex gap-3">
                    <img
                        src={image}
                        alt={title}
                        className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                    />
                    <div>
                        <h4 className="line-clamp-2 text-sm font-semibold text-rose-900">
                            {title}
                        </h4>
                        <p className="mt-1 line-clamp-3 text-[11px] leading-snug text-rose-500">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
}