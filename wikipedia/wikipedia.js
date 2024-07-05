let input=document.getElementById("searchInput");
let searchresultse1=document.getElementById("searchResults");
let spinner=document.getElementById("spinner");
function creareandappend(result){
    let resultitem=document.createElement("div");
    resultitem.classList.add("result-item");
    searchresultse1.appendChild(resultitem);
    let {link,title,description}=result;
    let titleele=document.createElement("a");
    titleele.href=link;
    titleele.textContent=title;
    titleele.target="_blank";
    titleele.classList.add("result-title");
    resultitem.appendChild(titleele);
    let titlebreakeE1=document.createElement("br");
    resultitem.appendChild(titlebreakeE1);

    let urlE1=document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href=link;
    urlE1.textContent=link;
    urlE1.target="_blank";
    resultitem.appendChild(urlE1);
    
    let titlebreakeE2=document.createElement("br");
    resultitem.appendChild(titlebreakeE2);

    let dis=document.createElement("p");
    dis.textContent=description;
    resultitem.appendChild(dis);   
    }
function displayResult(search_results){
   // let result=search_results[0] first element only
//    for(let result of search_results)
//     creareandappend(result);
    spinner.classList.toggle("d-none")
    for(let i=0;i<search_results.length;i++){
        creareandappend(search_results[i]);
    }
}
function searchwikipedia(event){
    if(event.key=="Enter"){
        searchresultse1.textContent="";
        spinner.classList.toggle("d-none")
        let searchInput=input.value;
        //document.write(searchInput);
        let url="https://apis.ccbp.in/wiki-search?search="+searchInput;
        let options={
            method:"GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
           // console.log(jsondata);
           let {search_results}=jsondata;
           displayResult(search_results);
        })
    }
}
input.addEventListener("keydown",searchwikipedia);
//object destructring