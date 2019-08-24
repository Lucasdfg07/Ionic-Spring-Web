import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../models/fornecedor';
import {FornecedoresService} from "../service/fornecedores.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-edit-fornecedor',
  templateUrl: './edit-fornecedor.page.html',
  styleUrls: ['./edit-fornecedor.page.scss'],
})
export class EditFornecedorPage implements OnInit {
  fornecedor: Fornecedor;


  constructor(private actRoute: ActivatedRoute, private router: Router, private api: FornecedoresService, public loadingController: LoadingController) {
    this.fornecedor = new Fornecedor();
  }

  async getById(id:number) {
  const loading = await this.loadingController.create({
   message: 'Loading'
  });

  await loading.present();
  
  await this.api.getFornecedorById(id)
  
  .subscribe(res => {
    console.log(res);
    this.fornecedor = res;
    loading.dismiss();
  }, err => {
    console.log(err);
    loading.dismiss();
  });
  }
  
  async save(){
    await this.api.postFornecedor(this.fornecedor)
    
    .subscribe(res => {
      this.router.navigateByUrl('/fornecedores');
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      let id:number = params['id'];
      console.log('Valor do parametro id: '+id);
      
      if (id!=0 && id!=null) {
        this.getById(id);
      } else {
        this.fornecedor.id = 0;
        this.fornecedor.nome = "Ninguem";
        this.fornecedor.avaliacao = 0;
      }
      console.log('Valor de fornecedor id: '+this.fornecedor.id);
    });
  }

//   ionViewWillEnter(){
//     this.actRoute.params.subscribe(params => {
//     let id:number = params['id'];
//     console.log('Valor do parametro id: ' + id);
    
//     if (id!=0 && id!=null) {
//       this.fornecedor.id = id;
//       this.fornecedor.nome = "Alguem";
//       this.fornecedor.avaliacao = 8;
//     } else {
//       this.fornecedor.id = 0;
//       this.fornecedor.nome = "Novo";
//       this.fornecedor.avaliacao = 0;
//     }
//     console.log('Valor de fornecedor id: '+this.fornecedor.id);
//     });
//  }
}
