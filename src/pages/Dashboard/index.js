import React from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";

import "./style.css";

const dashcards = [
  {
    title: "Top vendas total",
    color: "bg-gradient-to-r from-green-400",
    value: "446,25",
  },
  {
    title: "Valores a receber",
    color: "bg-gradient-to-r from-blue-400",
    value: "538,44",
  },
  {
    title: "Novos pedidos",
    color: "bg-gradient-to-r from-yellow-300",
    value: "246,48",
  },
  {
    title: "Inadimplentes",
    color: "bg-gradient-to-r from-red-400",
    value: "103,04",
  },
];

const Dashboard = () => {
  return (
    <>
      <Header />

      <Section page="Início" description="Resumo Geral" />

      <div className="flex flex-col md:flex-row sm:justify-evenly py-2 my-4">
        {dashcards.map((card, idx) => (
          <div
            key={idx}
            className={`border-2 border-gray-300 sm:rounded-tl-full sm:rounded-br-full my-4 sm:my-2 p-6 text-center shadow-lg ${card.color}`}
          >
            <div className="text-2xl font-bold">{card.title}</div>
            <div className="text-xl">R$ {card.value}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="px-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime
          dolorum dicta, odio mollitia quidem amet iste aspernatur error ipsum
          molestiae at sapiente labore. Repellendus voluptatem ad iusto facilis
          ab?
        </div>
      </div>
    </>
  );
};

export default Dashboard;
