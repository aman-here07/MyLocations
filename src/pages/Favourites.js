import {useContext} from 'react';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/Meetup/MeetupList';

function Favourites()
{
    const favouritesCntx=useContext(FavouritesContext);

    let content;
    if(favouritesCntx.totalFavourites===0)
    {
        content=<p>No favourites . Add some!</p>;
    }
    else{
        content= <MeetupList meetups={favouritesCntx.favourites} />;
    }
return (
<section>
    <h1>My Favourites!</h1>
   {content}
</section>
);
}
export default Favourites;