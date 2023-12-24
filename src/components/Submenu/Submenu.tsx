import ItemSubmenu from "./ItemSubmenu";

const Submenu = () => {
  return (
    <div className="m-6  flex w-auto justify-center">
      <div className="flex max-w-5xl  flex-wrap items-center justify-center gap-2">
        <ItemSubmenu name="CANTO DE ENTRADA" slug="canto-de-entrada" />
        <ItemSubmenu name="ATO PENITENCIAL" slug="ato-penitencial" />
        <ItemSubmenu name="GLÓRIA" slug="gloria" />
        <ItemSubmenu name="ACLAMAÇÃO" slug="aclamacao" />
        <ItemSubmenu name="OFERTÓRIO" slug="ofertorio" />
        <ItemSubmenu name="SANTO" slug="santo" />
        <ItemSubmenu name="COMUNHÃO" slug="comunhao" />
        <ItemSubmenu name="PÓS COMUNHÃO" slug="pos-comunhao" />
        <ItemSubmenu name="FINAL" slug="final" />
        <ItemSubmenu name="GRUPO DE ORAÇÃO" slug="grupo-de-oracao" />
      </div>
    </div>
  );
};

export default Submenu;
