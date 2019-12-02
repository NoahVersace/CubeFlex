import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";
//import { Md5 } from "@angular/ts-md5/dist/md5";

@Component({
	selector: "app-landing-page",
	templateUrl: "./landing-page.component.html",
	styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
	constructor(gameService: GameService) {
		gameService.reset();
	}

	ngOnInit() {}
}
