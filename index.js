// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties:
//  featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"),
//  and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to
//  enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess){
  this.featureName = featureName;
  this.isEnabled = isEnabled;
  this.userGroupAccess = userGroupAccess;
}
FeatureToggle.prototype.canAccess = function(userRole){
  return this.isEnabled && this.userGroupAccess.includes(userRole);
};
FeatureToggle.prototype.toggleFeature = function(flag){
  this.isEnabled = flag;
};

const toggle = new FeatureToggle('LightMode',true,["developers","admins"]);
toggle.toggleFeature(true);
const role = "admins";
if(toggle.canAccess(role)){
  console.log(`${role} can access ${toggle.featureName}`);
}
else {
  console.log(`${role} cannot access ${toggle.featureName}`);
}
switch (role){
  case "developers":
    console.log("Developer access granted");
    break;
  case "admins":
    console.log("Admin access granted");
    break;
  default:
    console.log("Access denied");
}
// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of
//  objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter
//  logs by date range, and determine if weekly hours exceed 40 using if-else logic.
class TimeLog {
    constructor(freelancerName, projectDetails, logs){
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;}
}
TimeLog.prototype.totalEarnings = function() {
    return this.logs.reduce((total, log) => total + log.hoursWorked * this.projectDetails.hourlyRate, 0);
};
TimeLog.prototype.filterLogsByDate = function(startDate, endDate) {
    return this.logs.filter(log => {
        const date = new Date(log.date);
        return date >= new Date(startDate) && date <= new Date(endDate);
    });
};
TimeLog.prototype.exceedsWeeklyLimit = function() {
    let totalHours = 0;
    this.logs.forEach(log => totalHours += log.hoursWorked);
    if (totalHours > 40) {
        return true;
    } else {
        return false;
    }
};
const log = new TimeLog("Fiona", { name: "Ankole Web", hourlyRate: 40 }, [
    { date: "2025-08-01", hoursWorked: 22},
    { date: "2025-08-05", hoursWorked: 10 },
    { date: "2025-08-09", hoursWorked: 24 },
]);
console.log("Total earnings:", log.totalEarnings());
console.log("Logs in range:", log.filterLogsByDate("2025-08-01", "2025-08-05"));
console.log("Exceeds 40 hours?", log.exceedsWeeklyLimit());


// You are developing a startup’s order management system where an Order constructor function should 
// contain customer (object with name and email), items (array of objects with productName, quantity,
//  and unitPrice), and status (string), then implement prototype methods to compute total cost, update
//  order status based on payment, and categorize order urgency using switch and conditional statements.
class Orders {
    constructor(customer, items, status){
    this.customer = customer;
    this.items = items;
    this.status = status;
    }
}
Orders.prototype.totalCost = function() {
    return this.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
};
Orders.prototype.updateOrderStatus = function(paid) {
    this.status = paid;
};
Orders.prototype.categorizeOrderUrgency = function() {
    const totalItems = this.items.length;
    switch (true) {
        case totalItems > 5:
            console.log("High urgency order");
            break;
        case totalItems > 2:
            console.log("Medium urgency order");
            break;
        default:
            console.log("Low urgency order");
    }
};
const order = new Orders({ name: "Fiona", email: "fiona@gmail.com" }, [
    { productName: "dress", quantity: 2, unitPrice: 60 },
    { productName: "shirt", quantity: 5, unitPrice: 30}
], "Delivered");
console.log("Total Cost:", order.totalCost());
order.updateOrderStatus(true);
console.log("Status:", order.status);
order.categorizeOrderUrgency();


// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string),
//  performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback 
// (array of strings), then use prototypes to calculate an average score, classify performance level using
//  control flow, and add new feedback based on conditions.
class Employee {
    constructor(id,name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
    }
}
Employee.prototype.averageScore = function() {
    const scores = Object.values(this.performanceMetrics);
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
};
Employee.prototype.classifyPerformance = function() {
    const avg = this.averageScore();class Employee {
    constructor(id,name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
    }
}
Employee.prototype.averageScore = function() {
    const scores = Object.values(this.performanceMetrics);
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
};
Employee.prototype.classifyPerformance = function() {
    const avg = this.averageScore();
    if (avg >= 4.5) {
        return "Excellent";
    } else if (avg >= 3.5) {
        return "Good";
    } else {
        return "Average";
    }
};
Employee.prototype.addFeedback = function(comment) {
    if (comment.length > 5) {
        this.feedback.push(comment);
    }
};
const employee = new Employee(23567, "Fiona", {
    communication: 3,
    efficiency: 5,
    reliability: 4
}, []);
console.log("Average Score:", employee.averageScore());
console.log("Performance Level:", employee.classifyPerformance());
employee.addFeedback("Good teacher.");
console.log("Feedback:", employee.feedback);

    if (avg >= 4.5) {
        return "Excellent";
    } else if (avg >= 3.5) {
        return "Good";
    } else {
        return "Average";
    }
};
Employee.prototype.addFeedback = function(comment) {
    if (comment.length > 5) {
        this.feedback.push(comment);
    }
};
const employee = new Employee(23567, "Fiona", {
    communication: 3,
    efficiency: 5,
    reliability: 4
}, []);
console.log("Average Score:", employee.averageScore());
console.log("Performance Level:", employee.classifyPerformance());
employee.addFeedback("Good teacher.");
console.log("Feedback:", employee.feedback);


// Build a simple e-learning system where a Course class has properties: title (string), instructor 
// (object with name and expertise), and students (array of objects with name and completionStatus),
//  then add prototype methods to return names of students who completed the course, count enrolled 
// students by expertise area, and use control flow to output different messages for instructors
//  with more or less than 5 students.

class Course{
    constructor(title, instructor, students){
    this.title = title;
    this.instructor = instructor;
    this.students = students;
}
}
Course.prototype.completedStudents = function() {
    return this.students.filter(student => student.completionStatus).map(student => student.name);
};
Course.prototype.countByExpertise = function() {
    return this.instructor.expertise + ": " + this.students.length + " students";
};
Course.prototype.instructorMessage = function() {
    if (this.students.length >= 5) {
        console.log(`Instructor ${this.instructor.name} is teaching upperClass`);
    } else {
        console.log(`Instructor ${this.instructor.name} is teaching lowerclass.`);
    }
};
const course = new Course("Geigraphy", { name: "Elius", expertise: "Science" }, [
    { name: "Jabal", completionStatus: true },
    { name: "Bravin", completionStatus: false },
    { name: "Edgar", completionStatus: true },
]);
console.log("Completed Students:", course.completedStudents());
console.log("Expertise Count:", course.countByExpertise());
course.instructorMessage();
