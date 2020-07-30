import { Component, OnInit } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
     this.createNewScratchCard();
  }
  createNewScratchCard() {
    throw new Error("Method not implemented.");
  }
  createNewScratch() {
    const scContainer = document.getElementById('js--sc--container')
    const sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 300,//scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: './assets/icon/scratchcard.png',
      //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
      htmlBackground: '<div class="cardamountcss"><div class="won-amnt">30</div><div class="won-text">Points<br>Won!</div></div>',
      clearZoneRadius: 40,
      nPoints: 30,
      pointSize: 4,
      callback: () => {
        console.log('Now the window will reload !')
      }
    })
    // Init
    sc.init();
  }

}

