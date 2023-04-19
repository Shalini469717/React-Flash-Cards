import './Flashcard.css'
function Flashcard(props){
    return (
        <div className="col-lg-3 m-2 rounded" style={{ backgroundColor:props.data.Color }}>
            <div className="p-5">
                <div className="card-body">
                    <p className="h3">{props.data.Title}</p>
                    <p className="card-text">{props.data.Content}</p>
                    <a href={props.data.Url} target='blank' className='text-dark'>Reference</a>
                </div>
            </div>
        </div>
    )
}
export default Flashcard