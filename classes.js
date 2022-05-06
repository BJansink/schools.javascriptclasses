class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(numberOfStudents) {
      if (numberOfStudents > 40) {
        console.log("HOI");
      }
    }
  
    quickFacts() {
      console.log(
        `${this._name} educated ${this._numberOfStudents} at the ${this._level} school level.`
      );
    };
  
    static pickSubstituteTeacher(substituteTeachers) {
      const myIndex = Math.round(Math.random() * substituteTeachers.length);
      return substituteTeachers[myIndex];
    }
  }
  
  class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
      super(name, level, numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, level, numberOfStudents) {
      super(name, level, numberOfStudents);
    }
  }
  
  class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
      super(name, level, numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const pius = new High("Pius X", "High", 100, ["Ballet", "Volleyball"]);
  
  const lorraineHansbury = new Primary(
    "Lorraine",
    "Primary",
    514,
    "Students must be picked up by a parent"
  );
  
  console.log(lorraineHansbury.quickFacts());
  console.log(pius);
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
  
  console.log(pius.sportsTeams)