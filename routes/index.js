const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExtension = (filename) => {
  return filename.split(".").shift();
};

const routerModules = {};
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    // Cargamos el módulo de la ruta en memoria
    const routerModule = require(`./${name}`);
    // Agregamos el módulo de la ruta a un objeto, usando como clave el nombre de la ruta
    routerModules[`/${name}`] = routerModule;
  }

  // Iteramos sobre las claves del objeto que contiene los módulos de las rutas
  Object.keys(routerModules).forEach((route) => {
    // Asignamos cada módulo de ruta a su respectiva ruta en el router
    router.use(route, routerModules[route]);
  });
});

module.exports = router;
