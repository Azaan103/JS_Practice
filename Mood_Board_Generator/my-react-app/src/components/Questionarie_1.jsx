
export default function Questionarie_1({onNext})
{
    return(

    <div className="container">
       

        <div className="ques1">
        <h1>WHAT ARE YOU BUILDING!</h1>
        <input className="projname" type="text" placeholder="Enter the project name" />
        <button className="next" onClick={onNext}>Next</button>
        </div>
    </div>
    )
    
}