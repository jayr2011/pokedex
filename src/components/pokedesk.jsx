import React, { useEffect, useState } from "react";
import Api from "../API/Api";
const Pokedesk = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);
  const buscarDados = async (id) => {
    const resposta = await Api.get(`pokemon/${id}`);
    setPokemon(resposta.data);
  };

  useEffect(() => {
    buscarDados(id);
  }, [id]);

  const handleClick = (seta) => {
    if (seta === "direita") {
      if (id >= 898) {
        setId(1);
      } else {
        setId(id + 1);
      }
    } else {
      if (id <= 1) {
        setId(898);
      } else {
        setId(id - 1);
      }
    }
  };
  return (
    <>
      <div className="center">
        <div className="principal-container">
          <div className="information">
            <section className="container-pokemon">
              <header className="pokemon">
                <h1 className="name">{pokemon?.name}</h1>
                {pokemon?.types.map((tipo, index) => (
                  <h1 id={`type-${index}`}>{tipo.type.name}</h1>
                ))}
              </header>
            </section>

            <section className="img">
              {pokemon && (
                <img
                  className="img-pokemon"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                />
              )}
            </section>
            <div className="descrition">
              <section className="descrition">
                <p className="pokemon-descrition">sescrição</p>
              </section>
              <section className="golpes">
                {pokemon?.moves.map(
                  (golpe, index) =>
                    index < 4 && <h1 id={`type-${index}`}>{golpe.move.name}</h1>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow">
        <img
          onClick={() => handleClick("esqerda")}
          className="arrow-seta-esquerda"
          src="data:image/png;base64,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"
          alt=""
        />
        <p className="pokemon-number">{id}</p>
        <img
          onClick={() => handleClick("direita")}
          className="arrow-seta-direita"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </>
  );
};

export default Pokedesk;
