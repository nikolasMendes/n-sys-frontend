import { useState } from "react";
import { api } from "../../api/api.js";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/signup", form);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">Nome:</label>
      <input
        id="input-name"
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="input-email">Email:</label>
      <input
        id="input-email"
        type="email"
        value={form.email}
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="input-password">Senha:</label>
      <input
        id="input-password"
        type="passsword"
        value={form.passsword}
        name="password"
        onChange={handleChange}
      />

      <button>Cadastrar !!!</button>
    </form>
  );
}
