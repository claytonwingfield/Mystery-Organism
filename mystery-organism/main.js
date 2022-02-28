// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let currentDna = mockUpStrand();

const pAequorFactory = function (number, array) {
  return {
    pecimenNum: number,
    dna: array,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA: function () {
      let example1 = this.dna;
      let example2 = currentDna;
      let score = 0;
      for (let i = 0; i < example1.length; i++) {
        for (let j = 0; j < example2.length; j++) {
          if (i === j && example1[i] === example2[j]) {
            score = score + 1;
          }
        }
      }
      console.log(
        `Specimen 1 and Specimen 2 have ${Math.floor(
          (100 / 15) * score
        )}% DNA in common`
      );
    },
    willLikelySurvive() {
      let dnaScore = 0;
      const survivedStrand = [];
      for (let m = 0; m < this.dna.length; m++) {
        if (this.dna[m] === "C" || this.dna[m] === "G") {
          dnaScore = dnaScore + 1;
        }
      }
      if (Math.floor((100 / 15) * dnaScore) > 60) {
        survivedStrand.push(this.dna);
      }
      return console.log(survivedStrand);
    },
  };
};
// console.log(pAequorFactory(10).dna)
console.log(pAequorFactory(2, mockUpStrand()));
