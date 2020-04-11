import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';

import {IonicImageLoaderComponent} from './ionic-image-loader.component';
import {ImageLoaderConfigService} from './services/image-loader-config.service';
import {ImageLoaderService} from './services/image-loader.service';


@NgModule({
    imports: [
        IonicModule,
        HttpClientModule,
        CommonModule
    ],
    declarations: [
        IonicImageLoaderComponent
    ],
    exports: [
        IonicImageLoaderComponent
    ],
    providers: [
        File,
        ImageLoaderConfigService,
        ImageLoaderService
    ]
})
export class IonicImageLoaderModule {
}
