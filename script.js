

async function getData(){
  let name = document.getElementById("inputNum").value;
let res = await fetch(`https://breakingbadapi.com/api/characters?name=${name}`);
let data = await res.json();
//  console.log(data);
data.forEach(datas=>{
    console.log(datas.name);
    console.log(datas.img);
    console.log(datas.nickname);
    console.log(datas.occupation[0]);
    console.log(datas.portrayed);
    console.log(datas.status);
    console.log(datas.char_id);

    document.getElementById("display").innerHTML = `<div class="card mb-3 mt-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
      <img src= ${datas.img} class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name : ${datas.name}</h5>
        <p class="card-text">Nick Name : ${datas.nickname}</p>
        <p class="card-text">Occupation : ${datas.occupation[0]}</p>
        <p class="card-text">Portrayed : ${datas.portrayed}</p>
        <p class="card-text">Status : ${datas.status} </p>
      </div>
    </div>
  </div>
  </div>`

});
    



}
