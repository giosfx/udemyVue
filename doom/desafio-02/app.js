new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{  
         buttonAlert(){
             alert('Alerta uai')
         },
         storeData(event){
             this.valor = event.target.value
         }  
    }
})