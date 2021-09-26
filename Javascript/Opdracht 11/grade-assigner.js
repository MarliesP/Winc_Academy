function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

  for (let grade = 60; grade >= 60 &&  grade <= 100; grade++ ) {
      console.log("For scoring " + grade + "points, you get an " + assignGrade(grade));
  };