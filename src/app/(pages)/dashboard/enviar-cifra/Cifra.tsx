const Cifra = () => {
  const letraDaMusica = `Manda teus anjos, sobre nós\n
E abençoa todos que esperam em vós
Manda teus anjos, pra nos ensinar
A te louvar, e glorificar
Envia também teu espírito de paz e amor
O meu coração tem sede, do meu criador
Envia senhor os teus anjos, pra nos resgatar
Pra nos proteger de todo mau, para nos guiar, senhor`;

  const arrayDeLetras = letraDaMusica.split("");

  return (
    <div className="flex items-center justify-center">
      {/*       {arrayDeLetras.map((letra, index) => (
        <div>
          <sub>
            <select name="C" id="c"></select>
          </sub>
          <div key={index}>{letra}</div>
        </div>
      ))} */}
      <h1>página de enviar cifra</h1>
    </div>
  );
};

export default Cifra;
