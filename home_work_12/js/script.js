const students = [
  {
      name: 'Mark',
      marks: [100, 65, 88, 90, 50],
      attends: 0
  },
  {
      name: 'John',
      marks: [83, 10, 65, 0, 50, 83],
      attends: 0
  },
  {
      name: 'Joel',
      marks: [100, 65, 90, 20],
      attends: 0
  }
];


function getAvgMark() { 
  return this.marks.reduce((a, b) => a + b)/ this.marks.length
} // средняя оценка студента


function getMaxMark() {
  return Math.max(...this.marks)
} // максимальна оценка студента


function setAttend() { // увличить счетчик посещений студента
  ++this.attends
}

function getInfo() {
  return `Student name: ${this.name}, average mark: ${this.marks.reduce((a, b) => a + b)/ this.marks.length}, classes attended ${this.attends} `
} // возвращаем строку с именем студента, средней оценкой и колличеством посещений


const studentsFunc = students.map(student => {

  return {
    getAvgMark: getAvgMark.bind(student),
    getMaxMark: getMaxMark.bind(student),
    setAttend: setAttend.bind(student),
    getInfo: getInfo.bind(student)
  }

})

studentsFunc.forEach((studentFunc, i) => {
  console.log(`Sudent id: #${++i}`)
  console.log(`Average mark: ${studentFunc.getAvgMark()}`)
  console.log(`Max mark: ${studentFunc.getMaxMark()}`)
  studentFunc.setAttend()
  console.log(studentFunc.getInfo())

})



console.log(students)