import Score from "./Score/Score";

const Student = (props) => {
    return (
        <>
        <div>
            <h2>𝒮𝓉𝓊𝒹𝑒𝓃𝓉 𝒜𝓃𝒹 𝒮𝒸𝑜𝓇𝑒𝓈:</h2>
        {props.student.𝕟𝕒𝕞𝕖}
        <div className='bio-div'>
            <h1>Bio</h1>
         {props.student.bio}
         <h1>Scores And Dates</h1>
        {props.student.scores.map(score =>
        <Score score = {score} />
        )}
        </div>
     </div>
        </>
    ) 
}

export default Student