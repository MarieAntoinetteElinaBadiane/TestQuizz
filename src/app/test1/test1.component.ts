import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  reponse1: any;
  reponse2: any;
  reponse3: any;
  annee: any;
  resultat: any;
  resultat1: any;
  quest2 = false;
  quest3 = false;
  constructor() { }

  ngOnInit() {
  }
    part1 = new FormGroup({
      question1: new FormControl(''),
    });
    part2 = new FormGroup({
  question2: new FormControl(''),
    });


    part3 = new FormGroup({
      annee: new FormControl(''),
    });

  good1(donner){
    //console.log(donner);
    this.reponse1 = donner.question1
    this.resultat = ((this.reponse1 * 2 ) + 5) * 50;
    console.log(this.resultat)
    this.quest2 = true;
  }
  oui1() {
    this.quest3 = true;
    this.resultat = this.resultat + 1770;
    console.log(this.resultat)
  }
  non1() {
    this.quest3 = true;
    this.resultat = this.resultat + 1769;
    console.log(this.resultat)
  }

  good2(donner) {
    this.reponse2 = donner.question2
    console.log(this.annee)
    this.resultat1 = this.resultat - donner.annee;
    console.log(this.resultat1)
    Swal.fire(
          'Bravo!',
          'Le chiffre que vous avez choisi et votre age sont '  + this.resultat1,
          'success'
         );
    this.quest2 = true;
  }

}
