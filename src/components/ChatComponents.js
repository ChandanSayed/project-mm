const SidebarComponents = ({ textLeft, textRight, contentLeft, contentRight, rounded, color }) => {
  // console.log(color);
  return (
    <div className={`bg-midGray p-4 rounded-t-lg ${rounded} grid grid-cols-1 lg:grid-cols-5 mt-[15px]`}>
      <div className="col-span-1 md:col-span-1">
        <p className={`${textLeft} text-[14px] font-jetBrain `} style={{ color: `${color}` }}>
          {contentLeft}
        </p>
      </div>
      <div className="col-span-4 md:col-span-4 flex justify-between items-center">
        <p className={`text-dark ${textRight} text-[14px] font-jetBrain leading-5 `}>{contentRight}</p>
      </div>
    </div>
  );
};

export default SidebarComponents;
