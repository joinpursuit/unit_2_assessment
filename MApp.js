document.addEventListener('DOMContentLoaded', () => {
   fetch('https://ghibliapi.herokuapp.com/films') //we want the data here before user interacton
   .then(response => response.json())

   .then(dataObj => {
      fetchMovie(dataObj)

      // fetchMovie(response)
   })

   // .catch(err =>{
   //    console.log("Nah Dawg", err)
   // })

   eventListeners()
})

var iDontBelong = [null] //API response 
 //common endpoint
function fetchMovie(film){  //code initially existed at the end
   let button3 = document.querySelector('#sumnToWatch')
   for(let i of film){
   let filmData = document.createElement('option')
      filmData.innerText = i.title

      button3.appendChild(filmData)

      iDontBelong.push(i.id)
      }
   }

   //No idea on how to add default clear empty option
const eventListeners = () => {
   // let button = document.querySelector('#ama')
   //    button.addEventListener('click', fetchMovie)

   let button2 = document.querySelector('#submit')
      button2.addEventListener('click', postReview)
   
   let button3 = document.querySelector('#sumnToWatch')
      button3.addEventListener('change', (myFunctionName) => {
         let empDiv = document.querySelector('#ugh')
         let long = iDontBelong[myFunctionName.target.selectedIndex] //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
         fetch(`https://ghibliapi.herokuapp.com/films/${long}`)
            .then(response => 
               response.json()
                )

            .then(dataObj => {
               while(empDiv.firstChild) { //thanks for the empty Div clue up, reminds me of the poke API
                  empDiv.removeChild(empDiv.firstChild) //had oldChild here for some reason, still remains unclear
              }
               let title = document.createElement("h3")
                  title.innerText = dataObj.title

               let release = document.createElement("p")
               release.innerText = dataObj.release_date

               let desc = document.createElement("p")
                  desc.innerText = dataObj.description
    
                //if(long === undefined){
               if(long === null){
               title.innerText = ""

               release.innerText = ""
      
               desc.innerText = ""
               }
               empDiv.appendChild(title)

               empDiv.appendChild(release)

               empDiv.appendChild(desc)
            
})
})
}
const postReview= () =>{
}

   

  

// }




// let movieList = document.querySelector('#sumnToWatch') 
// movieList.appendChild(filmData)

// let name = document.createElement('h3')
//    name.innerText = response.title;

// let release = document.createElement('p')
//    release.innerText = response.release_date
   


// const postReview = () => {
//    console.log('send review', reviewText)

//    let dataToSend = {
//       user: "RougeLight",
//       text: reviewText
//    }
   
// }
