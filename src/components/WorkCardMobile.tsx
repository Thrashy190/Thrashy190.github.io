import CardType from "../interfaces/cardInterfaces";

const WorkCardMobile = ({ card }: { card: CardType }) => {
  return (
    <div className=" bg-white py-10 rounded-lg">
      <div className="flex justify-center items-center pb-10">{card.logo}</div>
      <p className=" px-8 text-xl font-black uppercase text-[#242424]">
        {card.company_name}
      </p>
      <p className="px-8 text-xl uppercase text-[#242424] ">
        {card.start_date} - {card.end_date ? card.end_date : "Present"}
      </p>
      {card.description}
    </div>
  );
};

export default WorkCardMobile;
