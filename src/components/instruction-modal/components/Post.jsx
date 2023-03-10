export const Post = ({ toggleModal }) => {
  return (
    <>
      <p className="text-2xl font-bold mb-4 text-primary">
        ¿Como publicar un inmueble?
      </p>
      <p className="text-start text-sm pl-2">
        ● Presione el botón "Publicar inmueble"
      </p>
      <p className="text-start text-sm pl-2 my-1">
        ● LLene todos los campos del formulario{" "}
      </p>
      <p className="text-start text-sm pl-2">● Presione el botón "guardar"</p>
      <div className="flex gap-4 justify-center mt-6 items-center">
        <button
          className="button"
          onClick={() => {
            toggleModal("instructions");
            toggleModal("postProperty");
          }}
        >
          Aceptar
        </button>
      </div>
    </>
  );
};
