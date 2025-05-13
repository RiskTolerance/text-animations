import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import './style.css'
gsap.registerPlugin(SplitText);


window.Alpine = Alpine;
Alpine.start();


SplitText.create(".split", {
  type: "words,lines",
  linesClass: "line",
  autoSplit: true,
  mask: "words",
  onSplit: (self) => {
    gsap.from(self.words, {
      duration: 0.5,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });
  }
});

