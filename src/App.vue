<template>

<div class="wrapper">
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body collapse show multi-collapse" id="occollapse">
                <h5 class="card-title">Cabeçalho da Ordem: {{purchaseho.id}}</h5>
                  
                  <form @submit.prevent="salvar">

                    <section v-if="errored">
                          <p>{{errors}}</p>
                          <div v-if="Math.random() > 0.5">
  Agora você me vê
</div>
<div v-else>
  Agora você não me vê
</div>
<!--
                          <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
                          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                          <ul>
                            <li v-for="(erro,index) of errors" :key="index">
                              Campo: <b>{{ erro }}</b> 
                            </li>
                          </ul>       
                          -->
                    </section>

                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Produto</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control " placeholder="Produto" v-model="purchaseho.HRD_T012_D009_Id">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Item O.C.</label>
                      </div>
                      <div class="col-sm-10">
                       <input type="text" class="form-control"  placeholder="Item O.C." v-model="purchaseho.HRD_T011_Id">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Quantidade</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="QTD" v-model="purchaseho.HRD_T012_Quantidade">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Qtd-Saldo</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text " class="form-control font-weight-bold" disabled placeholder="QTD-Saldo" v-model="purchaseho.HRD_Saldo">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Valor</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Valor" v-model="purchaseho.HRD_T012_Valor_Custo_Unitario">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Usuario</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Usuario" v-model="purchaseho.HRD_T011_C007_Id">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Status</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Status" v-model="purchaseho.HRD_Status">
                      </div>
                    </div>
                    <button  class="btn btn-primary">Salvar  <i class="fa fa-save"></i></button>

                </form>

              </div>
            </div>

            <div class="card card-primary card-outline bg-warning">
              <div class="card-body collapse multi-collapse" id="itemnfcollapse">
                  <form @submit.prevent="salvarphii">
                  <table class="table table-sm">
                      <tr>
                        <td colpan="0" style="text-align:left;"><h5>Referencia Id O.C:{{purchasehii.PHO_Id}}</h5></td>
                        <td colspan="5" style="text-align:center;"><h5>Nota de Compra: Id:{{purchasehii.id}}</h5></td>
                      </tr>
                  </table>

                    <section v-if="errored">
                          <!--<p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>-->
                          <p>{{errors}}</p>

<!--                          <ul>
                            <li v-for="(erro,index) of errors" :key="index">
                              Campo: <b>{{ erro }}</b> 
                            </li>
                          </ul>       
-->
                    </section>

                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Ordem de Compra</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control " placeholder="PHO_Id" v-model="purchasehii.PHO_Id">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Item de NF</label>
                      </div>
                      <div class="col-sm-10">
                       <input type="text" class="form-control"  placeholder="HRD_T014_Id" v-model="purchasehii.HRD_T014_Id">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Quantidade</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="HRD_Quantidade" v-model="purchasehii.HRD_Quantidade">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Valor</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="HRD_Valor_Custo_Unitario" v-model="purchasehii.HRD_Valor_Custo_Unitario">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10">
                        <label for="exampleInputEmail1">Status</label>
                      </div>
                      <div class="col-sm-2">
                        <input type="text"    class="form-control text-uppercase" placeholder="HRD_Flag_Cancelado" v-model="purchasehii.HRD_Flag_Cancelado" @keyup="uppercase">
                      </div>
                    </div>
                    <button  class="btn btn-primary">Salvar  <i class="fa fa-save"></i></button>

                </form>

              </div>
            </div><!-- /.card -->
          </div>
          <!-- /.col-md-6 -->
          <div class="col-lg-6" >
          <div class="wrapper">
            <div class="card bg-warning">
              <div class="card-header">
                <h5 class="m-0">Notas Fiscais da Ordem: {{purchaseho.id}}</h5>
              </div>
              <div class="col-md-10">
                <h6 class="card-title">Movimento de entrada de Itens: {{purchasehii.id}}</h6>
                <table class="table table-sm">

                  <thead>

                    <tr>
                      <th scope="col">PRODUTO</th>
                      <th scope="col">ITEM OC</th>
                      <th scope="col">QTD</th>
                      <th scope="col">VALOR</th>
                      <th scope="col">USUARIO</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">OPÇÕES</th>
                      <th scope="col"></th>
                    </tr>

                  </thead>

                  <tbody>

                    <tr v-for="purchasehii of purchasehiis.data" :key="purchasehii.id">
                        <td>{{purchaseho.HRD_T012_D009_Id}}</td>
                        <td>{{purchasehii.HRD_T014_Id}}</td>
                        <td>{{purchasehii.HRD_Quantidade}}</td>
                        <td>{{purchasehii.HRD_Valor_Custo_Unitario}}</td>
                        <td>{{purchasehii.HRD_T011_C007_Id}}</td>
                        <td>{{purchasehii.HRD_Flag_Cancelado.toUpperCase()}}</td>
                        <td>
                          <button @click="editarphii(purchasehii)" class="btn btn-success" data-toggle="collapse" data-target=".multi-collapse" 
                              aria-expanded="false" aria-controls="occollapse itemnfcollapse" ><i class="fa fa-edit"></i></button>
                        </td>
                        <td>
                          <button @click="excluirphii(purchasehii.id)" class="btn btn-danger">     <i class="fa fa-trash-o"></i></button>
                        </td>
                    </tr>

                  </tbody>
                
                </table>
                <div class="form-group">
                  <button @click="novophii()" class="btn btn-primary" data-toggle="collapse" data-target=".multi-collapse" 
                              aria-expanded="false" aria-controls="occollapse itemnfcollapse" id="btn-adicionar-phii">
                              Adicionar <i class="fa fa-check-square-o"></i></button>
                </div>   
<!--
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                -->
              </div>
            </div>
          </div>

            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">Movimento de OC Ativas </h5>
              </div>
              <div class="card-body">
                <h6 class="card-title">Ordens de Compras Ativas</h6>
                <table class="table table-sm">

                  <thead>

                    <tr>
                      <th scope="col">PRODUTO</th>
                      <th scope="col">ITEM OC</th>
                      <th class="text-center" scope="col">QTD-ORIGINAL</th>
                      <th scope="col">QTD-SALDO</th>
                      <th scope="col">VALOR</th>
                      <th scope="col">USUARIO</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">OPÇÕES</th>
                      <th scope="col"></th>
                    </tr>

                  </thead>

                  <tbody>

                      <tr v-for="purchaseho of purchasehos.data" :key="purchaseho.H100_Id">

                      <td>{{purchaseho.HRD_T012_D009_Id}}</td>
                      <td>{{purchaseho.HRD_T012_Id}}</td>
                      <td class="text-center">{{purchaseho.HRD_T012_Quantidade}}</td>
                      <td>{{purchaseho.HRD_Saldo}}</td>
                      <td>{{purchaseho.HRD_T012_Valor_Custo_Unitario}}</td>
                      <td>{{purchaseho.HRD_T011_C007_Id}}</td>
                      <td>{{purchaseho.HRD_Status}}</td>
                      <td>
                        <button @click="editar(purchaseho)" class="btn btn-success"><i class="fa fa-edit"></i></button>
                      </td>
                      <td>
                        <button @click="excluir(purchaseho.id)" class="btn btn-danger">     <i class="fa fa-trash-o"></i></button>
                      </td>
                    </tr>

                  </tbody>
                
                </table>
 

                </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    <div class="card text-center m-3">
        <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
        <div class="card-body">
            <div v-for="item in pageOfItems" :key="item.id">{{item.name}}</div>
        </div>
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="exampleItems"  v-on:change="onChangePage"></jw-pagination>
        </div>
    </div>

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
    </div>
    <!-- Default to the left -->
  </footer>
</div>
<!-- ./wrapper -->
  
</template>
<script>
import Cabecalho from './services/purchaseho'
import CabecalhoPhii from './services/purchasehii'
//import JwPagination from 'jw-vue-pagination';
//App.component('jw-pagination', JwPagination);

const exampleItems = [Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default {
  //components:{
  //  'jw-pagination': JwPagination
  //},

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
          purchasehii: {
            id:'',
            PHO_Id:'',
            HRD_T014_Id:'',
            HRD_Quantidade:'',
            HRD_Saldo:'',
            HRD_Valor_Custo_Unitario:'',
            HRD_Flag_Cancelado:'',
            HRD_Data_Lancamento:''
          },
          purchasehos: [],
          purchasehiis: [],
          exampleItems,
          pageOfItems: [],          
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
    uppercase() {
      this.code = this.code.toUpperCase();
    },

    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
    },

    listar(){
      if(!this.token){
          Cabecalho.login(this.credentials).then(resposta => {
            if(resposta.data.token){
              this.token = resposta.data.token
              Cabecalho.listar(this.token).then(resposta => {
                  this.purchasehos = resposta.data
              })
              .catch(error => {
                  this.errors = error
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

    listarphii(){
              CabecalhoPhii.listar_pho_id(this.token, this.purchaseho.id).then(resposta => {
                  this.purchasehiis = resposta.data
              })
              .catch(error => {
                  this.errors = error
                  this.errored = true
              })
    },

    salvarphii(){
      if(!this.purchasehii.id){
          CabecalhoPhii.salvar(this.purchasehii).then(resposta => {
            this.purchasehiis  = resposta.data
            alert('Salvo com sucesso!')
            this.purchasehii = {}
            this.errored = false
            this.errors = []
            this.listar()
            this.listarphii()
          })
          .catch(error => {
            console.log(error)
            this.errors = error.response.data.message
            this.errored = true
          })
      }else{
          CabecalhoPhii.atualizar(this.purchasehii).then(resposta => {
            alert('Atualizado com sucesso!')
            this.purchasehiis  = resposta.data.data
            this.purchasehii = {}
            this.errored = false
            this.errors = []
            this.listar()
            this.listarphii()
          })
          .catch(error => {
            this.errors = error.response.data.errors
            this.errored = true
          })
      }
    },

    editar(purchaseho){
      this.purchaseho = purchaseho
      CabecalhoPhii.listar_pho_id(this.token, this.purchaseho.id).then(resposta => {
        this.purchasehiis = resposta.data
      })
      .catch(error => {
        this.errors = error
        console.log(error)
        this.errored = true
      })

    },

    novophii(){
      this.purchasehii = {}
    },

    editarphii(purchasehii){
      this.purchasehii = purchasehii

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
    },

    excluirphii(purchasehii){
      if(confirm('Deseja excluir Item de Nota Fical?')){
          CabecalhoPhii.apagar(purchasehii).then(resposta => {
            this.purchasehiis  = resposta.data
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

<style lang="css">
.pagination {
}
.page-item {
}
</style>
