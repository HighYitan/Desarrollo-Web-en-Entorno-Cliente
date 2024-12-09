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

import { recipes } from './data.js';

function Recipe({id, name, ingredients}){
  return(
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id}/>
      )}
    </div>
  );
}