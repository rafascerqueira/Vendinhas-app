import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { getUserFromApi } from "../../helpers/user";
import Doge from "../../img/doge-worker-helmet.png";

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [fname, setFname] = useState("");
  const [since, setSince] = useState("");
  const [isAdmin, SetIsAdmin] = useState(false);

  useEffect(() => {
    async function fetch() {
      const obj = await getUserFromApi();
      obj.createdAt = new Date(obj.createdAt).toLocaleDateString();
      setFname(obj.fullname);
      setFirstname(fname.split(" ")[0]);
      setEmail(obj.email);
      setSince(obj.createdAt);
      SetIsAdmin(obj.admin);
    }
    fetch();
  }, [fname]);

  return (
    <>
      <Header />
      <Section page="Perfil" description="configurações e gerenciamento" />

      <div className="container mx-auto">
        <div className="flex my-4 text-center">
          <div className="bg-gray-400 md:rounded-tl-md md:rounded-bl-md">
            <img
              src={Doge}
              alt="Perfil"
              className="h-48 w-48 m-4 rounded-full border-2 shadow-lg bg-white"
            />
            <span className="flex justify-center text-lg uppercase">
              {fname}
            </span>
            <span className="flex justify-center text-sm lowercase">
              {email}
            </span>
            <span className="flex justify-center text-sm">
              {isAdmin ? "(Admin)" : "(Usuário)"}
            </span>
          </div>

          <div className="flex-auto bg-indigo-300 md:rounded-tr-md md:rounded-br-md py-4">
            <div className="text-white">
              <h1 className="text-5xl">Bem vindo, {firstname}.</h1>
              <h2 className="">Desde {since}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
