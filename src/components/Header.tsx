import { useLocation, useNavigate } from "react-router-dom";
import Container from "./Container";
import { useEffect } from "react";
import { LogOut } from "react-feather";
import Cookies from "js-cookie";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, [location]);

  const isLoggedIn = window.location.href.indexOf("clients") > -1;

  function signOut() {
    Cookies.remove("signedIn");
    Cookies.remove("userDetails");
    navigate("/");
  }

  return (
    <header className="w-full py-2 bg-white">
      <Container>
        <div className="flex align-middle h-full">
          <div>
            <p>
              <strong className="text-lime-600">PuzzleHR</strong> Survey360™️
            </p>
          </div>
          {isLoggedIn && (
            <div className="ml-auto flex items-center">
              <button
                onClick={signOut}
                className="text-xs text-slate-800 flex gap-2"
              >
                SIGN OUT <LogOut size={14} />
              </button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
