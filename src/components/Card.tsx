interface IProps {
  title: string;
  value: number | undefined | null;
  unit: string;
}

const CardComponent = ({ title, value, unit }: IProps) => {
  if (!value) {
    return (
      <div className="flex flex-col gap-y-4 rounded-lg bg-neutral-50 p-4 text-center text-black first:col-span-2">
        <p className="text-lg">{title}</p>
        <p className="text-sm text-[#dd5e5e]">Nenhum registro encontrado</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4 rounded-lg bg-neutral-50 p-4 text-center text-black first:col-span-2">
      <p className="text-lg">{title}</p>
      <p className="text-3xl">
        {value} <span className="text-sm">{unit}</span>
      </p>
    </div>
  );
};

export default CardComponent;
