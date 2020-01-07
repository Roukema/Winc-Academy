const assignGrade = function(i) {
  for (i = 100; i >= 60; i--)
    if (i > 90) {
      console.log("For " + i + ", you got a A");
    } else if (i > 80) {
      console.log("For " + i + ", you got a B");
    } else if (i > 70) {
      console.log("For " + i + ", you got a C");
    } else if (i > 60) {
      console.log("For " + i + ", you got a D");
    }
};
assignGrade();
