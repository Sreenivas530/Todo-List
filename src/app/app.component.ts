
import { Component,Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'todo-list';
   arr=[{title:"This is Todo1",
         desc:"This is Todo description 1",
         
             },
             {title:"This is Todo2",
              desc:"THis is Todo description2",
            
                 },
                 {title:"This is Todo3",
                 desc:"This is Todo description3",
      
             }
            
            
            
            ]
      onSubmit(add: any)
      { 
        this.arr.push(add);
      }
       onClick(ind : any)
       { 
         this.arr.splice(ind.i,1);
       }
      

}
