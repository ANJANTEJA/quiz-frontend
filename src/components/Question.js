export default function Question({question,index,changeHandler}){
    const handler=e=>{
        let temp =question.answer === e.target.value ? 1 : 0;
        changeHandler(temp,index)
    }
    return(
        <div className="text-light">
            <p className="fs-4 fw-bolder">{question.title}</p>
            <div className="d-flex flex-column" onChange={handler}>
                <div className="my-3 fs-6">
                    <input className="form-check-input"  type={"radio"} value="A" name={index}/>
                    <label class="form-check-label" >{question.options[0]}</label>
                </div>
                <div className="my-3 fs-6">
                    <input className="form-check-input"  type={"radio"} value="B" name={index}/>
                    <label class="form-check-label" >{question.options[1]}</label>
                </div>
                <div className="my-3 fs-6">
                    <input className="form-check-input"  type={"radio"} value="C" name={index}/>
                    <label class="form-check-label" >{question.options[2]}</label>
                </div>
                <div className="my-3 fs-6">
                    <input className="form-check-input"  type={"radio"} value="D" name={index}/>
                    <label class="form-check-label" >{question.options[3]}</label>
                </div>
            </div>
        </div>
    )
}
