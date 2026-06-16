import "react";

const Header = () => {
  return (
    <div
      id="header"
      className="inline-block text-6xl font-black p-10 text-[#232722]"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <h1>DEVELOPER</h1>
      <div className="flex gap-1 items-center">
        <h1>ARCHIVE</h1>
        <div className="text-sm text-[#6D7566]">
          discover developers through github
        </div>
      </div>
      <div className="mt-2 h-px bg-[#7A8273]"></div>
    </div>
  );
};

export default Header;
