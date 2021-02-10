//const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`

const inputText = inputs => {
    const item = document.getElementById("inputId").value;
    // console.log(item);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
    fetch(url)
        .then(repo => repo.json())
        .then(data => searchItem(data))
}
const searchItem = findItem => {
    //console.log(findItem)
    const mainContainer = document.getElementById("container2");
    mainContainer.innerHTML = "";
    const itemDiv = document.getElementById("eachDetailsId");
    itemDiv.innerHTML = "";
    const createRowDiv = document.createElement("div");
    createRowDiv.className = "row justify-content-around";
    const findItemArray = findItem.meals;

   
    findItemArray.forEach(findItemParameter => {
        //console.log(findItemParameter);
        const meals = findItemParameter;
        console.log(meals);
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
        const createColDiv = `
        <div class="col-3 bg-light" id="colDivHtml" onclick="itemId('${meals.idMeal}')">
        <img src="${meals.strMealThumb}" alt="">
        <h3>${meals.strMeal}</h3>
        </div>`

        //createColDiv.innerHTML = createDivItems;
        createRowDiv.innerHTML += createColDiv;
        mainContainer.appendChild(createRowDiv);   

    })

}

const itemId = id => {
    const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url2)
        .then(repo => repo.json())
        .then(data => itemDetails(data))
}

itemDetails = item => {
    const itemDiv = document.getElementById("eachDetailsId");
    itemDiv.innerHTML = "";
    const itemArray = item.meals[0];
    const itemList = `
        <img src="${itemArray.strMealThumb}" alt="">
        <ul>
        <li>Category: ${itemArray.strCategory}</li>
        <li>Origin ${itemArray.strArea}</li>
        <li>Ingredient: 1.${itemArray.strIngredient1}</li>
        <li>Ingredient: 2.${itemArray.strIngredient2}</li>
        <li>Ingredient: 3.${itemArray.strIngredient3}</li>
    </ul>`
    itemDiv.innerHTML = itemList;
    // console.log(itemList);

}


