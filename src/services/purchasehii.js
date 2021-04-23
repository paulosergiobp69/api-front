import { http } from './config'

export default{

    login:(User) => {
//        http.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
//        http.defaults.headers.common['Content-Type'] = "application/json"
//        http.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"
        return http.post('login',User)
    },

    listar_pho_id:(Token,id_pho) => {
        http.defaults.headers.common['Access-Control-Allow-Origin'] = "http://192.168.10.126:8080"
        http.defaults.headers.common['Cache-Control'] = "no-cache"
        http.defaults.headers.common['accept'] = "*/*"
        http.defaults.headers.common['Content-Type'] = "application/json"
        http.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"
        http.defaults.headers.common['Authorization'] = Token ? "Bearer "+ Token : ""
        return http.get('purchaseHistIncomingInvoices?PHO_Id='+id_pho)
    },

    salvar:(purchasehii) => {
        return http.post('purchaseHistIncomingInvoices',purchasehii)
    },

    atualizar:(purchasehii) => {
        return http.put('purchaseHistIncomingInvoices/'+purchasehii.id,purchasehii)
    },


    apagar:(purchasehii) => {
        return http.delete('purchaseHistIncomingInvoices/'+purchasehii)
    }

}