import logo from "../../images/n-sys.png";
import entrada from "../../images/ent.png.png";
import saida from "../../images/desp.png.png";
import fechamento from "../../images/fech.png.png";

export function Home() {
  return (
    <>
      <divc class="flex bg-slate-700 h-screen w-screen">
        <div class=" flex flex-col items-center w-72 h-screen bg-slate-700 border-r-4 border-purple-700">
          <div class="flex flex-col items-center  bg-center  mt-10  border border-purple-700 rounded-full">
            <img class="p-0 m-5 w-20 h-20" src={logo} />
          </div>
        </div>
        <div class="grid grid-cols-6 grid-rows-5 gap-4 w-full h-screen ">
          <div class="grid grid-cols-2 grid-rows-2 items-center border-2 col-span-2 row-span-1 p-3">
            <img src={entrada} class="row-span-2" />
            <h3>ENTRADA</h3>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 items-center border-2 col-span-2 row-span-1 p-3">
            <img src={saida} class="row-span-2" />
            <h3>DESPESAS</h3>
          </div>
          <div class=" grid grid-cols-2 grid-rows-2 items-center border-2 col-span-2 row-span-1  p-3">
            <img src={fechamento} class="row-span-2" />
            <h3>FECHAMENTO</h3>
          </div>
          <div class="border-2 col-span-4 row-span-3 ">ITEM4</div>
          <div class="border-2 col-span-2 row-span-3 ">ITEM5</div>
          <div class="border-2 col-span-3 row-span-1 ">ITEM6</div>
          <div class="border-2 col-span-3  row-span-1">ITEM7</div>
        </div>
      </divc>
    </>
  );
}
