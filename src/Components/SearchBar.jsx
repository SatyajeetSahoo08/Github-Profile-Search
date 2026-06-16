import "react";

const SearchBar = () => {
  return (
    <div className="mt-12 px-10">
      <p className="text-sm tracking-[0.3em] text-[#6D7566]">GITHUB USERNAME</p>
      <div className="flex items-end gap-3">
        <input
          type="text"
          className="w-[60%] bg-transparent border-b border-[#7A8273] outline-none py-3 text-[#232722]"
        />
        <button className="text-sm text-[#6D7566] hover:text-[#232722] transition">
          search →
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
