/* eslint-disable no-sequences */
/* eslint-disable default-case */
import PlayDecisionEngine from './PlayDecisionEngine';
import { HIT, STAND, DOUBLEHIT, DOUBLESTAND, SURRENDER, SPLIT, DONTKNOW, BLACKJACK } from './Hints';

export default class Hint {

	static getMultiCardHint(dealerHand, playerHand) {
		const playerBestValue = PlayDecisionEngine.getBestHandValue(playerHand);
		const dealerLowCard = dealerHand[1].lowValue;

		switch (playerBestValue) {
			case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
				return HIT;
			case 9:
				switch (dealerLowCard) {
					case 2:
						return HIT;
					case 3: case 4: case 5: case 6:
						return DOUBLEHIT;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 10:
				switch (dealerLowCard) {
					case 2, 4, 5, 6, 7, 8, 9:
						return playerHand.length === 2 ? DOUBLEHIT : HIT;
					case 10:
					case 1:
						return HIT;
				}
				break;
			case 11:
				switch (dealerLowCard) {
					case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
						return playerHand.length === 2 ? DOUBLEHIT : HIT;
					case 1:
						return HIT;
				}
				break;
			case 12:
				switch (dealerLowCard) {
					case 2: case 3:
						return HIT;
					case 4: case 5: case 6:
						return STAND;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 13: case 14:
				switch (dealerLowCard) {
					case 2: case 3: case 4: case 5: case 6:
						return STAND;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 15:
				switch (dealerLowCard) {
					case 2: case 3: case 4: case 5: case 6:
						return STAND;
					case 7: case 8: case 9:
						return HIT;
					case 10:
						return playerHand.length === 2 ? SURRENDER : HIT;
					case 1:
						return HIT;
				}
				break;
			case 16:
				switch (dealerLowCard) {
					case 2: case 3: case 4: case 5: case 6:
						return STAND;
					case 7: case 8:
						return HIT;
					case 9: case 10: case 1:
						return playerHand.length === 2 ? SURRENDER : HIT;
							
				}
				break;
			case 17: case 18: case 19: case 20: case 21:
				return STAND;
				
		}

		Hint.dump(dealerHand, playerHand);
		return DONTKNOW;
	}

	static dump(dealerHand, playerHand) {

		let result = 'Dealer Hand: ';
		dealerHand.map(card => result += card.toString());
		
		console.log(result);

		result = 'Player Hand: ';
		playerHand.map(card => {
			result += card.toString();
		});
	}


	static getTwoCardHint(dealerHand, playerHand) {
		const playerCard1 = playerHand[0].lowValue;
		const playerFace1 = playerHand[0].face;
		const playerCard2 = playerHand[1].lowValue;
		const playerFace2 = playerHand[1].face;
		const dealerCard = dealerHand[1].lowValue;

		// if the player does not have a pair or an ace then
		// the rules for two cards is the same for values less than 17
		if (playerCard1 !== 1 && playerCard2 !== 1 &&
			playerFace1 !== playerFace2) {
			return this.getMultiCardHint(dealerHand, playerHand);
			}
			

		// if player has matching cards then get those hints
		if (playerFace1 === playerFace2) {
			return this.getMatchingCardHint(dealerCard, playerCard1);
		}
			

		// if player has an ace then get those hints
		if (playerCard1 === 1) {
			return this.getAceCardHint(dealerCard, playerCard2);
		}
		else if (playerCard2 === 1) {
			return this.getAceCardHint(dealerCard, playerCard1);
		}

		Hint.dump(dealerHand, playerHand);
		return DONTKNOW;
	}

	static getMatchingCardHint(dealerCard, playerCard) {
		switch (playerCard) {
			case 2: case 3:
				switch (dealerCard) {
					case 2, 3:
						return SPLIT;
					case 4: case 5: case 6: case 7:
						return SPLIT;
					case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 4:
				switch (dealerCard) {
					case 2: case 3: case 4:
						return HIT;
					case 5: case 6:
						return SPLIT;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 5:
				switch (dealerCard) {
					case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
						return DOUBLEHIT;
					case 10: case 1:
						return HIT;
				}
				break;
			case 6:
				switch (dealerCard) {
					case 2:
						return SPLIT;
					case 3: case 4: case 5: case 6:
						return SPLIT;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 7:
				switch (dealerCard) {
					case 2: case 3: case 4: case 5: case 6: case 7:
						return SPLIT;
					case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 8:
				switch (dealerCard) {
					case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 1:
						return SPLIT;
				}
				break;
			case 9:
				switch (dealerCard) {
					case 2: case 3: case 4: case 5: case 6:
					
						return SPLIT;
					case 7:
						return STAND;
					case 8: case 9:
						return SPLIT;
					case 10, 1:
						return STAND;
				}
				break;
			case 10:
				return STAND;
			case 1:
				return SPLIT;
			
		}

		return DONTKNOW;
	}

	static getAceCardHint(dealerCard, nonAceCard) {
		switch (nonAceCard) {
			case 2: case 3:
				switch (dealerCard) {
					case 2: case 3: case 4:
						return HIT;
					case 5: case 6:
						return DOUBLEHIT;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 4: case 5:
				switch (dealerCard) {
					case 2: case 3:
						return HIT;
					case 4: case 5: case 6:
						return DOUBLEHIT;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 6:
				switch (dealerCard) {
					case 2:
						return HIT;
					case 3: case 4: case 5: case 6:
						return DOUBLEHIT;
					case 7: case 8: case 9: case 10: case 1:
						return HIT;
				}
				break;
			case 7:
				switch (dealerCard) {
					case 2:
						return STAND;
					case 3: case 4: case 5: case 6:
					
						return DOUBLESTAND;
					case 7: case 8:
						return STAND;
					case 9, 10: case 1:
					
						return HIT;
				}
				break;
			case 8: case 9:
			
				return STAND;
			case 10:
				return BLACKJACK;
				
		}

		return DONTKNOW;
	}

	static getHint(dealerHand, playerHand) {
		
		if (playerHand.length === 2) {
			return this.getTwoCardHint(dealerHand, playerHand);
		}
		else {
			return this.getMultiCardHint(dealerHand, playerHand);
		}
			
	}

}