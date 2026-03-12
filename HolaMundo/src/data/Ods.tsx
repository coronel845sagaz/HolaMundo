type EstadoOds = "Aprobado" | "Ejecucion" | "Completado" | "Rechazado";

export interface InterfazSostenible {
    id: number;
    odsFav: string;
    estado: EstadoOds;
}


export const odsAlumnos: InterfazSostenible[] = [
    {
    id: 1,
    odsFav: "Fin de la pobreza",
    estado: "Rechazado",
},
{
    id: 2,
    odsFav: "Hambre cero",
    estado: "Ejecucion"
},
{
    id: 3,
    odsFav: "Salud y bienestar",
    estado: "Aprobado"
},
{
    id: 4,
    odsFav: "Educacion de calidad",
    estado: "Completado"
},
{
    id: 5,
    odsFav: "Igualdad de genero",
    estado: "Rechazado"
},
{
    id: 6,
    odsFav: "Agua limpia y saneamiento",
    estado: "Ejecucion"
},
{
    id: 7,
    odsFav: "Energia asequible y no contaminante",
    estado: "Aprobado"
},
{
    id: 8,
    odsFav: "Trabajo decente y crecimiento economico",
    estado: "Completado"
},
{
    id: 9,
    odsFav: "Industria, innovacion y infraestructura",
    estado: "Rechazado"
},
{
    id: 10,
    odsFav: "Reduccion de las desigualdades",
    estado: "Ejecucion"
},
{
    id: 11,
    odsFav: "Ciudades y comunidades sostenibles",
    estado: "Aprobado"
},
{
    id: 12,
    odsFav: "Produccion y consumo responsables",
    estado: "Completado"
},
{
    id: 13,
    odsFav: "Acceso a servicios y oportunidades",
    estado: "Rechazado"
},
{
    id: 14,
    odsFav: "Vida submarina",
    estado: "Ejecucion"
},
{
    id: 15,
    odsFav: "Vida de ecosistemas terrestres",
    estado: "Aprobado"
},
{
    id: 16,
    odsFav: "Paz, justicia e instituciones solidas",
    estado: "Completado"
},
{
    id: 17,
    odsFav: "Alianzas para lograr los objetivos",
    estado: "Rechazado"
}
];