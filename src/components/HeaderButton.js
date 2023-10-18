const HeaderButton = ({ classes, name, event = () => console.log('Clicked!') }) => {
  return (
    <button onClick={event} className={`rounded-md h-[46px] w-[150px] ${classes} px-5 hover:bg-opacity-80 text-base font-jetBrain font-extrabold`}>
      {name}
    </button>
  );
};

export default HeaderButton;
