import "react";

const SearchBar = ({username,setusername,btnclick}) => {
  return (
    <div className="mt-12 px-6 sm:px-10">
      <p className="text-sm tracking-[0.3em] text-[#6D7566]">GITHUB USERNAME</p>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end">
        <input
          type="text"
          className="w-full sm:w-[60%] min-w-0 bg-transparent border-b border-[#7A8273] outline-none py-3 text-[#232722]"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button className="text-sm text-[#6D7566] hover:text-[#232722] transition" onClick={btnclick}>
          search →
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
