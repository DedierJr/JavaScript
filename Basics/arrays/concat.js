const mergeAttendees = (...attendeeLists) => {
  // Concatena todas as listas de inscritos em um único array
  let allAttendees = [].concat(...attendeeLists);
  
  // Remove duplicatas convertendo para um Set e de volta para um array
  let uniqueAttendees = [...new Set(allAttendees)];
  
  return uniqueAttendees;
};

let event1Attendees = ["Alice", "Bob", "Charlie"];
let event2Attendees = ["Bob", "David", "Eve"];
let event3Attendees = ["Charlie", "Frank", "Grace"];

let allAttendees = mergeAttendees(event1Attendees, event2Attendees, event3Attendees);

console.log(allAttendees); // Deve retornar ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]
