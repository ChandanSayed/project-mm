import tooltip from '/public/home/tooltip.svg';

const Tooltip = ({ message, showCopy }) => {
  return (
    <div style={{ backgroundImage: `url(${tooltip.src})` }} className={`qr-code p-[10px] w-max rounded-[8px_8px_14px_14px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[66px] bg-no-repeat bg-cover bg-center pb-4 ${showCopy ? 'animate-fade' : 'opacity-0'}`}>
      <p className="text-white font-medium text-sm font-jetBrain">{message}</p>
    </div>
  );
};

export default Tooltip;
