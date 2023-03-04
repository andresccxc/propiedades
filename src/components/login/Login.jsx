import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "../input";
import { modalStyles } from ".";

export const Login = ({ showModal, toggleModal }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const closeModal = () => {
    toggleModal("login");
    setUser({ email: "", password: "" });
  };

  return (
    <Modal isOpen={showModal} style={modalStyles}>
      <form className="py-12 px-4 relative">
        <button
          className="top-0 right-0 absolute"
          type="button"
          onClick={closeModal}
        >
          <i class="fa-sharp fa-solid fa-circle-xmark text-primary text-2xl cursor-pointer" />
        </button>
        <h3 className="text-gray-500 text-2xl font-bold mb-8 text-center">
          Iniciar sesión
        </h3>
        <div className="flex flex-col gap-5">
          <Input
            className="login-input"
            label="Correo electrónico"
            name="email"
            handleChange={handleChange}
            value={user.email}
          />
          <Input
            className="login-input"
            label="Contraseña"
            type="password"
            name="password"
            handleChange={handleChange}
            value={user.password}
          />
        </div>
        <p className="text-primary underline font-semibold mt-3 text-sm mb-6">
          ¿Olvidaste tu contraseña?
        </p>
        <button className="border rounded-full px-5 py-1.5 text-white bg-primary flex gap-2 items-center font-light mx-auto">
          Iniciar sesión
        </button>
      </form>
    </Modal>
  );
};
