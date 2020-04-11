import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {IonicImageLoaderComponent} from './ionic-image-loader.component';

describe('IonicImageLoaderComponent', () => {
    let component: IonicImageLoaderComponent;
    let fixture: ComponentFixture<IonicImageLoaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonicImageLoaderComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(IonicImageLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
