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

  ngOnChanges(changes: SimpleChanges) {}
}
