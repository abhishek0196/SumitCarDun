import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { error } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  loading;

  constructor(private listService : ListService,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.listService.listAsync().subscribe((response:any)=>{
      console.log(response);
      this.loading.dismiss();
    })
  }
  ionViewWillEnter(){
    var object= {
      manufacturer_name : "TATA"
    }
   this.listService.postAsync(object).subscribe((reponse)=>{
     console.log(reponse)
   },error=>{
     console.log(error.error)
   })
  }
  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: "lines",
      
      message: 'Please wait...',
      translucent: true,
      
    });
    return await this.loading.present();
  }
}


