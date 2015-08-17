import getSyllables = require("./syllables")

class Term {
  text: string;
  normal: string;
  pos: string;
  constructor(text: string) {
    this.text = text;
    this.normal = text.toLowerCase();
  }
  syllables(): string[] {
    return getSyllables(this.normal)
    /*return ['asdf']*/
  }
}
var x;
export = Term;
