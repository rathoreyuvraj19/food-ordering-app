interface CheckOutMenuProps {
  subHeader: string;
  mainHeader: string;
}

export default function CheckOutMenu({
  subHeader,
  mainHeader,
}: CheckOutMenuProps) {
  return (
    <div className="text-center mb-4">
      <h3 className="uppercase text-gray-600 font-semibold">{mainHeader}</h3>
      <h2 className="text-primary font-bold text-4xl italic">{subHeader}</h2>
    </div>
  );
}
