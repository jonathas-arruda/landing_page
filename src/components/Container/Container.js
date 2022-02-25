import Logo from "../../assets/images/svg/Logo";
import Programer from "../../assets/images/svg/Programer";

const Container = () => {
  return (
    <div>
      <div className="bg-slate-50 h-full flex w-full justify-around items-center ">
        <div className="px-[5%] lg:px-[10%] py-10  grid md:grid-cols-2 ">
          <div className="w-[75%] place-self-center">
            <Programer />
          </div>
          <div className="mt-[10%] md:pr-[15%] ">
            <h1 className=" text-center md:text-left text-4xl lg:text-5xl 2xl:text-6xl  ">
              Lorem ipsum dolor sit.
            </h1>
            <h2 className="text-center md:text-left pt-6 md:pt-10 text-lg">
              Corrupti explicabo laborum est facere fugiat in recusandae fuga
              mollitia sint error repellat minus.
            </h2>
            <div className="flex justify-center md:justify-end">
              <button className="rounded-xl mt-10 min-w-[200px] w-[42%] h-10 whitespace-nowrap bg-blue drop-shadow-lg text-xl font-medium text-white hover:bg-transparent hover:ring-2 hover:ring-blue   hover:text-blue ">
                Lorem ipsum!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
