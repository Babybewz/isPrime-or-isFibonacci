import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  number: number = 0;
  result: boolean = false;
  type: any;

  checkValue() {
    if (this.type === 'isPrime') {
      this.result = this.checkisPrime();
    } else if (this.type === 'isFibonacci') {
      this.result = this.checkisFibonacci();
    }
  }

  checkisPrime(): boolean {
    if (this.number === 2) {
      return true;
    } else if (this.number > 1) {
      for (var i = 2; i < this.number; i++) {
        if (this.number % i !== 0) {
          return true;
        } else if (this.number === i * i) {
          return false;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
    return false;
  }

  checkisFibonacci(): boolean {
    if (
      this.isSquare(5 * (this.number * this.number) - 4) ||
      this.isSquare(5 * (this.number * this.number) + 4)
    ) {
      return true;
    } else {
      return false;
    }
  }

  isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
}
