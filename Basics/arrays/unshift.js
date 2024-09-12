const logActivity = (activities, activity) => {
  activities.unshift(activity)
  return activities
}

let activities = ["Logged in", "Viewed profile", "Edited settings"];
let updatedActivities = logActivity(activities, "Uploaded a photo");

console.log(updatedActivities); // Deve retornar ["Uploaded a photo", "Logged in", "Viewed profile", "Edited settings"]

updatedActivities = logActivity(updatedActivities, "Logged out");
console.log(updatedActivities); // Deve retornar ["Logged out", "Uploaded a photo", "Logged in", "Viewed profile", "Edited settings"]
