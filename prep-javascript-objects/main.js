var person = {
  firstName: 'Matthew',
  lastName: 'Chau',
  hobby: 'Kayaking',
  currentJob: 'QA Lead',
  previousJob: 'Logistics Coordinator'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
const currentJob = person.currentJob;
console.log('The person\'s current job is:', currentJob);
const previousJob = person.previousJob;
console.log('The person\'s previous job is:', previousJob);
console.log(person);
