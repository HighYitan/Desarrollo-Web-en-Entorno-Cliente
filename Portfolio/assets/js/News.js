export default function News(){
    return(
        <div>
            <h1>News for {formatDate(today)}</h1>
        </div>
    );
}

const today = new Date();
function formatDate(date){
    return new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date);
}