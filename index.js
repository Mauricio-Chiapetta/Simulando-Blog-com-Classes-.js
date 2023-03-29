const Author = require("./author");

const mauricio = new Author("Mauricio Chiapetta")
const post = mauricio.WritePost("Título do post", "texto.......")
post.addComment("mauricio013", "excelente!")

console.log(mauricio)
console.log(post)