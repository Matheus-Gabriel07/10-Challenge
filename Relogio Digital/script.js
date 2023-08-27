/**
 * @function clock - Atualiza constantemente os valores de segundo minuto e horas
 * e aplica os mesmos dentro dos DOMs
 */
const clock = () => {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const day = document.getElementById("day");

  setInterval(() => {
    hours.innerHTML =
      new Date().getHours() > 9
        ? new Date().getHours()
        : `0${new Date().getHours()}`;
    minutes.innerHTML =
      new Date().getMinutes() > 9
        ? new Date().getMinutes()
        : `0${new Date().getMinutes()}`;
    seconds.innerHTML =
      new Date().getSeconds() > 9
        ? new Date().getSeconds()
        : `0${new Date().getSeconds()}`;

    //Definição do dia
    /* Contagem de meses a partir de 0*/
    day.innerHTML = `${
      new Date().getDate() > 9
        ? new Date().getDate()
        : `0${new Date().getDate()}`
    } / ${
      new Date().getMonth() + 1 > 9
        ? new Date().getMonth() + 1
        : `0${new Date().getMonth() + 1}`
    } / ${new Date().getFullYear()}`;
  }, 0);
};

clock();