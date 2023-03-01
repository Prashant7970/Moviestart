function carousel(){
  
    let imageArr=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6845/1376845-h-d0e066aa0374","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218"," https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1300/1351300-h-57705cab5962","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6"]
    let image=document.createElement("img")
    image.src=imageArr[0]
    image.style.width="100%"
    image.style.height="30em"
   document.querySelector("#carousel").append(image)
    let i=1;
    setInterval(function(){
       
        if(i==imageArr.length){
            i=0
        }
        image.src=imageArr[i]
        image.style.width="100%"
        image.style.height="30em"
       document.querySelector("#carousel").append(image)
     
        i++;

    },3000)


}
carousel();

async function searchMovies(){

let load= document.getElementById("loader-div")
load.style.display="block";





    let movie_name=document.getElementById("movie_name").value;
url=`https://www.omdbapi.com/?apikey=f3d5c71f&s=${movie_name}`

try{
    let milgaya= await fetch(url)

    let data= await milgaya.json()
    let  actualData=(data.Search);
    
    appendMovies(actualData)

}
catch (err) {
console.log(err);
}


// milgaya.then((haa)=>{

//     let data=haa.json()
//     data.then(function(success){
       
//     })
//     .catch(function(error){

//     })
   
// })
// .catch((naa)=>{

// })



}

function appendMovies(data){
    let load= document.getElementById("loader-div")
    load.style.display="none";

    let movies_div=document.getElementById("movies")
    movies_div.innerHTML=null
data.forEach((el) => {
    let div=document.createElement("div")
let name=document.createElement("p")
name.innerText="Name: "+el.Title;
let year=document.createElement("p")
year.innerText="Release: "+el.Year;
let img=document.createElement("img")
img.src=el.Poster;
div.append(img,name,year)
movies_div.append(div)

    
});


}