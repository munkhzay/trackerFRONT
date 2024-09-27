const OneRecord = (props) => {
  const { text, image, time, color, money } = props;
  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between">
      <div className="flex gap-4">
        {image}
        <div className="flex flex-col">
          <p className="font-normal text-base">{text}</p>
          <p className="font-normal text-xs text-[#6B7280]"> {time} </p>
        </div>
      </div>
      <p className={`font-semibold text-base text-[${color}]`}> {money} </p>
    </div>
  );
};

export default OneRecord;
