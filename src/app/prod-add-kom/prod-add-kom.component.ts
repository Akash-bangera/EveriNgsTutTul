import { Component, Input, OnInit } from '@angular/core';
import { PrdSvc } from '../prd-svc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'prod-add-kom',
  templateUrl: './prod-add-kom.component.html',
  styleUrls: ['./prod-add-kom.component.scss']
})
export class ProdAddKomComponent implements OnInit {

  @Input() PopNgModal:any

  AddPrdVar={
     "TtlVak":"",
      "DtlVak":"",
      "AmtVak":0,
      "ImgVak":"assets/boat.webp"
  }
  constructor(public PrdSvcVar:PrdSvc) { }
  
  AddFnc(){
    this.PrdSvcVar.PrdAryVar.push(this.AddPrdVar)
    this.PopNgModal.close()
    // this.MtyPrdFomFnc()
  }

  // MtyPrdFomFnc(){
  //   this.AddPrdVar={
  //     "TtlVak":"",
  //     "DtlVak":"",
  //     "AmtVak":0,
  //   }
  // }
  ngOnInit(): void {
  }

}
