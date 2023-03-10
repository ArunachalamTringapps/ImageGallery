const flexone=document.getElementById("flex-one")
const flextwo=document.getElementById("flex-two")
const flexthree=document.getElementById("flex-three")
const thumbnail=document.getElementById("thumbnail")
const imgsetter=document.getElementById("imgsetter")
const imagepage=document.getElementById("imagepage")
window.onclick=function(event){
    if(event.target==thumbnail){
        thumbnail.style.display="none"
    }
}

const pictures=[
        "https://images.pexels.com/photos/3512848/pexels-photo-3512848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/15849726/pexels-photo-15849726.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/14947134/pexels-photo-14947134.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5256400/pexels-photo-5256400.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2676399/pexels-photo-2676399.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2304791/pexels-photo-2304791.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600"
];
let count=0;
let index;




document.addEventListener("keyup",(event)=>{
    // console.log(event.key);
    if(event.key==" "){
        // console.log("you pressed space key");
        for (index=count;index<count+1;index++) {
            flexone.style.backgroundImage=`url(${pictures[index]})`
            console.log(pictures[index]);
            if(index==pictures.length-2){
            
            flextwo.style.backgroundImage=`url(${pictures[index+1]})`
            flexthree.style.backgroundImage=`url(${pictures[0]})`
            }
            else if(index==pictures.length-1){
                flextwo.style.backgroundImage=`url(${pictures[0]})`
                flexthree.style.backgroundImage=`url(${pictures[1]})`
            }
            else{
            flextwo.style.backgroundImage=`url(${pictures[index+1]})`
            flexthree.style.backgroundImage=`url(${pictures[index+2]})`
            }
            // count=index+1
            // console.log(index+1)
        }
        if(index>=pictures.length){
            count=0
        }
        else if(index>=pictures.length-1 && index<=pictures.length+1){
            count=0
        }
        else{
            console.log(index);
            console.log(index+1);
            console.log(index+2);
        count=index+2
        }
    }
    else{

    }


})



flexone.addEventListener("click",()=>{
    thumbnail.style.display="flex";
    console.log(flexone.style.backgroundImage.slice(5,-2));
    const backgroundone=flexone.style.backgroundImage.slice(5,-2)
    imgsetter.src=`${backgroundone}`
    

})


flextwo.addEventListener("click",()=>{
    thumbnail.style.display="flex";
    console.log(flextwo.style.backgroundImage.slice(5,-2));
    const backgroundtwo=flextwo.style.backgroundImage.slice(5,-2)
    imgsetter.src=`${backgroundtwo}`

})



flexthree.addEventListener("click",()=>{
    thumbnail.style.display="flex";
    console.log(flexthree.style.backgroundImage.slice(5,-2));
    const backgroundthree=flexthree.style.backgroundImage.slice(5,-2)
    imgsetter.src=`${backgroundthree}`

})