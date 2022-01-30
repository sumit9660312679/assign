const input = document.querySelector("input");
const btn = document.querySelector("button");
const table = document.querySelector("table");
const header = document.querySelector("h2");

 
const api = (country_name) => {
  key = `http://universities.hipolabs.com/search?country=${country_name}`;
  fetch(key)
    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        console.log(data);
     
      for (i in data) {
        let university = data[i].name;
        let domain = data[i].domains;
        let state = data[i]["state-province"];
        let country = data[i].country;
        let head = ["University", "Domain","State"];
        let info=[university,domain,state];
        let tr = document.createElement("tr");
        for(let i in info){
            let td=document.createElement("td");
            td.innerText=info[i];
            tr.appendChild(td);
            td.classList.add("str");
        }

        
         header.innerText = country;
         table.appendChild(tr);
        
      }
    });
};

btn.addEventListener("click", (e) => {
  table.innerHTML="";
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");

th1.innerText = "University";
th2.innerText = "Domain";
th3.innerText = "State";
 
table.append(th1,th2,th3);
  country_name = input.value;
  api(country_name);
});