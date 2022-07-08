import Student from "./Student"

const StudentList = ({students}) => {
    console.log(students)
    return (
        <>
            <h1> 𝒮𝓉𝓊𝒹𝑒𝓃𝓉 𝐿𝒾𝓈𝓉: </h1>
            {students.map(student => 
             < Student student = {student} />



            )}
   </>
    )
}



export default StudentList