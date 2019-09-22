// function getOption() {
//     var obj = document.getElementById("mySelect");
//     document.getElementById("demo").innerHTML = 
//     obj.options[obj.selectedIndex].text;
//   }


const getFilms = () => {
    const filmUrl = "https://ghibliapi.herokuapp.com/films"
    fetch(filmUrl)
        .then(response => response.json())
        .then(response => {
            //console.log(response)
            getFilmTitle(response);
        })
        .catch(error => {
            console.log("Error! Something is not working!")
        })

}

getFilms()

const getFilmTitle = (response) => {
    let filmArray = [];
    for (let i = 0; i < response.length; i++) {
        let titles = response[i].title
        filmArray.push(titles)
    }
    sendTitles(filmArray)

    console.log(filmArray)
}

const myParent = document.querySelector("#container-for-select-box")
const selectList = document.getElementById("mySelect");

selectList.id = "mySelect";
const sendTitles = (filmArray) => {
    for (let i = 0; i < filmArray.length; i++) {
        let option = document.createElement("option");
        option.text = filmArray[i];
        selectList.appendChild(option);
        //selectList.addEventListener("change", getValues)
        //getValues(response)
    }
}

function getOption() {
    let selectBox = document.getElementById("mySelect");
    document.getElementById("demo").innerHTML = 
    selectBox.options[selectBox.selectedIndex].value;
    getInfo(selectBox)
}



// OR 

//  const GetOption(){
//     let selectBox = document.getElementById("mySelect"){
//         document.getElemebtselectBox[selectBox].description

//     }
// }


const getInfo = (selectBox) => {
    const { title, release_date, description } = selectBox;
    let info = {
        title: title,
        release_date: release_date,
        description:description
    }
    return info
}




//if (event.target.matches(selectBox.selectedIndex)) {
//   document.getElementById("demo").innerHTML = 
//   selectBox.options[selectBox.selectedIndex].text;






function showMessage() {
    let newComments = document.getElementById("reviews").value;
    let comment = document.createElement('p');
    comment.innerHTML = newComments;
}