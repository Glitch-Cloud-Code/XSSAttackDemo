import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { cache } from './cookieFactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  comments: string[] = [];

  @ViewChild('thisIsMadness') thisIsMadness: ElementRef;

  onSubmit(comment: string) {
    this.comments.push(comment);
    this.thisIsMadness.nativeElement.innerHTML = comment;
  }

  @cache
  expensiveComputation(blockTime: number): number {
    // expensive computation here
    console.time('mySlowFunction');
    const now = performance.now();
    while (performance.now() - now < blockTime) {}
    console.timeEnd('mySlowFunction');
    return 42;
  }

  ngOnInit() {
    console.log(this.expensiveComputation(1000)); // will compute the result
    console.log(this.expensiveComputation(1000)); // will return the cached result
  }
}
