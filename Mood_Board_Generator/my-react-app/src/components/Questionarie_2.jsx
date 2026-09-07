export default function Questionarie2({ onBack, onNext }) {
    return (

        <div className="container">

            <div className="ques2">

                <div className="headingback">
                    <button className="back" onClick={onBack}>back</button>
                    <h1 className="selecttheme">
                        SELECT YOUR THEME
                    </h1>
                </div>


                <div className="options">
                    <button className="b1">Retro</button>
                    <button className="b1">Professioanl</button>
                    <button className="b1">Funky</button>
                    <button className="b1">Vintage</button>
                    <button className="b1 nxt" onClick={onNext}>Next</button>
                </div>

            </div>
        </div>

    )

}