function quantas_vezes_repete(lista_onde_vamos_contar_quantas_vezes_a_palavra_se_repete, palavra_de_busca) {
    return lista_onde_vamos_contar_quantas_vezes_a_palavra_se_repete.filter((v) => (v === palavra_de_busca)).length;
}




function limpa_lista(lista_recebida_bruta, lista_de_itens_para_remover) {

    let forDeletion = lista_de_itens_para_remover;

    let arr = lista_recebida_bruta

    arr = arr.filter(item => !forDeletion.includes(item))

    return arr

}
  


function resumos_de_textos(texto_bruto){

    console.log('texto recebido::'+texto_bruto)

    texto_bruto = texto_bruto.toLowerCase();
    /*
    try {
    */
        var texto_original = "";
        var lista_palavras_inuteis = [".",",","?","!","de", "a", "o", "que", "e", "do", "da", "em", "um", "para", "é", "com", "não", "uma", "os", "no", "se", "na", "por", "mais", "as", "dos", "como", "mas", "foi", "ao", "ele", "das", "tem", "à", "seu", "sua", "ou", "ser", "quando", "muito", "há", "nos", "já", "está", "eu", "também", "só", "pelo", "pela", "até", "isso", "ela", "entre", "era", "depois", "sem", "mesmo", "aos", "ter", "seus", "quem", "nas", "me", "esse", "eles", "estão", "você", "tinha", "foram", "essa", "num", "nem", "suas", "meu", "às", "minha", "têm", "numa", "pelos", "elas", "havia", "seja", "qual", "será", "nós", "tenho", "lhe", "deles", "essas", "esses", "pelas", "este", "fosse", "dele", "tu", "te", "vocês", "vos", "lhes", "meus", "minhasteu", "tuateustuasnosso", "nossanossosnossasdela", "delas", "esta", "estes", "estas", "aquele", "aquela", "aqueles", "aquelas", "isto", "aquilo","estou", "está", "estamos", "estão", "estive", "esteve", "estivemos", "estiveram", "estava", "estávamos", "estavam", "estivera", "estivéramos", "esteja", "estejamos", "estejam", "estivesse", "estivéssemos", "estivessem", "estiver", "estivermos","estiver", "em", "hei", "há", "havemos", "hão", "houve", "houvemos", "houveram", "houvera", "houvéramos", "haja", "hajamos", "hajam", "houvesse", "houvéssemos", "houvessem", "houver", "houvermos", "houverem", "houverei", "houverá", "houveremos", "houverão", "houveria", "houveríamos", "houveriam", "sou", "somos", "são", "era", "éramos", "eram", "fui", "foi", "fomos", "foram", "fora", "fôramos", "seja", "sejamos", "sejam", "fosse", "fôssemos", "fossem", "for", "formos", "forem", "serei", "será", "seremos", "serão", "seriaseríamos", "seriam", "tenho", "tem", "temos", "tém", "tinha", "tínhamos", "tinham", "tive", "tevetivemos", "tiveram", "tivera", "tivéramos", "tenhatenhamos", "tenham", "tivessetivéssemos", "tivessem", "tivertivermos", "tiverem", "terei", "terá", "teremos", "terão", "teria", "teríamos", "teriam"];

        texto_bruto;
        if(texto_bruto != "" && texto_bruto != null && texto_bruto != undefined){
            //iniciar resumo do texto
            console.log("iniciando limpeza do texto bruto")

            //salvando o texto original
            texto_original = texto_bruto;
            console.log("salvando texto original")
            //tirar as palavras inuteis
var lista_1_tratamento = texto_bruto.split(" ");
console.log("primeira lista de palavras ")
console.log(lista_1_tratamento)

var lista_2_tratamento = limpa_lista(lista_1_tratamento,lista_palavras_inuteis);

console.log('lista_1_tratamento apos limpeza')

console.log(lista_2_tratamento);

//nessa vou guardar so os numeros
var lista_de_quantas_vezes_repetiu = []

//nessa vou guadar os numero as palavras
var lista_de_quantas_vezes_repetiu_com_nome = []

//aqui vemos quantas vezes a palavra se repete na lista
lista_2_tratamento.forEach((palavra_atual) => {
    var palavra_Se_repediu = quantas_vezes_repete(lista_2_tratamento,palavra_atual);
    console.log(`"${palavra_atual}" se repete "${palavra_Se_repediu}" `)
    lista_de_quantas_vezes_repetiu.push(parseInt(palavra_Se_repediu))
    lista_de_quantas_vezes_repetiu_com_nome.push(`${palavra_atual}###${palavra_Se_repediu}`)
});


var o_maior_numero_de_repeticoes = Math.max.apply(null, lista_de_quantas_vezes_repetiu);

console.log("o maior numero de vezes que uma palavra repete é")
console.log(o_maior_numero_de_repeticoes)


console.log('lista de frases e pontos')
console.log(lista_de_quantas_vezes_repetiu_com_nome)

var a_palavra_mais_importante = "";
//apos definirmos os pontos por palavras vamos pegar o texto orignal mais uma vez e agora quebras ele por frases

var lista_de_frases = texto_original.split(".");
console.log('lista de frases')
console.log(lista_de_frases)

var lista_De_pontuacao_por_frase = [];

//execute em cada frase
lista_de_frases.forEach((frase_atual)=>{
    //em cada frase vamos ver quantas vezes tem as palavras e dar pontos para as farses

    var o_maior_ponto = 0;
    
var pontuacao_atual_da_frase = 0;

    //para cada itens na lista de frases e pontos execute
    lista_de_quantas_vezes_repetiu_com_nome.forEach((palavra_bruta_da_lista)=>{




        var lista_bruta = palavra_bruta_da_lista.split('###');

        var palavra__ = lista_bruta[0]

        var pontos_da_palavra = parseFloat(parseInt(lista_bruta[1]) / parseInt(o_maior_numero_de_repeticoes))  

        if(pontos_da_palavra > o_maior_ponto){
            o_maior_ponto = pontos_da_palavra
            a_palavra_mais_importante = palavra__;
        }

        //se a frase tiver a palavra atual
        if(frase_atual.includes(palavra__) == true){

           pontuacao_atual_da_frase = parseFloat(parseFloat(pontuacao_atual_da_frase) + parseFloat(pontos_da_palavra)); 
           
           console.log(`a frase "${frase_atual}" tem a palavra "${palavra__}" então a frase contem "${pontuacao_atual_da_frase}" pontos `)
        }

       

    })




 //console.log('pontuacao atual da lista de frases')
 lista_De_pontuacao_por_frase.push(pontuacao_atual_da_frase)

    
    
})
console.log('lista de pontos')
console.log(lista_De_pontuacao_por_frase)

var contador = 0; 
lista_de_frases.forEach((frase_atual)=>{

    console.log(`a frase "${contador}" tem ${lista_De_pontuacao_por_frase[contador]} pontos`)

    contador = contador + 1;
})



function retornaIndiceMaiorValor(lista_recebida) {
    var lista_recebida
    let maior = lista_recebida[0];
    let indice = 0;
    for (let i = 1; i < lista_recebida.length; i++) {
        if (lista_recebida[i] > maior) {
            maior = lista_recebida[i];
            indice = i;
        }
    }
    return indice;
}


var resumo = ""


var posicao_da_frase_mais_importante = parseInt(retornaIndiceMaiorValor(lista_De_pontuacao_por_frase)); 

var a_frase_mais_importante = lista_de_frases[posicao_da_frase_mais_importante];
var pontos_da_frase_mais_importante = lista_De_pontuacao_por_frase[posicao_da_frase_mais_importante]

resumo = resumo + a_frase_mais_importante;

console.log(`a frase mais importante "${a_frase_mais_importante}" com "${pontos_da_frase_mais_importante}" pontos`)

//removendo essa pontuação para pegar a proxima frase
delete lista_De_pontuacao_por_frase[posicao_da_frase_mais_importante]


var posicao_da_frase_mais_importante = parseInt(retornaIndiceMaiorValor(lista_De_pontuacao_por_frase)); 

var a_frase_mais_importante = lista_de_frases[posicao_da_frase_mais_importante];
var pontos_da_frase_mais_importante = lista_De_pontuacao_por_frase[posicao_da_frase_mais_importante]

console.log(`a  SEGUNDA frase mais importante "${a_frase_mais_importante}" com "${pontos_da_frase_mais_importante}" pontos`)

resumo = resumo + a_frase_mais_importante;


//removendo essa pontuação para pegar a proxima frase
delete lista_De_pontuacao_por_frase[posicao_da_frase_mais_importante]


var posicao_da_frase_mais_importante = parseInt(retornaIndiceMaiorValor(lista_De_pontuacao_por_frase)); 

var a_frase_mais_importante = lista_de_frases[posicao_da_frase_mais_importante];
var pontos_da_frase_mais_importante = lista_De_pontuacao_por_frase[posicao_da_frase_mais_importante]

console.log(`a  terceira frase mais importante "${a_frase_mais_importante}" com "${pontos_da_frase_mais_importante}" pontos`)

resumo = resumo + a_frase_mais_importante;


console.log('\r\n\r\n\r\n\r\n==================================================')
var titulo_do_resumo = 'resumo a palavra principal é "'+a_palavra_mais_importante+'" :::: '
console.log(titulo_do_resumo)
console.log('==================================================')
console.log(resumo)

return titulo_do_resumo+resumo


        }else{
            return "texto invalido"
        }
  /*
    } catch (error) {
        console.log('erro ao resumir o texto:::'+error)
    }
  */
}


var poema = "O poeta é um fingidor. Finge tão completamente Que chega a fingir que é dor A dor que deveras sente. E os que lêem o que escreve, Na dor lida sentem bem, Não as duas que ele teve, Mas só a que eles não têm. E assim nas calhas da roda Gira, a entreter a razão, Esse comboio de corda Que se chama o coração.";



resumos_de_textos(poema)
