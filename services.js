'use strict';
app.service('expansions', [function(){
  var sv = this;
  sv.vanilla = [
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 0, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 1, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 4, quantity: 4, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 5, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 6, quantity: 7, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 7, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 8, quantity: 7, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 9, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 10, quantity: 4, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 11, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 12, quantity: 2, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 13, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 14, quantity: 2, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 15, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 20, quantity: 2, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 23, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 30, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Attack', value: 40, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Negotiate', value: 'N', quantity: 15, description: 'Opposed by Attack: Loses, but collects compensation. Opposed by Negotiate: Players have one minute to make a deal or lose three ships to the warp.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Morph', value: 'M', quantity: 1, description: 'Duplicates opponent\'s encounter card when revealed'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Reinforcement', value: '+2', quantity: 2, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Reinforcement', value: '+3', quantity: 3, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Reinforcement', value: '+5', quantity: 1, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Card Zap', quantity: 2, description: 'Negates Cards. Play this card at any time to negate a flare or artifact card just as a player attempts to use it. The flare or artifact must then be discarded.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Cosmic Zap', quantity: 2, description: 'Stops Powers. Play at any time to cancel one use of any alien\'s power, including your own. That power may not be used again during the current encounter.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Emotional Control', quantity: 1, description: 'Alters Attack. Play after encounter cards are revealed to treat all attack cards played this encounter as negotiate cards. The main players must then attempt to make a deal.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Force Field', quantity: 1, description: 'Stops Allies. Play after alliances are formed to cancel the alliances of any or all players. Canceled allies return their ships to any of their colonies.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Ionic Gas', quantity: 1, description: 'Stops Compensation and Rewards. Play after the winner of an encounter is determined. No compensation or rewards may be collected this encounter.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Mobius Tubes', quantity: 2, description: 'Frees Ships. Play at the start of your encounter to release all players\' ships from the warp. Freed ships return to any of their owners\' colonies.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Plague', quantity: 1, description: 'Harms Player. Play at the start of any encounter and choose a player (even yourself). That player loses three ships of his or her choice to the warp and must discard one card of each type (attack, negotiate, morph, artifact, flare, etc.) from his or her hand.'},
    {expansion: 'Vanilla', deck: 'Cosmic', type: 'Artifact', value: 'Quash', quantity: 1, description:'Play after a deal is made successfully. Cancel the deal, and the dealing players suffer the penalties for a failed deal.'}
  ];
  sv.incursion = [
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: -7, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: -4, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: -1, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: 10, quantity: 3, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: 16, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: 17, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: 18, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: 19, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Attack', value: 23, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Negotiate', value: 'N (Crooked Deal)', quantity: 3, description: 'Opposed by Attack: Loses, but collects compensation equal to ships lost + 1. Opposed by Negotiate: Players have one minute to make a deal. If no deal is made, you lose one ship fewer than usual and your opponent loses one ship more than usual (i.e., you lose two ships and your opponent loses four).'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Morph', value: 'M', quantity: 1, description: 'Duplicates opponent\'s encounter card when revealed'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Artifact', value: 'Card Zap', quantity: 1, description: 'Negates Cards. Play this card at any time to negate a flare or artifact card just as a player attempts to use it. The flare or artifact must then be discarded.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Artifact', value: 'Cosmic Zap', quantity: 1, description: 'Stops Powers. Play at any time to cancel one use of any alien\'s power, including your own. That power may not be used again during the current encounter.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Artifact', value: 'Finder', quantity: 1, description: 'Search for Card. Play this card at any time. Choose another player and name a specific card, such as "Attack40," "Clone flare," or "Plague." Look at the chosen player\'s hand. If the named card is in his or her hand, you may take it.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Artifact', value: 'Hand Zap', quantity: 1, description: 'Draws New Hand. Play at the start of any encounter and choose a player (even yourself). That player discards his or her entire hand and draws a new hand of eight cards. No cards may be played in response to this artifact except for cards that cancel its effect.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Artifact', value: 'Space Junk', quantity: 1, description: 'Take Top Discard. Play this card at any time. Choose any player (even yourself). That player takes the top card of the discard pile and adds it to his or her hand. When several cards go into the discard pile at the same time, you may select any one of them for the targeted player to take.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Reinforcement', value: '+4', quantity: 1, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Reinforcement', value: '+5', quantity: 2, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Reinforcement', value: '+6', quantity: 1, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Rift', value: 3, quantity: 1, description: 'Play at the start of any encounter to release three ships of your choice belonging to any player(s) from the warp. These ships return to any colonies of their owners\' choice. If another player takes this card from you, he or she loses three ships of his or her choice to the warp, then discards this card.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Rift', value: 4, quantity: 2, description: 'Play at the start of any encounter to release four ships of your choice belonging to any player(s) from the warp. These ships return to any colonies of their owners\' choice. If another player takes this card from you, he or she loses four ships of his or her choice to the warp, then discards this card.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Rift', value: 5, quantity: 1, description: 'Play at the start of any encounter to release five ships of your choice belonging to any player(s) from the warp. These ships return to any colonies of their owners\' choice. If another player takes this card from you, he or she loses five ships of his or her choice to the warp, then discards this card.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Kicker', value: 'X0', quantity: 1, description: 'Play facedown before encounter cards are selected. Multiplies your card value, your compensation, and/or the opponent\'s ships lost due to a failed deal.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Kicker', value: 'X2', quantity: 2, description: 'Play facedown before encounter cards are selected. Multiplies your card value, your compensation, and/or the opponent\'s ships lost due to a failed deal.'},
    {expansion: 'Incursion', deck: 'Reward', type: 'Kicker', value: 'X3', quantity: 1, description: 'Play facedown before encounter cards are selected. Multiplies your card value, your compensation, and/or the opponent\'s ships lost due to a failed deal.'}
  ];
  sv.alliance = [
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 0, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 2, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 4, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 6, quantity: 2, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 8, quantity: 2, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 10, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 12, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 14, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 20, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Attack', value: 30, quantity: 1, description: 'Opposed by Attack: Higher total (ships + card) wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Negotiate', value: 'N', quantity: 5, description: 'Opposed by Attack: Loses, but collects compensation. Opposed by Negotiate: Players have one minute to make a deal or lose three ships to the warp.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Morph', value: 'M', quantity: 1, description: 'Duplicates opponent\'s encounter card when revealed'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Reinforcement', value: '+4', quantity: 1, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Reinforcement', value: '+8', quantity: 1, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Artifact', value: 'Card Zap', quantity: 1, description: 'Negates Cards. Play this card at any time to negate a flare or artifact card just as a player attempts to use it. The flare or artifact must then be discarded.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Artifact', value: 'Cosmic Zap', quantity: 1, description: 'Stops Powers. Play at any time to cancel one use of any alien\'s power, including your own. That power may not be used again during the current encounter.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Artifact', value: 'Force Field', quantity: 1, description: 'Stops Allies. Play after alliances are formed to cancel the alliances of any or all players. Canceled allies return their ships to any of their colonies.'},
    {expansion: 'Alliance', deck: 'Cosmic', type: 'Artifact', value: 'Quash', quantity: 1, description:'Play after a deal is made successfully. Cancel the deal, and the dealing players suffer the penalties for a failed deal.'}
  ];
  sv.dominion = [
    {expansion: 'Dominion', deck: 'Reward', type: 'Negotiate', value: 'N (Epic Oratory)', quantity: 1, description: 'Opposed by Attack: Loses, but either collects double compensation or prevents your ships from going to the warp (your choice). Opposed by Negotiate: Players have one minute to make a deal (up to two colonies per player may be gained) or lose three ships to the warp.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Negotiate', value: 'N (Faulty Translator)', quantity: 1, description: 'Opposed by Attack: Loses, but collects compensation from any one opposing ally (or from the opponent if he or she has no allies). Opposed by Negotiate: Players have one minute to make a deal using only gestures. If no deal is made, players each lose one ship fewer than usual (e.g., two instead of three).'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Negotiate', value: 'N (Right of Refusal)', quantity: 1, description: 'Opposed by Attack: Loses, but collects compensation. Opposed by Negotiate: Players have one minute to make a deal or lose three ships to the warp. If you receive any cards from compensation or a deal, you may discard any or all of those cards.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Negotiate', value: 'N (Self Defense)', quantity: 1, description: 'Opposed by Attack: Loses, with no compensation. Send one opposing ship to the warp for every ship lost on your side. Opposed by Negotiate: Players have one minute to make a deal or lose three ships to the warp.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Morph', value: 'M', quantity: 1, description: 'Duplicates opponent\'s encounter card when revealed'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Retreat', value: 'R', quantity: 2, description: 'Opposed by Attack: You lose the encounter, but all players on your side return their ships to any of their colonies, instead of the warp. If you are the defense, your ships remain on the planet. Opposed by anything else: Becomes a Negotiate (players attempt to deal).'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Attack', value: '02/20', quantity: 1, description: 'Becomes 20 when revealed if any destiny card(s) with a hazard warning were drawn this encounter. Opposed by Attack: Higher total wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Attack', value: '03/30', quantity: 1, description: 'Becomes 30 when revealed if any destiny card(s) with a hazard warning were drawn this encounter. Opposed by Attack: Higher total wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Attack', value: '12/21', quantity: 2, description: 'Becomes 21 when revealed if any destiny card(s) with a hazard warning were drawn this encounter. Opposed by Attack: Higher total wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Attack', value: '21/12', quantity: 1, description: 'Becomes 12 when revealed if any destiny card(s) with a hazard warning were drawn this encounter. Opposed by Attack: Higher total wins. Opposed by Negotiate: Wins, but opponent collects compensation.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Reinforcement', value: '+X', quantity: 1, description: 'X = the total number of ships on either side (your choice). Adds to either side\'s total. Play after encounter cards are revealed.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Reinforcement', value: '+4', quantity: 1, description: 'Adds to either side\'s total. Play after encounter cards are revealed'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Rift', value: 1, quantity: 1, description: 'Play at the start of one of your encounters and choose any player (even yourself). That player establishes one colony on any planet that has no colonies, using any number of his or her ships from other colonies. If another player takes this card from you, he or she abandons one colony of his or her choice (returning ships to his or her other colonies), then discards this card.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Rift', value: 2, quantity: 2, description: 'Play at the start of one of your encounters and choose any player (even yourself). That player draws two cards from the cosmic and/or reward deck. If another player takes this card from you, after all cards are taken he or she discards this card and you discard two cards at random from his or her hand.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Rift', value: 3, quantity: 1, description: 'Play at the start of any encounter to release three ships of your choice belonging to any player(s) from the warp. These ships return to any colonies of their owners\' choice. If another player takes this card from you, he or she loses three ships of his or her choice to the warp, then discards this card.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Kicker', value: 'X-1 (Reverse Polarity)', quantity: 1, description: 'Play facedown before encounter cards are selected. Multiplies all attack cards in the encounter. Does not affect compensation or failed deals.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Kicker', value: 'X1 (Self Destruct)', quantity: 1, description: 'Play facedown before encounter cards are selected. Both sides immediately lose the encounter and all involved ships go to the warp without compensation.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Kicker', value: 'X2 (Duplicity)', quantity: 1, description: 'Play facedown before encounter cards are selected. When your allies\' ships leave the hyperspace gate, they go to the warp.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Kicker', value: 'X2 (Jamming Signal)', quantity: 1, description: 'Play facedown before encounter cards are selected. All other revealed kickers are canceled. No reinforcements may be played.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Kicker', value: 'X4 (Give War a Chance)', quantity: 1, description: 'Play facedown before encounter cards are selected. Does not affect compensation or failed deals.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Intimidate', value: -9, quantity: 1, description: 'Play facedown. Becomes your encounter card if you are a main player, or may be used by your main player if you become an ally. Returns to hand if unused. Opposed by Attack: Becomes an Attack (higher total wins). Opposed by anything else: Becomes a Negotiate (attempt to deal).'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Intimidate', value: 19, quantity: 1, description: 'Play facedown. Becomes your encounter card if you are a main player, or may be used by your main player if you become an ally. Returns to hand if unused. Opposed by Attack: Becomes an Attack (higher total wins). Opposed by anything else: Becomes a Negotiate (attempt to deal).'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Intimidate', value: 29, quantity: 1, description: 'Play facedown. Becomes your encounter card if you are a main player, or may be used by your main player if you become an ally. Returns to hand if unused. Opposed by Attack: Becomes an Attack (higher total wins). Opposed by anything else: Becomes a Negotiate (attempt to deal).'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Intimidate', value: 39, quantity: 1, description: 'Play facedown. Becomes your encounter card if you are a main player, or may be used by your main player if you become an ally. Returns to hand if unused. Opposed by Attack: Becomes an Attack (higher total wins). Opposed by anything else: Becomes a Negotiate (attempt to deal).'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Artifact', value: 'Omni-Zap', quantity: 1, description: 'Zaps Anything. Play at any time to copy the effect of any other Zap artifact you name, or to cancel and discard any one card that was just played or revealed. If the encounter or an alien power is now unplayable (e.g., by zapping a destiny, encounter, claw, or schizoid card) then an appropriate replacement is drawn or played (drawing a new hand if necessary). After use, remove one of your ships from the game or send three of your ships to the warp.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Artifact', value: 'Ship Zap', quantity: 1, description: 'Sends Ship to Warp. Play at any time. Send to the warp any one ship from anywhere in play, or one that has been removed from the game. (If you remove the offense\'s last ship from the hyperspace gate, the offense continues with zero ships.)'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Artifact', value: 'Solar Wind', quantity: 1, description: 'Reverses Rewards. Play after encounter cards are revealed. Gains for allies are reversed: defensive allies land on the targeted planet if their side wins, while offensive allies receive rewards if their side wins. (If gains were already reversed, they revert to normal instead.)'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Artifact', value: 'Rebirth', quantity: 1, description: 'Regains Home Colonies. Play at the start of any encounter and choose a player (even yourself). That player may place one or more of his or her ships, from his or her colonies, onto any planet(s) in his or her home system.'},
    {expansion: 'Dominion', deck: 'Reward', type: 'Artifact', value: 'Victory Boon', quantity: 1, description: 'Rewards Defender. Play after the defense wins an encounter. The defense receives rewards equal to the number of his or her ships in the encounter.'}
  ];
  sv.decksArray = [sv.vanilla, sv.incursion, sv.alliance, sv.dominion];
  sv.decks = [];
  for(var i = 0; i < sv.decksArray.length; i++){
    for(var j = 0; j < sv.decksArray[i].length; j++){
      sv.decks.push(sv.decksArray[i][j]);
    }
  }

}])
