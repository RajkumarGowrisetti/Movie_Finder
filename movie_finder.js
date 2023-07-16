const api="fe89d172";
let movieNameRef=document.getElementById("movie-name");
let searchBtn=document.getElementById("search-btn");
let result=document.getElementById("result");

//fectching data from api;

function find_movie(){
    if(movieNameRef.value==""){
        alert("Please Enter a Movie Name!!");
       }else{
        getMovie();
        movieNameRef.value=""
    }
}

 async function getMovie(){
       let MovieName=movieNameRef.value;
       const response=await fetch(`http://www.omdbapi.com/?t=${MovieName}&apikey=${api}`);
       var data=await response.json();
       console.log(data);

       const poster=data.Poster;
       const title=data.Title;
       const year=data.Year;
       const idmbrating=data.imdbRating;       
       const rated=data.Rated;
       const runtime=data.Runtime;
       const genre=data.Genre;
       const cast=data.Actors;
   if(data.Response =='False'){
       alert("Data Not Found!!");
   }else{
      result.innerHTML=`
      <div class="info">
        <img src="${poster}" class="poster">
            <div class="title-name">
                <h2>${title}</h2>
                <div class="rating">
                    <img src="yellowstar.jpg" height="20px" width="20px">
                    <h4>${idmbrating}</h4>
                </div>
                <div class="details">
                  <span>${rated}</span>
                  <span>${year}</span>
                  <span>${runtime}</span>
                </div>
             <div class="genre">
                 <div>
                     ${genre}
                 </div>
             </div>

            </div>
     </div>
     <h3>Plot:</h3>
     <p>${data.Plot}</p>
     <h3>Director:</h3>
     <p>${data.Director}</p>
     <h3>Cast:</h3>
     <p>${data.Actors}</p>
      `;
   }
    

 }