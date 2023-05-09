import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Orders() {
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
        <Link to={`/createOrder`}>
          <button class="p-2 border  border-black rounded-full drop-shadow-xl bg-green-600 hover:bg-green-900 ">
            CRIAR PEDIDO
          </button>
        </Link>
      </div>
    </div>
  );
}
