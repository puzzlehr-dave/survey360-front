import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { useEffect } from "react";
import { LogOut } from "react-feather";

export default function Header() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  const isLoggedIn = window.location.href.indexOf("clients") > -1;

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
              <Link to="/">
                <p className="text-xs text-slate-800 flex gap-2">
                  SIGN OUT <LogOut size={14} />
                </p>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
