type IconListProps = {
  icons: string[];
  title: string;
};

const IconList = ({ icons, title }: IconListProps) => {
  return (
    <>
      <span className="text-2xl font-bold pb-5">{title}</span>
      <div className="flex flex-wrap lg:flex-row justify-center lg:items-center gap-2 pb-10 ">
        {icons.map((item, index) => {
          return (
            <img
              key={index}
              width={60}
              src={`https://skillicons.dev/icons?i=${item}`}
              alt={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default IconList;
