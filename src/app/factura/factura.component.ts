import { ModeloFactura } from './../models/model.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SqlFactura } from '../sql/sq.factura.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Http, ResponseContentType } from '../../../node_modules/@angular/http';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private sqlFactura: SqlFactura, private sanitizer: DomSanitizer, private http: Http) { }

  img: any;
  image: SafeResourceUrl;

  imageUrl;

  panelOpenState = false;
  ngOnInit() {
    this.sqlFactura.todasFacturas().pipe(
      map(
        (data: ModeloFactura) => {
          this.imagen(data)
          //this.createImageFromBlob(new Blob([data.imagen], { type: "image/jpeg" }))
          const blob = new Blob([data.imagen]);
          const urlCreator = window.URL;
          this.createImageFromBlob2(blob, urlCreator.createObjectURL(blob))
        }
      )
    )
  }

  imagen(i: ModeloFactura) {
    const blob = new Blob([i.imagen]);
    const urlCreator = window.URL;
    this.sanitize(urlCreator.createObjectURL(blob));
  }

  sanitize(url: string) {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  imageData: any;

  imageToShow: any;

  createImageFromBlob(image: Blob) {

    let urlCreator = window.URL;
    this.imageData = this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(image));

    console.log(this.imageData)

    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  createImageFromBlob2(blob: Blob, imageUrl: string) {
    this.http.get(imageUrl, {
      responseType: ResponseContentType.Blob
    })
      .toPromise()
      .then((res: any) => {
        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });

        let urlCreator = window.URL;
        this.imageData = this.sanitizer.bypassSecurityTrustUrl(
          urlCreator.createObjectURL(blob));
      });
  }

}
