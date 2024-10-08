const url="https://quotes-api-self.vercel.app/quote";

let quote=document.querySelector("blockquote");
let btn=document.querySelector(".quote");
let author=document.querySelector(".author-name");
let tweet=document.querySelector(".post")
let copy=document.querySelector(".copy");


async function getQuotes() {
    try{
        let quoteData=await axios.get(url);
        quote.innerText=quoteData.data.quote; 
        author.innerText=quoteData.data.author

    } catch(e){
        console.log(e)
    }
    
}
btn.addEventListener("click",function(){
    quote.innerText="Loading..."
    author.innerText="Loading..."
    setTimeout(() => {
        getQuotes();
        
    }, 300);
})

window.addEventListener("load",function(){
     quote.innerText="Loading..."
     author.innerText="Loading..."
    getQuotes();
})
function post(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText}   ------by ${author.innerText}`);
}
tweet.addEventListener("click",function(){
    post();
});

