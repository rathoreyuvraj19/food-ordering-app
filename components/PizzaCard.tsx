export default function PizzaCard() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white  transition-all hover:scale-110">
      <div className="text-center ">
        <img className="" alt="pizza" src="/pizza.png"></img>
      </div>
      <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        lorem ipsum dolor sit amet , ocnsecturlur adibkjkas elit
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart 12 Rs
      </button>
    </div>
  );
}
