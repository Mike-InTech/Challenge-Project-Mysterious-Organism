// Returns a random DNA base (created by Codecademy)
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases (created by Codecademy)
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// MY CONTRIBUTION

// factory function
const pAequorFactory = (num, array) => {
  // returns object
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let randomNum = Math.floor(Math.random() * 15);
      const dnaBases = ["A", "T", "C", "G"];
      let currentBase = this.dna[randomNum];
      let possibleBases = dnaBases.filter((x) => x !== currentBase);

      return (this.dna[randomNum] =
        possibleBases[Math.floor(Math.random() * 3)]);
    },
    compareDNA(pApAequor) {
      let OG = this.dna;
      let second = pApAequor.dna;
      let matches = []; //the element, not index
      let percentage;

      // checks for matches
      for (let i = 0; i < OG.length; i++) {
        if (OG[i] === second[i]) {
          matches.push(OG[i]);
        }
      }
      percentage = ((matches.length / OG.length) * 100).toFixed(1);
      //console.log(matches);
      console.log(`Specimen #1: ${OG}`);
      console.log(`Specimen #2: ${second}\n`);
      console.log(
        `Specimen #1 and Specimen #2 have ${percentage}% DNA in common.`
      );
    },
    willLikelySurvive() {
      let numOfTimes = 0; // occurances of C or G
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "G" || this.dna[i] === "C") {
          // adds 1 to numOfTimes every occurance of C/G
          numOfTimes++;
        }
      }
      let percentage = (numOfTimes / this.dna.length) * 100; // percent of C or G in dna
      return percentage >= 60;
    },
    complementStrand() {
      let complement = this.dna.slice();
      //console.log(complement)
      //console.log(`Original DNA Strand:\n${this.dna}\n`)
      for (let i = 0; i < this.dna.length; i++) {
        switch (complement[i]) {
          case "A":
            complement[i] = "T";
            break;
          case "T":
            complement[i] = "A";
            break;
          case "C":
            complement[i] = "G";
            break;
          case "G":
            complement[i] = "C";
            break;
          default:
            break;
        }
      }
      //console.log(`Complement DNA Strand:\n${complement}`)
      return complement;
    },
  };
};

const step7 = () => {
  let theseWillSurvive = [];
  let i = 0;
  //console.log(currentStrand)
  while (i < 30) {
    const randomNum = Math.floor(Math.random() * 500) + 1;
    let currentStrand = pAequorFactory(randomNum, mockUpStrand());
    if (currentStrand.willLikelySurvive) {
      theseWillSurvive.push(currentStrand);
    }
    i++;
  }
  //console.log(theseWillSurvive)
  return theseWillSurvive;
};

// Tests
//console.log(pAequorFactory(1, mockUpStrand()))
//const testObject = pAequorFactory(1, mockUpStrand());
//const testObject2 = pAequorFactory(2, mockUpStrand());

/*console.log(`Original DNA: \n${testObject.dna}`);
testObject.mutate();
console.log(`Mutated DNA: \n${testObject.dna}`);
testObject.mutate();
console.log(`2nd Mutation: \n${testObject.dna}`);*/

//testObject.compareDNA(testObject2);
//console.log(testObject.willLikelySurvive());
//console.log(step7())
//testObject.complementStrand()
