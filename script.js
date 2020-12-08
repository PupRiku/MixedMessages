// Store Message components
const food = ["take-out", "chicken and potaotes", "burrito bowl", "pizza", "pasta with meat sauce", "mac and cheese", "steak and salad"];
const chores = ["nothing! You can rest today", "laundry", "clean bathroom", "clean bedroom", "clean living room", "clean kitchen", "vaccum", "trash & recycling", "dusting", "dishes"];
const games = ["Kingdom Hearts", "Destiny 2", "Danganronpa", "Minecraft", "Final Fantasy", "Fire Emblem"];

// Create message
const postWorkPlan = (foodArr, choreArr, gameArr) => {
    //Choose random index
    let foodIdx = Math.floor(Math.random() * foodArr.length);
    let choreIdx = Math.floor(Math.random() * choreArr.length);
    let gameIdx = Math.floor(Math.random() * gameArr.length);
    //Print message
    console.log("You are done with the work day! Here is your post-work plan:");
    console.log("First, your assigned chore for the day is: " + choreArr[choreIdx]);
    console.log("For dinner, you should make: " + foodArr[foodIdx]);
    console.log("Finally, wind down for the day with a video game. Go ahead and play: " + gameArr[gameIdx]);
    console.log("Make sure to begin getting ready for bed by 10 PM!")
};
// Run program
postWorkPlan(food, chores, games);