import ItemSubmenu from "./ItemSubmenu";

const Submenu = () => {
  return (
    <div className="flex  w-auto m-6 justify-center">
      <div className="flex items-center  max-w-5xl flex-wrap gap-2 justify-center">
        <ItemSubmenu name="CANTO DE ENTRADA" />
        <ItemSubmenu name="ATO PENITENCIAL" />
        <ItemSubmenu name="GLÓRIA" />
        <ItemSubmenu name="ACLAMAÇÃO" />
        <ItemSubmenu name="OFERTÓRIO" />
        <ItemSubmenu name="SANTO" />
        <ItemSubmenu name="COMUNHÃO" />
        <ItemSubmenu name="PÓS COMUNHÃO" />
        <ItemSubmenu name="FINAL" />
      </div>
    </div>
  );
};

export default Submenu;
