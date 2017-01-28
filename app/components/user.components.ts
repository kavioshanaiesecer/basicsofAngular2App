import { Component } from '@angular/core';
import {PostsService} from './services/posts.service';

@Component({
    moduleId:module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers:[PostsService]

})
export class UserComponent{ 
  name : string;
  email : string;
  address : address;
  hobbies : string[];
  showHobbies : boolean;
  clickmessage = '';
  posts:Post[];
 

constructor(private PostsService : PostsService){
    this.name = 'Kaveendra';
    this.email = 'kaveendra.oshan@gmail.com';
    this.address = {
         street: '12 Main Street',
         city: 'Kotte',
         country: 'Sri Lanka'
    }
    this.hobbies = ['Music','Movies','Sports'];
    this.showHobbies = false;

    this.PostsService.getPosts().subscribe(posts => {
        //console.log(posts);
        this.posts = posts;
    });


}
toggleHobbies(){

    if(this.showHobbies == true){
        this.showHobbies = false;
    }
    else{
    console.log('show');
    this.showHobbies = true;
    }
}

addHobby(hobby : string){

    this.hobbies.push(hobby);
}

onClickMe(i :  number){
    //this.clickmessage = i;
    this.hobbies.splice(i,1);
    
}

}

interface address{
    street : string;
    city : string;
    country :string;
}

interface Post{
    id : number;
    title : string;
    body : string;
}

