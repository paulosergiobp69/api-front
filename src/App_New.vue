<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Ordem de Compra -  id:{{purchaseho.id}}</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">

         <section v-if="errored">
              <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
<!--              
              <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
              <ul>
                <li v-for="(erro,index) of errors" :key="index">
                  Campo: <b>{{ erro }}</b> 
                </li>
              </ul>       
              -->
          </section>

          <div class="form-group">
            <label for="exampleInputEmail1">Produto</label>
            <div class="col-sm-10">
              <input type="text" class="form-control " placeholder="Produto" v-model="purchaseho.HRD_T012_D009_Id">
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Item O.C.</label>
            <input type="text" class="form-control"  placeholder="Item O.C." v-model="purchaseho.HRD_T011_Id">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Quantidade</label>
            <input type="text" class="form-control" placeholder="QTD" v-model="purchaseho.HRD_T012_Quantidade">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Valor</label>
            <input type="text" class="form-control" placeholder="Valor" v-model="purchaseho.HRD_T012_Valor_Custo_Unitario">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Usuario</label>
            <input type="text" class="form-control" placeholder="Usuario" v-model="purchaseho.HRD_T011_C007_Id">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Status</label>
            <input type="text" class="form-control" placeholder="Status" v-model="purchaseho.HRD_Status">
          </div>
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>PRODUTO</th>
            <th>ITEM OC</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>USUARIO</th>
            <th>STATUS</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

            <tr v-for="purchaseho of purchasehos.data" :key="purchaseho.H100_Id">

            <td>{{purchaseho.HRD_T012_D009_Id}}</td>
            <td>{{purchaseho.HRD_T012_Id}}</td>
            <td>{{purchaseho.HRD_T012_Quantidade}}</td>
            <td>{{purchaseho.HRD_T012_Valor_Custo_Unitario}}</td>
            <td>{{purchaseho.HRD_T011_C007_Id}}</td>
            <td>{{purchaseho.HRD_Status}}</td>
            <td>
              <button @click="editar(purchaseho)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="excluir(purchaseho.id)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>
<script>
import Cabecalho from './services/purchaseho'
export default {

  data(){
      return {
          errors: [],
          errored: false,
          loading: true,
          message_error: 'Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.',
          purchaseho: {
            id:'',
            HRD_T011_Id:'',
            HRD_T012_Id:'',
            H100_T012_Id:'',
            HRD_T012_D009_Id:'',
            HRD_T011_C007_Id:'',
            HRD_T011_C004_Id:'',
            HRD_T012_Quantidade:'',
            HRD_Quantidade_Pac:'',
            HRD_Saldo:'',
            HRD_T012_Valor_Custo_Unitario:'',
            HRD_Status:'',
            HRD_Nac_Imp:'',
            HRD_Data_Lancamento:''
          },
          purchasehos: [],
          credentials:{
            email:'paulosergiobp@gmail.com',
            password: '280772',
          },
          token: ''          
      }
  },
  mounted(){
    this.listar()
  },

  methods:{

    listar(){
      if(!this.token){
          Cabecalho.login(this.credentials).then(resposta => {
            if(resposta.data.token){
              this.token = resposta.data.token
              Cabecalho.listar(this.token).then(resposta => {
                  this.purchasehos = resposta.data
              })
              .catch(error => {
                  //this.errors = error
                  console.log(error)
                  this.errored = true
              })

            }
          })
          .catch(error => {
              this.errors = error.response.data.errors
              this.errored = true
          })
      }else{
              Cabecalho.listar(this.token).then(resposta => {
                  this.purchasehos = resposta.data
              })
              .catch(error => {
                  this.errors = error
                  this.errored = true
              })

      }
    },

    salvar(){
      if(!this.purchaseho.id){
          Cabecalho.salvar(this.purchaseho).then(resposta => {
            this.purchasehos  = resposta.data
            alert('Salvo com sucesso!')
            this.purchaseho = {}
            this.errored = false
            this.errors = []
            this.listar()
          })
          .catch(error => {
            this.errors = error.response.data.errors
            this.errored = true
          })
      }else{
          Cabecalho.atualizar(this.purchaseho).then(resposta => {
            alert('Atualizado com sucesso!')
            this.purchasehos  = resposta.data.data
            this.purchaseho = {}
            this.errored = false
            this.errors = []
            this.listar()
          })
          .catch(error => {
            this.errors = error.response.data.errors
            this.errored = true
          })
      }

    },

    editar(purchaseho){
      this.purchaseho = purchaseho
    },

    excluir(purchaseho){
      if(confirm('Deseja excluir a O.C.?')){
          Cabecalho.apagar(purchaseho).then(resposta => {
            this.purchasehos  = resposta.data
            this.listar(),
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }
    }


  }
  


}


</script>

<style>

</style>
