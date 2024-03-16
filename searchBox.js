let btn = document.querySelector("#btn")
console.log(btn);
btn.addEventListener("click", ()=>{
    let search = document.querySelector("#search").value 
    console.log(search);
    let per_page = 30
    window.fetch(`https://pixabay.com/api/?key=42745312-0dbc216778727c1f3b1ce711c&q=${search}&image_type=photo&pretty=true&per_page=${per_page}`)
    .then((data)=>data.json())
    .then((res)=>{
        for (let ele of res.hits){
            console.log(ele);
            console.log(ele.previewURL);
            let img =
            `<img src=${ele.previewURL} />`
            document.body.innerHTML += img
        }
    })
})