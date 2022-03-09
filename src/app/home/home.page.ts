import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})

export class HomePage implements AfterViewInit {

	@ViewChild("textElement") textElement: ElementRef;

	typingSpeedMilliseconds: number = 120;
	wordArray: string[] = [
		"I am mobile frontend developer.",
	];

	constructor(
	) {
	}


	ngAfterViewInit(): void {
		setTimeout(() => {
			this.typingEffect();
		}, 2000)
	}


	typingEffect(): void {
		let i: number = 0
		const word = this.wordArray[i].split("");
		const loopTyping = () => {
			if (word.length > 0) {
				this.textElement.nativeElement.innerHTML += word.shift();
			}
			setTimeout(loopTyping, this.typingSpeedMilliseconds);
		};
		loopTyping();
	}
}
