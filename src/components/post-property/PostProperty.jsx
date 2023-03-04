import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "../input";
import { modalStyles } from ".";

const defaultProperty = {
  location: "",
  type: "",
  phone: "",
  price: "",
  neighborhood: "",
  image: "",
};

export const PostProperty = ({ showModal, toggleModal }) => {
  const [property, setProperty] = useState(defaultProperty);

  const { location, type, phone, price, neighborhood, image } = property;

  const handleChange = ({ target }) => {
    setProperty({ ...property, [target.name]: target.value });
  };

  const closeModal = () => {
    toggleModal("postProperty");
    setProperty(defaultProperty);
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
          Publicar propiedad
        </h3>
        <div className="flex flex-col gap-5 mb-8">
          <Input
            label="Tipo de inmueble"
            name="type"
            handleChange={handleChange}
            value={type}
          />
          <Input
            label="Teléfono"
            name="phone"
            handleChange={handleChange}
            value={phone}
            type="number"
          />
          <Input
            label="Ubicación"
            name="location"
            handleChange={handleChange}
            value={location}
          />
          <Input
            label="Barrio / Conjunto"
            name="neighborhood"
            handleChange={handleChange}
            value={neighborhood}
          />
          <Input
            label="Precio"
            name="price"
            handleChange={handleChange}
            value={price}
            type="number"
          />
          <Input
            label="Imagen (url)"
            name="image"
            handleChange={handleChange}
            value={image}
          />
        </div>
        <button className="border rounded-full px-5 py-1.5 text-white bg-primary flex gap-2 items-center font-light mx-auto">
          Guardar
        </button>
      </form>
    </Modal>
  );
};
