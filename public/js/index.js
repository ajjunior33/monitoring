function infor(route, classe) {
  const local = document.querySelector(`.${classe}`);
  const URL_TO_FETCH = `http://servicos.nwt.net.br:3000/mk/${route}`;
  fetch(URL_TO_FETCH, {
    method: "get", // opcional
  })
    .then(function (response) {
      response.json().then(function (result) {
        local.innerHTML = result.data;
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

setInterval(function () {
  infor("instalacoes", "pedidos");
  infor("suportes", "suportes");
  infor("cancelamento", "cancelamentos");
}, 3000);
