import { Component } from '@angular/core';
import { PathfinderCharacter } from '../character';
import { PathfinderClass } from '../class';
import { PathfinderSpell } from '../spell';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  testSpells: Array<Array<PathfinderSpell>> = [
    [{name: "Detect Magic"}], [{name: "Air Bubble"}, {name: "Mage Armor"}]
  ];
  testClass: PathfinderClass = {
    name: "Wizard",
    isPrepared: true,
    spellsPerDay: [4, 2],
    availableSpells: this.testSpells
  };
  testCharacter: PathfinderCharacter = {
    name: "Test",
    classes: [this.testClass],
    spells: this.testSpells
  };
}
