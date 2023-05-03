import { useState, useContext } from "react";
import { api } from "../../api/api.js";
import { AuthContext } from "../../context/authContext.js";
import { useNavigate } from "react-router-dom";
import logo from "../../images/n-sys.png";

export function Login() {
  const { setLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div class="flex flex-col w-screen h-screen bg-slate-700 items-center ">
      <div class="flex flex-col h-max w-max items-center border border-purple-700 bg-gray-800 rounded-lg m-5 drop-shadow-xl">
        <div class="flex flex-col items-center mt-10  h-20 w-20">
          <img src={logo} />
        </div>

        <form onSubmit={handleSubmit} class="m-10">
          <div class=" text-purple-300 flex flex-col my-5 drop-shadow-xl">
            <label htmlFor="input-email">Email:</label>
            <input
              id="input-email"
              type="email"
              value={form.email}
              name="email"
              onChange={handleChange}
              class="border border-purple-800 rounded-full"
            />
          </div>
          <div class=" text-purple-300 flex flex-col my-5 drop-shadow-xl">
            <label htmlFor="input-password">Senha:</label>
            <input
              id="input-password"
              type="passsword"
              value={form.passsword}
              name="password"
              onChange={handleChange}
              class="border border-purple-800 rounded-full"
            />
          </div>
          <div class="my-5 mt-10 flex flex-col drop-shadow-xl">
            <button
              onSubmit={handleSubmit}
              class="border  border-black rounded-full drop-shadow-xl bg-purple-600 hover:bg-purple-900 "
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
