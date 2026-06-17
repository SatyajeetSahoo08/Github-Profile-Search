import "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import InfoCard from "./Components/InfoCard";
import Credit from "./Components/Credit";
import { useState } from "react";
import artwork1 from "./assets/artwork1.jpg";
import artwork2 from "./assets/artwork2.jpg";
import artwork3 from "./assets/artwork3.jpg";
import artwork4 from "./assets/artwork4.jpg";

const App = () => {
  const [username, setusername] = useState("");
  const [userData, setuserData] = useState("");
  const [currentartwork, setcurrentartwork] = useState(artwork1);
  const artworks = [artwork1, artwork2, artwork3, artwork4];

  const handlesearch = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setuserData(data);

    const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];

    setcurrentartwork(randomArtwork);
  };
  return (
    <div
      className="min-h-screen p-5 bg-[#D7DDD0] w-full overflow-x-hidden"
      id="screen"
    >
      <div
        className="border-2 border-[#4A5645] flex flex-col md:flex-row h-auto md:h-[95vh]"
        id="border"
      >
        <div
          id="left-section"
          className="w-full md:w-[40%] lg:w-[35%] flex flex-col gap-10"
        >
          <Header />
          <SearchBar
            username={username}
            setusername={setusername}
            btnclick={handlesearch}
          />
          <Credit />
        </div>

        <div
          id="right-side"
          className="w-full md:w-[60%] lg:w-[65%] flex flex-col gap-6 p-6 lg:p-8"
        >
          <ProfileCard userData={userData} currentartwork={currentartwork}/>
          <InfoCard userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default App;
