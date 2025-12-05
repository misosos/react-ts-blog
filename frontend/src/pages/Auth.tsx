// src/pages/Auth.tsx
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// axiosInstance 경로는 실제 프로젝트 구조에 맞게 수정해 주세요.
import { axiosInstance } from "../api/axiosInstance";

type PageType = "login" | "signup";

export default function Auth() {
  const [pageType, setPageType] = useState<PageType>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setUsername("");
  };

  const handlePageChange = (type: PageType) => {
    resetForm();
    setPageType(type);
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !username) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      setIsSubmitting(true);

      const { data } = await axiosInstance.post("/register", {
        email,
        password,
        username,
      });

      console.log("signup success:", data);

      alert("회원가입을 완료했습니다.\n로그인 후 이용해 주세요.");

      resetForm();
      setPageType("login");
    } catch (error: unknown) {
      console.error(error);
      let message = "회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.";

      if (axios.isAxiosError(error)) {
        const data = error.response?.data as { message?: string } | undefined;
        if (data?.message) {
          message = data.message;
        }
      }

      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해 주세요.");
      return;
    }

    try {
      setIsSubmitting(true);

      const { data } = await axiosInstance.post("/login", {
        email,
        password,
      });

      console.log("login success:", data);
      // TODO: 받은 토큰/유저 정보를 전역 상태(zustand 등)나 localStorage에 저장
      navigate("/");
    } catch (error: unknown) {
      console.error(error);
      let message = "로그인 중 오류가 발생했습니다. 다시 시도해 주세요.";

      if (axios.isAxiosError(error)) {
        const data = error.response?.data as { message?: string } | undefined;
        if (data?.message) {
          message = data.message;
        }
      }

      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-rose-50 px-4 py-10 flex items-center justify-center">
      <section className="w-full max-w-md rounded-2xl bg-white/80 p-8 shadow-sm ring-1 ring-rose-100 backdrop-blur">
        {/* 상단 타이틀 */}
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            JBNU Blog Project
          </p>
          <h1 className="mt-2 text-xl font-bold text-rose-900">
            {pageType === "login" ? "다시 만나서 반가워요" : "처음 오셨나요?"}
          </h1>
          <p className="mt-1 text-xs text-rose-400">
            {pageType === "login"
              ? "JBNU 블로그에 로그인하고 오늘의 기록을 시작해요."
              : "간단한 정보만으로 당신만의 공간을 만들어 보세요."}
          </p>
        </div>

        {/* 탭 전환 버튼 */}
        <div className="mb-6 flex rounded-full bg-rose-50 p-1 ring-1 ring-rose-100">
          <button
            type="button"
            className={`flex-1 rounded-full px-3 py-2 text-xs font-medium transition ${
              pageType === "login"
                ? "bg-rose-500 text-white shadow-sm"
                : "text-rose-400 hover:bg-rose-50"
            }`}
            onClick={() => handlePageChange("login")}
          >
            로그인
          </button>
          <button
            type="button"
            className={`flex-1 rounded-full px-3 py-2 text-xs font-medium transition ${
              pageType === "signup"
                ? "bg-rose-500 text-white shadow-sm"
                : "text-rose-400 hover:bg-rose-50"
            }`}
            onClick={() => handlePageChange("signup")}
          >
            회원가입
          </button>
        </div>

        {/* 로그인 / 회원가입 폼 */}
        {pageType === "login" ? (
          <form className="space-y-4" onSubmit={handleLogin}>
            <label className="block text-sm font-medium text-rose-900">
              이메일
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-300 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="example@jbnu.ac.kr"
              />
            </label>

            <label className="block text-sm font-medium text-rose-900">
              비밀번호
              <input
                type="password"
                className="mt-1 w-full rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-300 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="비밀번호를 입력해 주세요"
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "로그인 중..." : "로그인"}
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSignup}>
            <label className="block text-sm font-medium text-rose-900">
              이름
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-300 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="nickname"
                placeholder="블로그에서 사용할 이름"
              />
            </label>

            <label className="block text-sm font-medium text-rose-900">
              이메일
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-300 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="example@jbnu.ac.kr"
              />
            </label>

            <label className="block text-sm font-medium text-rose-900">
              비밀번호
              <input
                type="password"
                className="mt-1 w-full rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-300 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                placeholder="8자 이상 비밀번호"
              />
            </label>

            <label className="block text-sm font-medium text-rose-900">
              비밀번호 확인
              <input
                type="password"
                className="mt-1 w-full rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-300 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                autoComplete="new-password"
                placeholder="비밀번호를 한 번 더 입력해 주세요"
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "회원가입 중..." : "회원가입"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}