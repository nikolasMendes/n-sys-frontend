import { Link } from "react-router-dom";

export function CreateOrder() {
  return (
    <div class="bg-slate-700 h-screen w-scren">
      <div>
        <Link to={`/home`}>
          <button class="p-2 border  border-black rounded-full drop-shadow-xl bg-purple-600 hover:bg-purple-900 ">
            DASHBOARD
          </button>
        </Link>
      </div>
      <div>
        <form class="grid grid-cols-2 grid-rows-2 h-110 w-55 border-2 border-purple-700">
          <div>
            <div>
              <label class="text-purple-300">Cliente:</label>
            </div>
            <div>
              <input class="border border-purple-800 rounded-full"></input>
            </div>
          </div>
          <div>
            <div>
              <label class="text-purple-300 ">Produto:</label>
            </div>
            <div>
              <input class="border border-purple-800 rounded-full"></input>
            </div>
          </div>
          <div>
            <div>
              <label class="text-purple-300 ">Unidade</label>
            </div>
            <div>
              <input class="border border-purple-800 rounded-full"></input>
            </div>
          </div>
          <div>
            <div>
              <label class="text-purple-300 ">Tipo de Pagamento:</label>
            </div>
            <div>
              <input class="border border-purple-800 rounded-full"></input>
            </div>
          </div>
          <div>
            <div>
              <label class="text-purple-300 ">Status Pagamento:</label>
            </div>
            <div>
              <input class="border border-purple-800 rounded-full"></input>
            </div>
          </div>
          <div>
            <div>
              <label class="text-purple-300 ">Status de entrega:</label>
            </div>
            <div>
              <input class="border border-purple-800 rounded-full"></input>
            </div>
          </div>
          <div>
            <button class="p-2 border  border-black rounded-full drop-shadow-xl bg-green-600 hover:bg-green-900 ">
              CRIAR PEDIDO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
