"use client";
import "./main.css";
import { useEffect } from "react";
import cargarDatos from "./cargar";
const AgendaContainer = ({}) => {
  useEffect(() => {
    cargarDatos();
  }, []);

  return <div className="agendas" id="agenda"></div>;
};

export default AgendaContainer;
