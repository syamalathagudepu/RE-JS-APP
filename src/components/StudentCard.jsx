function StudentCard({studentName,course,age,city}) {
    console.log(studentName, course, age, city);

    return (
    <>
    <h1>Hello {studentName}!</h1>
    <p> Your course is {course}.</p>
</>
    )
}

export default StudentCard;