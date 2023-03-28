
function ex1(){
let nome = 'Luanna';
//alert(nome);

//document.write(nome) ;
console.log(nome);

}

function ex2(){
let  nome = 'Luanna';
let sobrenome = 'Delmuti';

console.log(nome+' '+sobrenome);
}

function ex3(){

let nome = 'Luanna';
let sobrenome = 'Delmuti';
let idade = '25';
let email = 'luanna.delmuti@hotmail.com';



console.log('Nome: '+nome);
console.log('SObrenome: '+sobrenome);
console.log('idade: '+idade);
console.log('email: '+ email);
}


function ex4(){

    let nome = 'Luanna';
    let sobrenome = 'Delmuti';
    let idade = '25';
    let email = 'luanna.delmuti@hotmail.com';
    
    
    
    console.log('Nome: '+nome+ '('+nome.length+')');
    console.log('SObrenome: '+sobrenome +'('+sobrenome.length+')');
    console.log('idade: '+idade);
    console.log('email: '+ email);

}

function ex5(){

    let nome = 'Luanna';
    let sobrenome = 'Delmuti';
    let idade = '25';
    let email = 'luanna.delmuti@hotmail.com';
    
    
    
    console.log('Nome: '+nome.toLocaleUpperCase() + '('+nome.length+')');
    console.log('SObrenome: '+sobrenome.toLocaleLowerCase() +'('+sobrenome.length+')');
    console.log('idade: '+idade);
    console.log('email: '+ email);

}



function ex6(){

let texto = 'Lorem <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, at doloribus vel neque cum aspernatur ipsum fugiat totam! Quae incidunt maiores eum a corrupti, suscipit excepturi ab ut dolore quis';
console.log('')



}


function ex7(){

var n1 =  10;
var n2 = 4;

 console.log('Soma: '+(n1+n2));
 console.log('Subtraçao: '+(n1-n2));
 console.log('Multiplicaçao: '+(n1*n2));
 console.log('Divisao: '+(n1/n2));
 console.log('Resto: '+(n1%n2));
 
 console.log('Exponencial: '+ Math.pow(n1,n2));
 console.log('Raiz quadrada (10): '+ Math.sqrt(n1));

 console.log('Absoluto +10: '+ Math.abs(10));
 console.log('Absoluto -10: '+ Math.abs(10));

}

function ex8(){

    console.log(Math.random());

}

function ex9(){

    console.log(Math.ceil(Math.random()*10));
    console.log(Math.floor(Math.random()*10)+1);

}

function ex10(){
    let n1= 10.4;
    let n2= 11.7;

    console.log('Valores originais:\t'+ n1+'\t\t'+n2);
    console.log('Valores arrendondados:\t'+ Math.round(n1)+'\t\t'+Math.round(n2));
    console.log('Valores arrendondados p/ cima:\t'+ Math.ceil(n1)+'\t\t'+Math.ceil(n2));
    console.log('Valores arrendondados p/ baixo:\t'+ Math.floor(n1)+'\t\t'+Math.floor(n2));


}
 function ex11(){
    let temp= 35
    if(temp> 37.5){
        console.log('Tem febre');
    }
    else{

       console.log('Saudavel') 
    }

 }

 function ex12(){
    let temp= 30
    if(temp> 37.5){
        console.log('Tem febre');
    }
    else if (temp<35){
        console.log('Temperatura muito baixa')
    }
    else{

       console.log('Saudavel') 
    }

 }

ex12();
