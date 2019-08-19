import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditFornecedorPage } from '../edit-fornecedor/edit-fornecedor.page';
import { Fornecedor } from '../models/fornecedor';
import {FornecedoresService} from "../service/fornecedores.service"
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})

export class FornecedoresPage implements OnInit {
  fornecedores: any;
  fornecedor: Fornecedor;

  constructor(private router: Router,  public api: FornecedoresService, public loadingController: LoadingController) {
    this.getFornecedores();
  }

  async getFornecedores() {
    //this.fornecedores = [{"id":6,"nome":"Ricardo","avaliacao":109},{"id":13,"nome":"Fernanda","avaliacao":8}];
    const loading = await this.loadingController.create({
      message: 'Loading'
      });

      await loading.present();
      
      await this.api.getFornecedor()
      
      .subscribe(res => {
        console.log(res);
        this.fornecedores = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
  }
  
  addFornecedor(){
    this.router.navigate(['/edit-fornecedor', 0]);
  }

  editFornecedor(id: number) {
    console.log('Chamando: '+id);
    this.router.navigate(['/edit-fornecedor', id]);
  }

  async removeFornecedor(id: number){
    const loading = await this.loadingController.create({
      message: 'Apagando'
    });
    
    await loading.present();
    
    await this.api.deleteFornecedor(id)
    
    .subscribe(res => {
      console.log(res);
      this.getFornecedores();
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

}
