/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = {};
    console.log(`${this.words}`);
    for (let i = 0; i < this.words.length; i++) {
      if (typeof chains[this.words[i]] !== 'undefined' && chains[this.words[i]].length > 0) {
        chains[this.words[i]].push(this.words[i+1]);
      } 
      else {
        chains[this.words[i]] = [`${this.words[i+1]}`];
      }
    }
    console.log(chains);
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

let mm = new MarkovMachine("the cat in the hat");
// console.log(mm);