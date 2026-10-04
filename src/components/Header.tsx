import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="mx-auto max-w-7xl items-center border-b border-neutral-100 px-4 py-4">
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-3">
        {/* Left Column (Empty balancing div so center stays truly centered) */}
        <div className="hidden sm:block"></div>

        {/* Center Column: Logo + Newspaper Name + Date */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={"/logo.webp"}
              alt="Bangla News 24"
              height={40}
              width={40}
              priority
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-3xl font-extrabold tracking-tight text-red-700 sm:text-4xl">
              Bangla News 24
            </h1>
          </div>

          {/* Date centered directly below */}
          <span className="mt-1 text-xs font-medium text-neutral-600 transition-colors hover:text-red-700">
            {date}
          </span>
        </div>

        {/* Right Column: Sign In & Sign Up Buttons */}
        <div className="flex items-center justify-center gap-2 text-sm sm:justify-end">
          <button className="btn btn-ghost btn-sm text-neutral-700 hover:text-red-700">
            সাইন ইন
          </button>
          <button className="btn btn-sm border-none bg-red-700 text-white hover:bg-red-800">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
