import { Component, Input, OnInit } from '@angular/core';
import { ImageObject } from '../models/implementors/imageObject';
import { IImageObject } from '../models/interfaces/IimageObject';

@Component({
  selector: 'app-image-animation',
  templateUrl: './image-animation.component.html',
  styleUrls: ['./image-animation.component.css']
})
export class ImageAnimationComponent implements OnInit {

  @Input() img: IImageObject = new ImageObject();
  @Input() currentImg: IImageObject = new ImageObject();
  @Input() side: string = "";

  orientation: string = "";

  isHidden = () => {
    if (this.currentImg.id == this.img.id) {
      return false;
    } else {
      return true;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    if (this.side == "enemy") {
      this.orientation = "mirror";
    }
  }

}
