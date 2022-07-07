const Student = (props) => {
    return (
        <>
        <div>
            <h2>Student And Scores</h2>
        {props.student.name}
        {props.student.bio}
     </div>
        </>
    )
}

export default Student