import Image from "next/image";
import Right from "./icons/RIght";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br /> is better <br /> with a{" "}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-sm text-gray-500">
          Pizza is the missing piece that make every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex text-sm  gap-4">
          <button className="bg-primary rounded-full text-white px-8 py-2 flex gap-2  items-center">
            Order Now <Right className="w-6 h-6"></Right>
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn More <Right className="w-6 h-6"></Right>
          </button>
        </div>
      </div>
      <div className="relative">
        {" "}
        <Image
          src={"/pizza.png"}
          layout="fill"
          objectFit="contain"
          alt="Pizza image"
        ></Image>
      </div>
    </section>
  );
}
