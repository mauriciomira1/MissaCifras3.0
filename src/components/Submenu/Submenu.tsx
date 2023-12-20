import ItemSubmenu from "./ItemSubmenu";

const Submenu = () => {
  return (
    <div className="flex  w-auto m-6 justify-center">
      <div className="flex items-center  max-w-5xl flex-wrap gap-2 justify-center">
        <ItemSubmenu name="CANTO DE ENTRADA" slug="canto-de-entrada" />
        <ItemSubmenu name="ATO PENITENCIAL" slug="ato-penitencial" />
        <ItemSubmenu name="GLÓRIA" slug="gloria" />
        <ItemSubmenu name="ACLAMAÇÃO" slug="aclamacao" />
        <ItemSubmenu name="OFERTÓRIO" slug="ofertorio" />
        <ItemSubmenu name="SANTO" slug="santo" />
        <ItemSubmenu name="COMUNHÃO" slug="comunhao" />
        <ItemSubmenu name="PÓS COMUNHÃO" slug="pos-comunhao" />
        <ItemSubmenu name="FINAL" slug="final" />
      </div>
    </div>
  );
};

export default Submenu;
