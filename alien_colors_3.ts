// version 1 of the programs

let aliencolors: string = "green";

if (aliencolors === "green") {
  console.log(" version 1; player carned 5 points.");
} else if (aliencolors === "yellow") {
  console.log("player earned 10 points.");
} else if (aliencolors === "red") {
  console.log("player earned 15 points");
} else {
  console.log("please select right color");
}

// version 2 of the programs
aliencolors = "yellow";

if (aliencolors === "green") {
  console.log("player carned 5 points.");
} else if (aliencolors === "yellow") {
  console.log("version 2; player earned 10 points.");
} else if (aliencolors === "red") {
  console.log("player earned 15 points");
} else {
  console.log("please select right color");
}

// version 3 of the programs
aliencolors = "red";

if (aliencolors === "green") {
  console.log("player carned 5 points.");
} else if (aliencolors === "yellow") {
  console.log("player earned 10 points.");
} else if (aliencolors === "red") {
  console.log("version 3; player earned 15 points");
} else {
  console.log("please select right color");
}
