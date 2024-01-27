import * as detail from './detail.js';
export async function getCategory(){
    $('.spinner').removeClass('d-none');
    let apiResponse=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let allCategory=await apiResponse.json();
    if(apiResponse.status==200){
        $('.spinner').addClass('d-none');
    }
    return allCategory;
}
export async function filterCat(category){
    $('.spinner').removeClass('d-none');
    let apiResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    let cat=await apiResponse.json();
    if(apiResponse.status==200){
        $('.spinner').addClass('d-none');
    }
    let areaBox=``;
    for (let i = 0; i < cat.meals.length; i++) {
        areaBox+=`
        <div class="meal col-md-3">
            <p class="text-white d-none">${cat.meals[i].idMeal}</p>
                <div class="innerMeal position-relative overflow-hidden">
                    <img class="w-100" src="${cat.meals[i].strMealThumb}" alt="meal">
                    <div class="desc w-100 overflow-hidden">
                        <h4 class="text-black">${cat.meals[i].strMeal}</h4>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    $('#Meals .container .row').html(areaBox);
    $('#Meals').removeClass('d-none');
    $('.meal').click(function(e){
        $('#Meals').addClass('d-none');
        $('.search').addClass('d-none');
        let id = $(e.currentTarget).children().eq(0).html();
        detail.getDetail(id);
        $('.Meal').removeClass('d-none');
    })
}