import {useContext} from 'react';
import Card from '../interface/Card';
import classes from './MeetupItems.module.css';
import FavouritesContext from '../../store/favourites-context';
function MeetupItem(props)
{
    const favouritesCntx=useContext(FavouritesContext);
    const itemIsFavourite=favouritesCntx.itemIsFavourite(props.id);
    function toggleFavourite()
    {
if(itemIsFavourite){
    favouritesCntx.removeFavourite(props.id);
}
else{
    favouritesCntx.addFavourite({
        id:props.id,
        title:props.title,
        image:props.image,
        address:props.address,
        description:props.description,

    });
    }}
  return(
   <li className={classes.item}>
       <Card>
       <div className={classes.image}>
           <img src={props.image} alt={props.title}/>
       </div>
       <div className={classes.content}>
           <h3>{props.title}</h3>
           <address>{props.address}</address>
           <p>{props.description}</p>
       </div>
       <div className={classes.actions}>
           <button onClick={toggleFavourite}>{itemIsFavourite?'Remove from Favourites':'Add to Favourites'}</button>
       </div>
       </Card>
   </li>
  );
}
export default MeetupItem;