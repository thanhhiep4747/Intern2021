import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnChanges {
  @Input() parentData: any;
  constructor() {}

  ngOnInit() {}

  changeFromChild() {
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.parentData, 'HAHA');
  }
}
