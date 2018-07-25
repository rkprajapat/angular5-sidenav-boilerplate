import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { SpinnerService } from 'app/services/spinner.service';

@Component({
  selector: 'app-sidenav-responsive',
  templateUrl: './sidenav-responsive.component.html',
  styleUrls: ['./sidenav-responsive.component.scss']
})
export class SidenavResponsiveComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  showSpinner: boolean;

  fillerNav = [
    { name: 'Instances', path: 'instance' },
    { name: 'Admin', path: 'admin' },
    { name: 'Help', path: 'help' }
  ];

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private spinnerService: SpinnerService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.spinnerService.status.subscribe((val: boolean) => {
      this.showSpinner = val;
      this.changeDetectorRef.detectChanges();
    });
  }

}
