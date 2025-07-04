// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JavaScript.

/*
Nesta aula, vamos aprender sobre o modo estrito do JavaScript, 
conhecido como strict mode, que ao ser ativado, 
torna os erros que eram silenciosos em exceções. 
Vamos ver como o modo estrito pode ajudar a identificar erros, 
como a questão de variáveis não definidas e parâmetros duplicados em funções. 
O uso do strict mode é recomendado para evitar problemas comuns de flexibilidade do JavaScript, 
garantindo um código mais robusto e correto.
*/

// function showMessage() {
//   personName = "Rodrigo Gonçalves"; // o js usa o hoisting e eleva a váriavel pro escopo global. por isso ela fica visivel no document no console.

//   console.log("Olá", personName);
// }

// showMessage();

"use strict";

function showMessage() {
  //"use strict"; // se eu não usar o "let" para declarar a váriavel ele vai declarar erro. Se eu colocar ele no escopo global, ele vai aplicar para tudo.

  let personName = "Jonas Rocha";

  console.log("Olá", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();

// Tenta mudar uma propriedade somente leitura.
//student.point = 10;  assim, sem os parenteses () daria erro por causa do "use sctrict"

console.log(student.point);

// Tenta deletar uma propriedade de um objeto que não deletar.
// delete window.document;

// Quando passamos parâmetros duplicados.
function sum(a, a, c) {
  return a + a + c;
}
