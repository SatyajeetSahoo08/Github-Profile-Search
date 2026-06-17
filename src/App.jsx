import "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import InfoCard from "./Components/InfoCard";
import Credit from "./Components/Credit";

const App = () => {
  return (
    <div className="min-h-screen p-5 bg-[#D7DDD0] w-full overflow-x-hidden" id="screen">
      <div className="border-2 border-[#4A5645] flex flex-col md:flex-row h-auto md:h-[95vh]" id="border">
        <div id="left-section" className="w-full md:w-[40%] lg:w-[35%] flex flex-col gap-10">
          <Header />
          <SearchBar/>
          <Credit/>
        </div>

        <div id="right-side" className="w-full md:w-[60%] lg:w-[65%] flex flex-col gap-6 p-6 lg:p-8">
          <ProfileCard/>
          <InfoCard/>
        </div>
      </div>
    </div>
  );
};

export default App;
