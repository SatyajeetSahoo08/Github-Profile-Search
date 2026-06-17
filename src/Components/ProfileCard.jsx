import "react";
import stamp from "../assets/stamp.jpeg";
import artwork1 from "../assets/artwork1.jpg";
import artwork2 from "../assets/artwork2.jpg";
import artwork3 from "../assets/artwork3.jpg";
import artwork4 from "../assets/artwork4.jpg";

const ProfileCard = () => {
    const artworks = [artwork1,artwork2,artwork3,artwork4]

    const artwork = artworks[Math.floor(Math.random() * artworks.length)];
  return (
    <div
      id="profile-card"
      className="bg-white rounded-3xl flex-[1.2] flex flex-col md:flex-row overflow-hidden shadow-[0_2px_12px_rgba(74,86,69,0.08)]"
    >
      <div className="w-full md:w-[40%] lg:w-[44%] p-4">
        <div
          className="w-full h-48 sm:h-56 md:h-52 lg:h-full bg-[#E3E8DE] rounded-2xl overflow-hidden aspect-4/3 md:aspect-auto"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 15%) 0, 100% 15%, 100% 100%, 0 100%)",
          }}
        >
            <img src={artwork} alt="img" className="h-full w-full object-cover opacity-60"/>
        </div>
      </div>

      <div className="flex-1 py-5 md:py-6 pr-6 flex flex-col md:justify-between justify-start gap-4">
        <div className="text-center md:text-left">
          <p className="text-[#6D7566] text-sm uppercase tracking-widest">
            Developer
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-[#232722] leading-tight md:leading-none mt-2">
            ARCHIVE_GUEST
          </h2>

          <div className="w-[90%] mx-auto border-t border-dashed border-[#7A8273] my-5"></div>

          <div className="space-y-3 text-[#232722] wrap-break-word">
            <p>◎ github.com/archive_guest</p>
            <p>✦ linkedin.com/in/archive_guest</p>
            <p>✉ archive@mail.com</p>
          </div>
        </div>

        <div className="flex justify-end md:mt-auto mt-4">
          <div className="w-20 h-20">
            <img src={stamp} alt="?" className="h-full w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
