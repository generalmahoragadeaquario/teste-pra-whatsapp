async function loading(){

let total = 20

for(let i = 0; i <= total; i++){

let cheio = "█".repeat(i)
let vazio = "░".repeat(total-i)

let barra = `〘${cheio}${vazio}〙 ${i*5}%`

console.log(barra)

await new Promise(r=>setTimeout(r,300))

}

}

loading()