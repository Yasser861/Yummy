import * as area from './area.js';
import * as category from './category.js';
import * as ingredient from './ingredient.js';
import * as search from './search.js';
import * as validate from './validate.js';
let allArea= await area.getArea();
let allCategory=await category.getCategory();
let allIngredient=await ingredient.getIngredient()
$(document).ready(function(){
    search.getByName('');
})
function showArea(){
    let areaBox=``;
    for (let i = 0; i < allArea.meals.length; i++) {
        areaBox+=`
        <div class="meal col-md-3 text-center">
            <i class="fa-solid fa-map-location text-white fs-1"></i>
            <h2 class="text-white">${allArea.meals[i].strArea}</h2>
        </div>
        `
    }
    $('#Meals .container .row').html(areaBox);
}
//===============================================================
function showCategory(){
    let areaBox=``;
    for (let i = 0; i < allCategory.categories.length; i++) {
        areaBox+=`
        <div class="meal col-md-3">
                <div class="innerMeal position-relative overflow-hidden">
                    <img class="w-100" src="${allCategory.categories[i].strCategoryThumb}" alt="meal">
                    <div class="desc w-100 overflow-hidden d-flex flex-column">
                        <h4 class="text-black">${allCategory.categories[i].strCategory}</h4>
                        <p class="text-black">${allCategory.categories[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    $('#Meals .container .row').html(areaBox);
}
//===============================================================
function showIngredient(){
    let areaBox=``;
    for (let i = 0; i < 20; i++) {
        areaBox+=`
        <div class="meal col-md-3">
                <div class="innerMeal position-relative overflow-hidden">
                    <i class="fa-solid fa-drumstick-bite text-white"></i>
                    <h4 class="text-white">${allIngredient.meals[i].strIngredient}</h4>
                    <p class="text-white">${allIngredient.meals[i].strDescription}</p>
                </div>
            </div>
        </div>
        `
    }
    $('#Meals .container .row').html(areaBox);
}

//===============================================================
document.querySelector('#searchName').addEventListener('input',function(e){
     search.getByName(this.value);
     document.querySelector('.search').style.minHeight='100px';
})
document.querySelector('#searchLetter').addEventListener('input',function(e){
    search.getByLetter(this.value);
    document.querySelector('.search').style.minHeight='100px';
})

//===============================================================
$('#openBtn').click(function(){
    $('#closeBtn').removeClass('d-none');
    $('#openBtn').addClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    
    $('aside').animate({left:-left},500);
});
$('#closeBtn').click(function(){
    $('#closeBtn').addClass('d-none');
    $('#openBtn').removeClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    $('aside').animate({left:left},500);
})
$('#area').click(function(){
    showArea();
    $('#Meals').removeClass('d-none');
    $('.search').addClass('d-none');
    $('.contact').addClass('d-none');
    $('#closeBtn').addClass('d-none');
    $('#openBtn').removeClass('d-none');
    $('.Meal').addClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    $('aside').animate({left:left},500);
    $('.meal').click(function(e){
        let target=$(e.currentTarget).find('h2').html();
        area.filterArea(target);
    })
})
$('#category').click(function(){
    $('#Meals').removeClass('d-none');
    $('.search').addClass('d-none');
    $('.contact').addClass('d-none');
    showCategory();
    $('#closeBtn').addClass('d-none');
    $('#openBtn').removeClass('d-none');
    $('.Meal').addClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    $('aside').animate({left:left},500);
    $('.meal').click(function(e){
        let target=$(e.currentTarget).find('h4').html();
        category.filterCat(target);
    })
})
$('#ingredients').click(function(){
    $('#Meals').removeClass('d-none');
    $('.search').addClass('d-none');
    $('.contact').addClass('d-none');
    showIngredient();
    $('#closeBtn').addClass('d-none');
    $('#openBtn').removeClass('d-none');
    $('.Meal').addClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    $('aside').animate({left:left},500);
    $('.meal').click(function(e){
        let target=$(e.currentTarget).find('h4').html();
        ingredient.filterIng(target);
    })
})
$('#search').click(function(){
    $('.search').removeClass('d-none');
    $('#Meals').addClass('d-none');
    $('.contact').addClass('d-none');
    $('#closeBtn').addClass('d-none');
    $('#openBtn').removeClass('d-none');
    $('.Meal').addClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    $('aside').animate({left:left},500);
})
$('#contact').click(function(){
    $('section.contact').removeClass('d-none');
    $('#Meals').addClass('d-none');
    $('.search').addClass('d-none');
    $('#closeBtn').addClass('d-none');
    $('#openBtn').removeClass('d-none');
    $('.Meal').addClass('d-none');
    let offset= $('aside .navs').offset();
    var top = offset.top;
    var left = offset.left;
    $('aside').animate({left:left},500);
})
// =============================================================
$('.contact form input').keypress(function(){
    if(validate.validate()){
        $('#Submit').removeClass('disabled');
    }else{
        $('#Submit').addClass('disabled');
    }
})