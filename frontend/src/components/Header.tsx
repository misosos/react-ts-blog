// src/components/Header.tsx
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { useAuthStore } from "../stores/useAuthStore";

export default function Header() {

    const navigate = useNavigate();
    const { user, unsetAuth } = useAuthStore();

    const handleLogout = async () => {
        try {
            const { status } = await axiosInstance.post("/logout");
            // 백엔드 로직상 refreshToken 이 없으면 204, 정상 로그아웃이면 200을 반환하므로
            // 둘 다 성공으로 간주한다.
            if (status === 200 || status === 204) {
                unsetAuth();
                navigate("/");
                return;
            }
            throw new Error("로그아웃에 실패했습니다.");
        } catch (error) {
            console.error(error);
            alert("로그아웃 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    };

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

                        {user ? (
                            <>
                                <li>
                                    <span className="hidden text-xs font-medium text-rose-700 md:inline">
                                        {user.username}님
                                    </span>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-rose-500 shadow-sm transition hover:bg-rose-50"
                                    >
                                        로그아웃
                                    </button>
                                </li>
                            </>
                        ) : (
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
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
