import { Component, OnInit } from '@angular/core';
import { Voyage} from './voyage.model';
import { VoyageService } from '../voyage.service';



declare const changeColorToWarning: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
 /*  voyages : Voyage[] = [new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',5,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',22,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',10,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',6,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',15,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',4,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',16,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',17,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',3,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',0,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',55,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',20,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',11,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',15,'15000fr'),
                         new Voyage('Etrab', 'Lomé','Kara','09/10/2020','9h 20min',2,'15000fr'),
                        ]; */
                        //Initialiser le voyage par la liste Voyage

  constructor(private voyageServ: VoyageService) {
    this.getAllVoyage();
   }
   pageActual:number = 1
   listVoyages: Voyage[];
  ngOnInit() {
    this.getAllVoyage();
  }

  getAllVoyage():void{
    this.voyageServ.getAllVoyageFromHolding()
    .subscribe((voyagesData) => {
      this.listVoyages = voyagesData;
    }, (error) => {
      console.log(error);
    });

  }

}
