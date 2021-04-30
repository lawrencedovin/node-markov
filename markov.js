/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // let chains = {};

    // for (let i = 0; i < this.words.length; i++) {
    //   if (typeof chains[this.words[i]] !== 'undefined' && chains[this.words[i]].length > 0) {
    //     chains[this.words[i]].push(this.words[i+1]);
    //   } 
    //   else {
    //     chains[this.words[i]] = [`${this.words[i+1]}`];
    //   }
    // }
    // this.chains = chains;

    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      // if key is found then push the word to the key's value
      chains.has(word) ? chains.get(word).push(nextWord): chains.set(word, [nextWord]);
    }

    return chains;
  }


  /** Pick random choice from array */

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // pick a random key to begin
    // Places the keys from chains into an array 
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    // produce markov chain until reaching termination word
    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }

    return out.join(" ");
  }
}


module.exports = {
  MarkovMachine,
};