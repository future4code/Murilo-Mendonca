// EXERCICIO 3

// A)

// type postUsuarios = {
//     autor: string,
//     texto: string
// }

// const posts: postUsuarios[] = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]

// B)
// As entradas são: posts e autorInformado, a saida é post.autor
// function buscarPostsPorAutor(posts: postUsuarios[], autorInformado: string) {
//     return posts.filter(
//         (post) => {
//             return post.autor === autorInformado
//         }
//     )
// }