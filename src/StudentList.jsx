import Student from "./Student"

const StudentList = ({students}) => {
    console.log(students)
    return (
        <>
            <div className="title">
            </div>
            {students.map(student => 
             < Student student = {student} />



            )}
   </>
    )
}



export default StudentList