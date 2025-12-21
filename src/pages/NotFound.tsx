import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: No se pudo encontrar la ruta en el servidor:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg animate-pulse">
          404
        </h1>

        <p className="mt-4 text-xl text-zinc-300">
          Oops… esta página se perdió en el espacio 🚀
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Ruta no encontrada: <span className="italic">{location.pathname}</span>
        </p>

        <Link
          to="/"
          className="inline-block mt-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
