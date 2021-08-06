
import { Subject } from 'rxjs';
import { OnDestroy, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseComponent implements OnDestroy {
    ngUnsubscribe = new Subject<void>();

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public get environment() {
        return environment;
    }
}
