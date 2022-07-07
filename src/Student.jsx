import Score from "./Score/Score";

const Student = (props) => {
    return (
        <>
        <div>
            <h2>Student And Scores</h2>
        {props.student.name}
        {props.student.bio}
        {props.student.scores.map(score =>
        <Score score = {score} />

            )}
     </div>
        </>
    )
}

export default Student