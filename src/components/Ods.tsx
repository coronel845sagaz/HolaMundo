function ods(){
    enum listaODS {
        ODS1 = "Fin de la pobreza",
        ODS2 = "Hambre cero",
        ODS3 = "Salud y bienestar",
        ODS4 = "Educación de calidad",
        ODS5 = "Igualdad de género",
        ODS6 = "Agua limpia y saneamiento",
        ODS7 = "Energía asequible y no contaminante",
        ODS8 = "Trabajo decente y crecimiento económico"
    }
    type EstadoOds = 'Aprobado' | 'Ejecucion' | 'Rechazado' | 'Completado';

    interface InterfazSostenible {
        id: number;
        odsFav:listaODS;
        estado: EstadoOds;
    }

    const odsAlumnos: InterfazSostenible[] = [{
        id: 1,
        odsFav: listaODS.ODS1,
        estado: 'Rechazado'
        } 
        , {
        id: 2,
        odsFav: listaODS.ODS2,
        estado: 'Ejecucion'
        } 
        , {
        id: 3,
        odsFav: listaODS.ODS3,
        estado: 'Ejecucion'
        }  
    ];
    let odsFav = listaODS.ODS3;

    function filtrarProyectosClimaticos(odsAlumnos: InterfazSostenible[]): InterfazSostenible[] {
        return odsAlumnos.filter(o => o.estado  === "Ejecucion");
    }
    const resultado = filtrarProyectosClimaticos(odsAlumnos);
    return <h1>{JSON.stringify(resultado,null,3)}</h1>;
}

export default ods;