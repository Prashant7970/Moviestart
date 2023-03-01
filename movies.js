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


let moviedata=[
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        name:"Baghi 3",
        release :"17 July 2019",
        rating: " 9.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        name:"chhichhore",
        release :"17 July 2021",
        rating: " 8.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1714/1121714-v-fd6318f27562",
        name:"Hate Story2",
        release :"18 june 2021",
        rating: " 7.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        name:"Ms Dhoni",
        release :"20 oct 2020",
        rating: " 6.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v",
        name:"Total Dhamaal",
        release :"17 dec 2019",
        rating: " 5.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
        name:"Super30",
        release :"17 sept 2019",
        rating: " 5.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        name:"Baghi 3",
        release :"17 July 2019",
        rating: " 9.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        name:"chhichhore",
        release :"17 July 2021",
        rating: " 8.0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1714/1121714-v-fd6318f27562",
        name:"Hate Story2",
        release :"18 june 2021",
        rating: " 7.0"
    }
];
localStorage.setItem("movies",JSON.stringify(moviedata))
function append(data){
    let load=document.getElementById("loader-div")
    load.style.display="none"
    let movies=document.getElementById("movies")
    movies.innerHTML=null;
    data.forEach(function(el) {
        let h4=document.createElement("h4")
h4.innerText= "Name: "+el.name;
let p=document.createElement("p")
p.innerText= "Release: "+el.release;
let p2=document.createElement("p")
p2.innerText= " IMDb Rating: "+el.rating;
let pic=document.createElement("img")
pic.src=el.image;
let div=document.createElement("div")
div.className="cards";
div.append(pic,h4,p,p2)

movies.append(div) 
    
    });
}

function ASC(){
    let sortData=moviedata.sort(function(a,b){
        return a.rating-b.rating;
    })
    append(sortData)
}
function DSC(){
    let sortData=moviedata.sort(function(a,b){
        return b.rating-a.rating;
    })
    append(sortData)
}
let getmeData= new Promise(function(resolve,reject){

       


    setTimeout(function(){
    let data=moviedata;
   if(data!= null){
    resolve(data)
   } else {
    reject("Error: Server could not get movies data")
   }

    },1000)
})

getmeData.then(function(success){
append(success)

})
.catch(function(error){
console.log(error);

})

let card=document.querySelector(".cards")
card.addEventListener("mouseOver",function(){
    let p=document.querySelector("p")
    p.style.display="block"
})