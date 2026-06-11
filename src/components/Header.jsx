// function StudentCard({studentName,course,age,city}) {
//     console.log(studentName, course, age, city);

//     return <h1>Hello {studentName}!</h1>

// }

// export default StudentCard;

function Header(props)  {

    return(
    <>
    <p>Welcome {props.loggedInUser.name}
          <button>logout</button></p>
    </>
)
}

export default Header;