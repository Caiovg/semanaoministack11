const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json())
app.use(routes);
app.use(cors());
/**
 * rota/recurso
 */
/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * Post: Criar uma informação no back-end
 * PUT: alterar uma informação mo back-end
 * DELETE: Deletar uma informação no back-end
 * */

 /**
  * Tipos de parãmetros:
  * 
  * Query Params: parametros nomeados enviados na rota após "?"(filtros, paginação)
  * Route Params: Parametros utilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
  */
 /**
  * sqlite
  * com query builder : table('users').select('*').where() acessando o banco com a linguagem javascript
  */


app.listen(3333);
