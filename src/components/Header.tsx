// src/components/Header.tsx
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-30 bg-rose-50/80 backdrop-blur">
            <div className="flex w-full items-center justify-between border-b border-rose-100 px-4 py-3">
                {/* 로고 영역 */}
                <div className="flex items-center gap-3">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 rounded-2xl bg-rose-500 px-3 py-1.5 text-white shadow-md transition hover:bg-rose-400"
                    >
                        <span className="text-sm font-bold tracking-tight">JBNU</span>
                        <span className="rounded-full bg-rose-300/90 px-2 text-[11px] font-medium uppercase tracking-[0.18em] text-rose-900">
                            Blog
                        </span>
                    </NavLink>
                </div>

                {/* 내비게이션 */}
                <nav>
                    <ul className="flex items-center gap-2 md:gap-3">
                        <li>
                            <NavLink
                                to="/write"
                                className={({ isActive }) =>
                                    [
                                        "rounded-full px-3 py-1.5 text-xs font-medium md:text-sm transition",
                                        isActive
                                            ? "bg-rose-500 text-white shadow-md"
                                            : "bg-rose-100 text-rose-700 hover:bg-rose-200"
                                    ].join(" ")
                                }
                            >
                                글쓰기
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/auth"
                                className={({ isActive }) =>
                                    [
                                        "rounded-full px-3 py-1.5 text-xs font-medium md:text-sm transition",
                                        isActive
                                            ? "bg-rose-400 text-white shadow-md"
                                            : "bg-white/80 text-rose-500 border border-rose-200 hover:bg-rose-50"
                                    ].join(" ")
                                }
                            >
                                인증
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
