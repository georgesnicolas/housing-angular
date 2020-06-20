import { Component, Input } from '@angular/core';
import { IProperty } from '../../models/IProperty.interface';

@Component({
    selector: 'app-property-card',
    //template: `<h1>I am a card</h1>`,
    templateUrl: './property-card.component.html',
    // styles:['h1 {color:red;}']
    styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
    @Input() property: IProperty
}
