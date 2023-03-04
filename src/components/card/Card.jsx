const images = [
  // "https://images.ciencuadras.com/eyJidWNrZXQiOiJ3d3ctaW1nLWNjIiwia2V5IjoicHJveWVjdG8vMjM3MTkyLVA4MjQvdGlwb3MvU0FMT04tREUtSlVFR09TLUZJSk8tbWluMTYxMzc1NzI1MzY5X3BsYW5hLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MCwiaGVpZ2h0IjoxNjAsImZpdCI6ImNvdmVyIn19fQ==",
  "https://images.ciencuadras.com/eyJidWNrZXQiOiJ3d3ctaW1nLWNjIiwia2V5IjoicHJveWVjdG8vMjM3MjUyLVA4ODkvdGlwb3MvaW5pY2lvMTYzNTI2NzI1MDkyX3BsYW5hLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzUwLCJoZWlnaHQiOjE2MCwiZml0IjoiY292ZXIifX19",
];
const defaultImage =
  "https://images.ciencuadras.com/eyJidWNrZXQiOiJ3d3ctaW1nLWNjIiwia2V5Ijoic291cmNlcy9pbWFnZXMvcmVzdWx0L25vLXBob3RvLXByb3BlcnR5LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzUwLCJoZWlnaHQiOjE2MCwiZml0IjoiY292ZXIifX19";
export const Card = ({ index }) => {
  return (
    <div className="card w-64 shadow-lg rounded-lg overflow-hidden">
      <img
        className="card-image"
        src={images[index] || defaultImage}
        alt="property"
      />
      <div className="card__body px-4 pt-4 pb-2.5">
        <small className="text-gray-500 text-xs">Desde:</small>
        <p className="font-semibold text-xl">$150.000.000</p>
        <p className="text-gray-500 text-sm my-2">Conjunto fake</p>
        <p className="text-gray-700 text-xs">
          <i className="fa-solid fa-location-dot" />
          &nbsp; Bogotá
        </p>
        <div className="flex mt-4">
          <small className="flex-1 text-xxs text-center p-1.5 border border-l-0 border-t-0 border-b-0">
            160.5 m2
          </small>
          <small className="flex-1 text-xxs text-center p-1.5 border border-l-0 border-t-0 border-b-0">
            160.5 m2
          </small>
          <small className="flex-1 text-xxs text-center p-1.5 border border-l-0 border-t-0 border-b-0">
            160.5 m2
          </small>
          <small className="flex-1 text-xxs text-center p-1.5">160.5 m2 </small>
        </div>
      </div>
    </div>
  );
};
