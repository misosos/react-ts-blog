// App.tsx
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./layouts/RootRayout.tsx";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";
import Write from "./pages/Write.tsx";
import Read from "./pages/Read.tsx";
import { useAuthStore } from "./stores/useAuthStore";
import { axiosInstance } from "./api/axiosInstance";

function AuthenticatedLayout() {
  const { user } = useAuthStore();

  if (!user) {
    // 로그인하지 않은 경우 인증 페이지로 리다이렉트
    return <Navigate to="/auth" replace />;
  }

  // 로그인된 경우 하위 라우트 렌더링
  return <Outlet />;
}

export default function App() {
  const { user, accessToken, setAuth, unsetAuth } = useAuthStore();

  useEffect(() => {
    // user 정보는 있는데 accessToken이 비어 있으면 새로고침 이후로 판단하고, 토큰 재발급 시도
    if (!user || accessToken) return;

    let ignore = false;

    async function refreshAccessToken() {
      try {
        const { data } = await axiosInstance.post("/token");
        // 백엔드 응답: { user: { username, email }, accessToken }
        if (ignore) return;
        setAuth(data.user, data.accessToken);
      } catch (error) {
        console.error("토큰 재발급 실패", error);
        if (!ignore) {
          // refresh token이 유효하지 않은 경우, 완전 로그아웃 처리
          unsetAuth();
        }
      }
    }

    refreshAccessToken();

    return () => {
      ignore = true;
    };
  }, [user, accessToken, setAuth, unsetAuth]);

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<AuthenticatedLayout />}>
          <Route path="/write" element={<Write />} />
        </Route>
        <Route path="/read/:id" element={<Read />} />
      </Route>
    </Routes>
  );
}