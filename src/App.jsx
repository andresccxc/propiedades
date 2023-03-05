import { useState } from "react";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Login } from "./components/login";
import { Map } from "./components/map";
import { PostProperty } from "./components/post-property";

const items = [1, 2, 3, 4, 5, 6];

function App() {
  const [modal, setModal] = useState({ login: false, postProperty: false });

  const toggleModal = (name) => {
    setModal({ login: false, postProperty: false, [name]: !modal[name] });
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleModal={toggleModal} />
      <main className="flex flex-1 main flex-col md:flex-row">
        <div className="properties__container">
          <div className="mb-4">
            <p className="text-gray-600 font-semibold">Más de 5 resultados</p>
          </div>
          <section className="properties">
            {[...items].map((item, index) => (
              <Card key={item} index={index} />
            ))}
          </section>
        </div>
        <section className="flex-1">{!modal.postProperty && <Map />}</section>
      </main>
      <Footer />
      <Login showModal={modal.login} toggleModal={toggleModal} />
      <PostProperty showModal={modal.postProperty} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
