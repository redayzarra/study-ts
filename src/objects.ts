// Type annotation: We can define what this "employee" variable should look like
let employee: {
  readonly id: number; // Allows us to stop changing this property
  name?: string;
  retire: (date: Date) => void; // Defining the type for a function that we expect
};

// Then we can safely build it using the type annotation above, only for this varialbe tho.
employee = {
  id: 5,
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "ReDay";
