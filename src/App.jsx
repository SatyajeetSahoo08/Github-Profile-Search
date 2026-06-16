import "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import InfoCard from "./Components/InfoCard";
import Credit from "./Components/Credit";

const App = () => {
  return (
    <div className="h-screen p-5 bg-[#D7DDD0] w-full" id="screen">
      <div className="h-[95vh] border-2 border-[#4A5645] flex" id="border">
        <div id="left-section" className="w-[35%] flex flex-col gap-10">
          <Header />
          <SearchBar/>
          <Credit/>
        </div>

        <div id="right-side" className="w-[65%] flex flex-col gap-6 p-8">
          <ProfileCard/>
          <InfoCard/>
        </div>
      </div>
    </div>
  );
};

export default App;
