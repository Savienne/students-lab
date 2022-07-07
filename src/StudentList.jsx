import Student from "./Student"

const StudentList = ({students}) => {
    console.log(students)
    return (
        <>
            <h1> Student List </h1>
            {students.map(student => 
             < Student student = {student} />



            )}
   </>
    )
}



export default StudentList