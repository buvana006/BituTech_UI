import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTabsModule } from "@angular/material/tabs";
import { MatmenuComponent } from './matmenu/matmenu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatdynamicmenuComponent } from "./matdynamicmenu/matdynamicmenu.component";
import { MatdynamicsubmenuComponent } from "./matdynamicmenu/matdynamicsubmenu/matdynamicsubmenu.component";
@NgModule({
  imports: [CommonModule, NgbModule, MatTabsModule, MatMenuModule],
  declarations: [
    MatdynamicmenuComponent,
    MatdynamicsubmenuComponent
  ],
})
export class LayoutModule {}
