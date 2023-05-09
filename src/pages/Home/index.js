import logo from "../../images/n-sys.png";
import entrada from "../../images/ent.png.png";
import saida from "../../images/desp.png.png";
import fechamento from "../../images/fech.png.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div class="grid grid-cols-12 grid-rols-1 gap-2 bg-slate-700 h-screen w-screen place-content-stretch">
      <div class="col-span-2 items-center  bg-slate-700 border-r-4 border-purple-700">
        <div class="flex flex-col items-center  bg-center  mt-10 hover:drop-shadow-2xl rounded-full">
          <img class="p-0 m-5 w-20 h-20" src={logo} />
        </div>
      </div>
      <div class="col-span-10">
        <div class="grid grid-cols-6 grid-rows-5 gap-2 w-full h-screen ">
          <div class="grid grid-cols-2 grid-rows-2 items-center col-span-2 row-span-1 hover:border-2 border-purple-700 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl ">
            <Link
              to={`/orders`}
              class="grid  col-span-2 row-span-3 m-0 h-full justify-items-center"
            >
              <div class="grid grid-cols-2 grid-rows-1 h-full w-full  m-0 justify-items-center">
                <div class=" col-span-1 rows-span-2 h-full">
                  <img src={entrada} class="h-20 w-20 mt-3" />
                </div>
                <div class="flex text-purple-300 col-span-1 rows-span-1 h-full items-center">
                  PEDIDOS
                </div>
              </div>
            </Link>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 items-center hover:border-2 border-purple-700  col-span-2 row-span-1 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl">
            <Link
              to={`/payments`}
              class="grid  col-span-2 row-span-3 m-0 h-full justify-items-center"
            >
              <div class="grid grid-cols-2 grid-rows-1 h-full w-full m-0 justify-items-center">
                <div>
                  <img src={saida} class="h-20 w-20 mt-3" />
                </div>
                <div class="flex text-purple-300 col-span-1 rows-span-1 h-full items-center">
                  DESPESAS
                </div>
              </div>
            </Link>
          </div>
          <div class=" grid grid-cols-2 grid-rows-3 h-full hover:border-2 border-purple-700 items-center col-span-2 row-span-1 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl">
            <Link
              to={`/balance`}
              class="grid col-span-2 row-span-3 m-0 h-full justify-items-center"
            >
              <div class="grid grid-cols-2 grid-rows-1 h-full w-full m-0 justify-items-center">
                <div class=" col-span-1 rows-span-2 h-full">
                  <img src={fechamento} class="h-20 w-20 mt-3" />
                </div>
                <div class="flex text-purple-300 col-span-1 rows-span-1 h-full items-center">
                  FECHAMENTO
                </div>
              </div>
            </Link>
          </div>
          <div class="hover:border-2 border-purple-700 col-span-4 row-span-3 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl ">
            ITEM4
          </div>
          <div class="hover:border-2 border-purple-700 col-span-2 row-span-3 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl">
            ITEM5
          </div>
          <div class="hover:border-2 border-purple-700 col-span-3 row-span-1 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl ">
            ITEM6
          </div>
          <div class="hover:border-2 border-purple-700 col-span-3  row-span-1 rounded-xl bg-slate-700 hover:bg-slate-700 drop-shadow-md hover:drop-shadow-2xl">
            ITEM7
          </div>
        </div>
      </div>
    </div>
  );
}
