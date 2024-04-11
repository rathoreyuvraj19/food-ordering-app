import CheckOutMenu from "./CheckOutMenu";

export default function Footer() {
  return (
    <div>
      <section>
        <CheckOutMenu
          subHeader="About Us"
          mainHeader="Our Stroy"
        ></CheckOutMenu>
        <div className="text-gray-500 max-w-2xl mx-auto text-center mt-4 flex flex-col gap-4">
          <p className=" ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi non
            autem blanditiis suscipit ex ipsa cum soluta, totam, impedit vel
            repellat saepe quidem facere dolorem ipsum est illum architecto
            deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus accusamus ipsa tempora? Eligendi voluptatem qui
            facere quisquam obcaecati neque perspiciatis dolorem explicabo
            quidem atque. Porro explicabo amet dolores distinctio cupiditate?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            accusantium molestias culpa expedita sint?
          </p>
        </div>
      </section>
      <section className="text-center">
        <CheckOutMenu
          subHeader={"Contact Us"}
          mainHeader="Dont Hesitate"
        ></CheckOutMenu>
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+91-123456789"
          >
            tel: +91-123456789
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reserved
      </footer>
    </div>
  );
}
