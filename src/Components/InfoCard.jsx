import "react";

const InfoCard = () => {
  return (
    <div id="info-card" className="bg-white rounded-3xl p-8 flex flex-col shadow-[0_2px_12px_rgba(74,86,69,0.08)]">
      <p className="text-sm tracking-[0.3em] text-[#6D7566] uppercase">
        Archive Record
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Followers</span>
          <span>128</span>
        </div>

        <div className="flex justify-between">
          <span>Following</span>
          <span>64</span>
        </div>

        <div className="flex justify-between">
          <span>Repositories</span>
          <span>22</span>
        </div>
      </div>

      <div className="h-px bg-[#7A8273] my-6"></div>

      <p className="text-[#6D7566]">Building products with React and Python.</p>
    </div>
  );
};

export default InfoCard;
