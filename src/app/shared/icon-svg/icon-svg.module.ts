import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../models/icons.enum';

const ICONS = Object.values(Icons);

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule],
})
export class IconSvgModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    ICONS.forEach((icon) => {
      iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`../../../assets/svg/icons/${icon}.svg`));
    });
  }
}
