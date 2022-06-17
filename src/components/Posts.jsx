import {Post} from './Post';
import { useState, useEffect } from 'react';
import './Posts.css';

export const Posts = ()=>{
    const[posts,setPosts] = useState([]);
    const [isSorting,setIsSorting] = useState(0);
    const [reachedBottom,setReachedBottom] = useState(0);
   
    useEffect(()=>{
       const fetchPosts = async()=>{
     fetch('https://www.reddit.com/r/aww.json')
    .then(res=> res.json())
    .then(data=> setPosts((prev)=> [...prev,...data.data.children.slice(0,25)]))
    .catch(err => console.log(err));
       }
       fetchPosts();
    },[reachedBottom])

     window.onscroll = (e)=>{
       if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        setReachedBottom(prev => prev + 1);
        }
     }

     const sortMostUps = (array) => {
        for(let i = 0; i < array.length; i++){
           for(let j = 0; j < array.length - i -1; j++){
                 if(array[j].data.ups < array[j+1].data.ups){
                    let temp = array[j];
                     array[j] = array[j+1];
                     array[j+1] = temp;
                    }
                }
            }
             setIsSorting(prev => prev + 1);
             setPosts(array)     
     }
     
     const sortLeastUps = (array) => {
        for(let i = 0; i < array.length; i++){
           for(let j = 0; j < array.length - i -1; j++){
               if(array[j].data.ups > array[j+1].data.ups){
                   let temp = array[j];
                   array[j] = array[j+1];
                   array[j+1] = temp;
                }
                }
            }
 
            setIsSorting(prev => prev + 1);
            setPosts(array)      
     }
 
  return (
     <div>
           <div className='sorting-container'>
            <h4 style={{fontSize:'1.3rem'}}>Sort By</h4>
            <button className="ups" onClick={()=> sortMostUps(posts)}>Most Ups</button>
            <button className="downs" onClick={()=> sortLeastUps(posts)}>Least Ups</button>
           </div>
         {
             posts.map( (p,i) =>  <Post key = {i} post = {p}/> )
         }         
     </div>
     )  
}