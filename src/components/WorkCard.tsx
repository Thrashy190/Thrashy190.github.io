import CardType from "../interfaces/cardInterfaces";

const WorkCard = ({ card }: { card: CardType }) => {
  return (
    <div className="group relative h-[600px] w-[500px] overflow-hidden bg-white rounded-lg">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>

      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className="flex justify-center items-center pb-10">
          {card.logo}
        </div>
        <p className=" px-8 text-xl font-black uppercase text-[#242424]">
          {card.company_name}
        </p>
        <p className="px-8 text-xl uppercase text-[#242424] ">
          {card.start_date} - {card.end_date ? card.end_date : "Present"}
        </p>
        {card.description}
      </div>
    </div>
  );
};

export default WorkCard;
