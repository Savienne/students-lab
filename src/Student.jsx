import Score from "./Score/Score";

const Student = (props) => {
    return (
        <>
        <div>
        <div className='bio-div'>
            <h2>Name:</h2>
        {props.student.name}
            <h2>Bio:</h2>
         {props.student.bio}
         <h2>Scores And Dates:</h2>
        {props.student.scores.map(score =>
        <Score score = {score} />
        )}
        </div>
     </div>
        </>
    ) 
}
export default Student