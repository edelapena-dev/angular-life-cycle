import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'products-product',
    templateUrl: './product.component.html',
    styles: ``
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    public isProductVisible: boolean = false;
    public changePrice: number = 10;

    constructor() {
        console.log("Constructor");
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    ngDoCheck(): void {
        console.log("ngDoCheck");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        console.log({ changes });
    }

    ngOnInit(): void {
        console.log("ngOnInit");
    }

    incresePrice() {
        this.changePrice++;
    }

}
