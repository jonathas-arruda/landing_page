import Logo from "../../assets/images/svg/Logo";
import Programer from "../../assets/images/svg/Programer";

const Container = () => {
  return (
    <div>
      <div className="bg-slate-50 h-full flex w-full justify-around items-center ">
        <div className=" w-[80%] px-4 py-10  flex justify-around items-center">
          <div>
            <Programer />
          </div>
          <div className="w-[40%]">
            <h1 className="text-4xl flex ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <h2 className=" pt-5">
              Corrupti explicabo laborum est facere fugiat in recusandae fuga
              mollitia sint error repellat minus.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
