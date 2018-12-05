import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';

@Injectable(
  {providedIn: 'root'}
)
export class CategoryService {
  
  constructor(private db: AngularFireDatabase) {  }
  
  getCategoriesList(){
    console.log(this.db.object('/categories'));
    return this.db.list('/categories');
  }
  
}
/*create a service with the intention of linking the firebase database to the frontend
more specifically I want the lategories list (types of books to be shown in the input new product page)
unfortunatelly the only way currently to add new items is through the database its self.
The idea of this service is to link itself in the firebase databse "./categoires" section.
Then other module calling this Service will have access to that component of the data base!

*/