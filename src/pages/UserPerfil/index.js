import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { getUserFromApi } from "../../helpers/user";
import Doge from "../../img/doge-worker-helmet.png";

const UserPerfil = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");

  useEffect(() => {
    async function fetch() {
      const obj = await getUserFromApi();
      obj.createdAt = new Date(obj.createdAt).toLocaleDateString();
      setUser(obj);
      setFname(obj.fullname);
      setEmail(obj.email);
    }
    fetch();
  }, []);

  return (
    <>
      <Header />
      <Section
        hero="hero is-success is-bold"
        page="Perfil"
        description="configurações e gerenciamento"
      />

      <div className="columns">
        <div className="column px-6">
          <div className="card">
            <div className="card-image">
              <figure className="image px-2 py-2">
                <img src={Doge} alt="imagem extendida" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <span className="title is-5">{fname}</span>
                <br />
                <span>{email}</span>
                <br />
                <time dateTime="2016-1-1">Desde: {user.createdAt}</time>
              </div>
            </div>
          </div>
        </div>

        <div className="column is-three-quarters">
          <div className="card mx-6 px-2">
            <div className="field is-horizontal my-2">
              <div className="field-label is-normal">
                <label className="label">Nome completo:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-static"
                      type="text"
                      value={fname || "carregando..."}
                      readOnly
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Usuário:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-static"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPerfil;
