const btne1 = document.getElementById('btn');
const jokee1 = document.getElementById('joke');
const apikey = "zee7aF+s2QusLxOF1m800Q==Dh0mYujU8Vl5zA1j";
const options = {
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    }
}
const apiurl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
 async function getjoke(){

    try{
        jokee1.innerText = "Updating!....";
        btne1.disabled = true;
        btne1.innerText = "Loading!...";
        const response = await fetch(apiurl,options);
        const data =  await response.json();
        btne1.disabled = false;
        btne1.innerText = "Tell Me A Joke ";
    
        jokee1.innerText = data[0].joke;

    }
    catch(error){
        jokee1.innerText = "An error happened , try again later";
        btne1.innerText = "Tell Me A Joke ";
        console.log(error);
    }
   
}
btne1.addEventListener("click",getjoke);