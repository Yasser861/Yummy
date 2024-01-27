export async function getDetail(id){
    $('.spinner').removeClass('d-none');
    let apiResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let searchedMeal=await apiResponse.json();
    if(apiResponse.status==200){
        $('.spinner').addClass('d-none');
    }
    $('.Meal .mealImg img').attr('src',searchedMeal.meals[0].strMealThumb);
    $('.Meal .mealImg h2').html(searchedMeal.meals[0].strMeal);
    $('.Meal .MealDesc p').html(searchedMeal.meals[0].strInstructions);
    $('.Meal .MealDesc h2 .mealArea').html(searchedMeal.meals[0].strArea);
    $('.Meal .MealDesc h2 .mealCat').html(searchedMeal.meals[0].strCategory);
    $('.Meal .MealDesc .ingredients').children().eq(0).html(searchedMeal.meals[0].strIngredient1);
    $('.Meal .MealDesc .ingredients').children().eq(1).html(searchedMeal.meals[0].strIngredient2);
    $('.Meal .MealDesc .ingredients').children().eq(2).html(searchedMeal.meals[0].strIngredient3);
    $('.Meal .MealDesc .ingredients').children().eq(3).html(searchedMeal.meals[0].strIngredient4);
    $('.Meal .MealDesc .ingredients').children().eq(4).html(searchedMeal.meals[0].strIngredient5);
    $('.Meal .MealDesc .ingredients').children().eq(5).html(searchedMeal.meals[0].strIngredient6);
    $('.Meal .MealDesc .ingredients').children().eq(6).html(searchedMeal.meals[0].strIngredient7);
    $('.Meal .MealDesc .tags span').html(searchedMeal.meals[0].strTags);
    $('.Meal .MealDesc .tags .links').children().eq(0).html(`<a target="_blank" href="${searchedMeal.meals[0].strYoutube}">YouTube</a>`)
}