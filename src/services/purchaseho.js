import { http } from './config'
//import axios from 'axios'

export default{

    login:(User) => {
//        http.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
//        http.defaults.headers.common['Content-Type'] = "application/json"
//        http.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"
        return http.post('login',User)
    },

    listar:(Token) => {
        http.defaults.headers.common['Access-Control-Allow-Origin'] = "http://192.168.10.126:8080"
        http.defaults.headers.common['Cache-Control'] = "no-cache"
        http.defaults.headers.common['accept'] = "*/*"
        http.defaults.headers.common['Content-Type'] = "application/json"
        http.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"
        http.defaults.headers.common['Authorization'] = Token ? "Bearer "+ Token : ""
        return http.get('purchaseHistOrders?limit=15&page=1&order=name&direction=ASC&fields=id%2C%20name%2C%20route%2C%20old_id&search=Busca')
    },

    listarphii:(Token,id_pho) => {
        http.defaults.headers.common['Access-Control-Allow-Origin'] = "http://192.168.10.126:8080"
        http.defaults.headers.common['Cache-Control'] = "no-cache"
        http.defaults.headers.common['accept'] = "*/*"
        http.defaults.headers.common['Content-Type'] = "application/json"
        http.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"
        http.defaults.headers.common['Authorization'] = Token ? "Bearer "+ Token : ""
        return http.get('purchaseHistIncomingInvoices?PHO_Id='+id_pho)
    },


    salvar:(purchasepho) => {
        return http.post('purchaseHistOrders',purchasepho)
    },

    atualizar:(purchasepho) => {
        return http.put('purchaseHistOrders/'+purchasepho.id,purchasepho)
    },


    apagar:(purchasepho) => {
        return http.delete('purchaseHistOrders/'+purchasepho)
    }

}