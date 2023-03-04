import { useState } from "react";
import { SearchInput } from "../search-input";
import { PROPERTY_CATEGORIES } from ".";
import "./Header.scss";

export const Header = ({ toggleModal }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header className="header">
      <section className="flex items-center gap-4">
        <SearchInput
          value={searchValue}
          handleChange={({ target }) => setSearchValue(target.value)}
        />
        {PROPERTY_CATEGORIES.map((category) => (
          <button key={category} className="header__filtering-button">
            {category}
          </button>
        ))}
      </section>
      <section className="flex gap-6 text-sm">
        <button
          className="text-primary font-semibold underline"
          onClick={() => toggleModal("login")}
        >
          Ingresar
        </button>
        <button
          className="border rounded-full px-5 py-1.5 text-white bg-primary flex gap-2 items-center font-light"
          onClick={() => toggleModal("postProperty")}
        >
          Publicar
          <i className="fa-solid fa-bag-shopping" />
        </button>
      </section>
    </header>
  );
};
