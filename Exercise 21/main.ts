// E 21
console.log("\nExercise 21 Solution\n");

const createStudent = (
  rollNo: string,
  name: string,
  courseTitle: string,
  courseBatch: number
) => ({
  rollNo,
  name,
  status: "active",
  course: [
    {
      title: courseTitle,
      batch: courseBatch,
    },
  ],
});

console.log(
  createStudent("PIAIC196389", "Muhammad Hammad Raza", "Web 3.0 AI WMD", 46)
);
