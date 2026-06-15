import "react";

const App = () => {
  return (
    <div className="h-screen p-5 bg-[#D7DDD0] w-full" id="screen">
      <div className="h-[95vh] border-2 border-[#4A5645]" id="border">
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

        <div className="mt-12 px-10">
          <p className="text-sm tracking-[0.3em] text-[#6D7566]">
            GITHUB USERNAME
          </p>
          <div className="flex items-end gap-3">
            <input
              type="text"
              className="w-[33%] bg-transparent border-b border-[#7A8273] outline-none py-3 text-[#232722]"/>

              <button className="text-sm text-[#6D7566] hover:text-[#232722] transition">
                search →
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
