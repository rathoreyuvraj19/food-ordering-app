import Image from "next/image";
import PizzaCard from "./PizzaCard";
import CheckOutMenu from "./CheckOutMenu";

export default function HomeMenu() {
  return (
    <section>
      <div className="relative">
        <div className=" absolute  -top-16 -z-10 -left-4">
          <Image
            src={"/sallad1.png"}
            alt="sallad"
            width={109}
            height={189}
          ></Image>
        </div>
        <div className=" absolute -top-36 -right-4 -z-10">
          <Image
            src={"/sallad2.png"}
            width={107}
            height={195}
            alt="sallad"
          ></Image>
        </div>

        <CheckOutMenu mainHeader="CheckOut" subHeader={"Menu"}></CheckOutMenu>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <PizzaCard></PizzaCard>
        <PizzaCard></PizzaCard>
        <PizzaCard></PizzaCard>
        <PizzaCard></PizzaCard>
        <PizzaCard></PizzaCard>
        <PizzaCard></PizzaCard>
        <PizzaCard></PizzaCard>
      </div>
    </section>
  );
}
