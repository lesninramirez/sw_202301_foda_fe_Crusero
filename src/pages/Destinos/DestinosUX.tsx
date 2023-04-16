import { FC } from "react";
export interface IDestino {
  _id: string;
  pais: string;
  status: string;
  fecha: string;
  created?: string;
  updated?: string;
  observacion?: string;
}

export interface IDestinosUXProps {
  destinos: any[];
  isLoading: boolean;
  error: string;
  onViewDestinoClick: (id: string) => void;
  onAddClick: () => void;
}

export const DestinosUX: FC<IDestinosUXProps> = ({
  destinos,
  isLoading,
  error,
  onViewDestinoClick,
  onAddClick,
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <a onClick={onAddClick}>Add</a>
      {destinos && destinos.map((destino:IDestino) => (
        <DestinoUX
          _id={destino._id}
          pais={destino.pais}
          status={destino.status}
          fecha={destino.fecha}
          onViewDestinoClick={function (id: string): void {
            onViewDestinoClick(id);
          }}
        />
      ))}
    </>
  );
};
export interface IDestinoUXProps {
  _id: string;
  pais: string;
  status: string;
  fecha: string;
  onViewDestinoClick: (id: string) => void;
}
export const DestinoUX: FC<IDestinoUXProps> = ({
  _id,
  pais,
  status,
  fecha,
  onViewDestinoClick,
}) => {
  return (
    <div
      data-id={_id}
      onClick={() => {
        onViewDestinoClick(_id);
      }}
    >
      <span>{_id}</span>
      <span>{pais}</span>
      <span>{fecha}</span>
      <span>{status}</span>
    </div>
  );
};
