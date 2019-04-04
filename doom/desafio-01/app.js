new Vue({
    el: '#desafio',
    data:{
        idade: 22,
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2017/07/gato02.jpg',
        nome: 'Giovanne '
    },
    methods:{
        aleatorio(){
            return  Math.floor(Math.random()*2)
        }
    }

})