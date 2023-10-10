const HeaderButton = ({ classes, name }) => {
  return <button className={`rounded-md h-[46px] w-[150px] ${classes} px-5 hover:bg-opacity-80 text-base font-jetBrain font-extrabold`}>{name}</button>;
};

export default HeaderButton;
