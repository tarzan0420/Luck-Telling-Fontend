import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordKeepComplianceComponent } from './page/record-keeping-compliance.component';

const routes: Routes = [
  {
    path:'',
    component:RecordKeepComplianceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordKeepComplianceRoutingModule { }
