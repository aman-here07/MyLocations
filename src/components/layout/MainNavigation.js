import {useContext} from 'react';

import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavouritesContext from '../../store/favourites-context';
function MainNavigation()

{
    const favouritesCntx=useContext(FavouritesContext);
   return (
       <header className={classes.header}>
           <div className={classes.logo}>React Meetups</div>
           <nav>
               <ul>
                   <li>
                       <Link to='/'>All Meetups</Link>
                   </li>
                   <li>
                       <Link to='/newmeetup'>Add new meetup</Link>
                   </li>
                   <li>
                       <Link to='/favourites'>Favourites Meetup <span className={classes.badge}>{favouritesCntx.totalFavourites}</span></Link>
                   </li>
               </ul>
           </nav>
       </header>

   );
}
export default MainNavigation;