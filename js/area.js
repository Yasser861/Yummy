import * as detail from './detail.js';
export async function getArea(){
    $('.spinner').removeClass('d-none');
    let apiResponse=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let allArea=await apiResponse.json();
    if(apiResponse.status==200){
        $('.spinner').addClass('d-none');
    }
    return allArea;
}
export async function filterArea(area){
    $('.spinner').removeClass('d-none');
    let apiResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    let ar=await apiResponse.json();
    if(apiResponse.status==200){
        $('.spinner').addClass('d-none');
    }
    let areaBox=``;
    for (let i = 0; i < ar.meals.length; i++) {
        areaBox+=`
        <div class="meal col-md-3">
            <p class="text-white d-none">${ar.meals[i].idMeal}</p>
                <div class="innerMeal position-relative overflow-hidden">
                    <img class="w-100" src="${ar.meals[i].strMealThumb}" alt="meal">
                    <div class="desc w-100 overflow-hidden">
                        <h4 class="text-black">${ar.meals[i].strMeal}</h4>
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