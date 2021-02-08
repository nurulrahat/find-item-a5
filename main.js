//const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`



const inputText = inputs => {
    const item = document.getElementById("inputId").value;
    console.log(item);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
    fetch(url)
        .then(repo => repo.json())
        .then(data => searchItem(data))
}
const searchItem = findItem => {
    //console.log(findItem)
    const mainContainer=document.getElementById("container2");
    const createRowDiv=document.createElement("div");
    createRowDiv.className="row justify-content-around" ;
    const findItemArray = findItem.meals;
    for (let i = 1; i < findItemArray.length; i++) {
        mainContainer.innerHTML="";
        
    }
    findItemArray.forEach(findItemParameter => {
        const meals = findItemParameter;
       // console.log(meals);

        // createMenuDiv(meals);
        // const findItemArray=JSON.parse(findItem);
        // const findItemArray=findItem.meals;
        // console.log(findItemArray)
        // for (let i = 0; i < findItemArray.length; i++) {
        //     const eachMeal =findItemArray[i];
        //    console.log(eachMeal); 
        // }
        // const createMenuDiv = eachItemsArr => {
        //     const createItem = document.createElement('div');
        // createItem.className = "itemCls";
        // const createDivItems = `<img src="${meals.strMealThumb}" alt="">
        // <h3>${meals.strMeal}</h3>`
        // createItem.innerHTML=createDivItems;
        // const itemContainerDiv= document.getElementById("container2");
        // itemContainerDiv.appendChild(createItem);
        
        const createColDiv= document.createElement("div");
        //console.log(createColDiv);
        createColDiv.className="col-3";
        createColDiv.id="colDivHtml";

        const createDivItems =`
        <img src="${meals.strMealThumb}" alt="">
        <h3>${meals.strMeal}</h3>
        `
        //console.log(createDivItems);
        //const colDivHtml = document.getElementById("colDivHtml");
        // addDiv.appendChild(createDivItems);
        createColDiv.innerHTML = createDivItems;
        createRowDiv.appendChild(createColDiv);
        mainContainer.appendChild(createRowDiv);
        
        //Each Details
        
        // }

    })
    createColDiv.addEventListener("click",console.log("clicked"))
}

// const createMenuDiv = eachItemsArr=>{
// const createDivItems=`<div class="col-3">
// <img src="${eachItemsArr.strMealThumb}" alt="">
// <h3>${eachItemsArr.strMeal}</h3>
// </div>`
// const addDiv=document.getElementById("addDiv")
// addDiv.innerHTML=createDivItems;
// }


// const searchItem = findItem => {
//     //console.log(findItem.meals);
//     const mealsItem=findItem.meals;
    // for (let i = 0; i < mealsItem.length; i++) {
    //     const eachMeal = mealsItem[i];
    //    console.log(eachMeal); 
    // }
    // findItem.forEach(mealVar => {
    //     const meals=mealVar.strName;
    //     console.log(meals)
    // });
//}