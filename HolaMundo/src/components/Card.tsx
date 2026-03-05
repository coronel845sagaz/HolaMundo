import type { InterfazSostenible } from "../data/Ods";

export const Card = ({itemOds}: {itemOds: InterfazSostenible}) => {
    return (
            <div className="card">
                <h3>{itemOds.id}</h3>
                <p>{itemOds.odsFav}</p>
                <p>{itemOds.estado}</p>
            </div>
    );
};