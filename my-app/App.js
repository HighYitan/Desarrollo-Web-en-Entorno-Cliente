export function Profile(){
    return(
        <img
            src="https://i.imgur.com/lICfvbD.jpg"    
            alt="Aklilu Lemma"
        />
    );
}
<section className="profile">
    <h2>{name}</h2>
    <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
    />
    <ul>
    <li><b>Profession:</b> {profession}</li>
    <li>
        <b>Awards: {awards.length} </b>
        ({awards.join(', ')})
    </li>
    <li>
        <b>Discovered: </b>
        {discovery}
    </li>
    </ul>
</section>

src={getImageUrl(person, (size<90) ? 's' : 'b')}
{name} {(importance > 0) && <i>(Importance: {importance})</i>}