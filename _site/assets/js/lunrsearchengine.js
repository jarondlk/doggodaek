
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/doggodaek/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/doggodaek/about",
    "title": "DogGoDaek the culinary adventures in the animal kingdom",
    "body": "Welcome to DogGoDaek, a blog dedicated to sharing honest reviews and culinary adventures in the animal kingdom. Here at DogGoDaek, we are a community of food-loving animals who are passionate about discovering the best dishes that the world has to offer. From savory to sweet, we've tasted it all and we're here to share our honest opinions on the best (and sometimes the not-so-great) meals that we've encountered. Whether you're a foodie looking for new and exciting flavors to try, or just looking for some inspiration for your next meal, we've got you covered. Follow us as we explore the many flavors of the animal kingdom and discover new and tasty treats to try. Thank you for joining us on this delicious journey. We can't wait to share our culinary adventures with you! Get in touch!: You can follow the authors on twitter here for Alfyn and here for Mango. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/doggodaek/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/doggodaek/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                       Welcome to DogGoDaek!                              :               Welcome to DogGoDaek! We are food-loving animals who are passionate about sharing our culinary experiences with the world. From savory to sweet, we’ve tasted it. . . :                                                                                                                                                                               DogGoDaek                                    01 Jan 2023                                                                                                                      All Stories:                                                                                             Copper International Buffet                           1 2 3 4 5                      :       I recently visited Copper International Buffet, located at The Sense Pinklao, and I was thoroughly impressed by the wide selection of dishes on offer. The buffet had a very high. . . :                                                                                       DogGoDaek                    09 Jan 2023                                                                                                                            Poulet Thailand Centralworld                           1 2 3 4 5                      :       If you’re in the mood for some delicious French cuisine, then you’ll want to check out Poulet, located in Central World. :                                                                                       DogGoDaek                    07 Jan 2023                                                                                                                            Welcome to DogGoDaek!              :       Welcome to DogGoDaek! We are food-loving animals who are passionate about sharing our culinary experiences with the world. From savory to sweet, we’ve tasted it all and we’re here to. . . :                                                                                       DogGoDaek                    01 Jan 2023                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/doggodaek/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/doggodaek/copper/",
    "title": "Copper International Buffet",
    "body": "2023/01/09 - I recently visited Copper International Buffet, located at The Sense Pinklao, and I was thoroughly impressed by the wide selection of dishes on offer. The buffet had a very high price point, but it was definitely worth it for the sheer variety of international cuisines available. For starters, I particularly enjoyed the truffle soup and croissant as well as the fresh oysters with seafood chili sauce. Both dishes were delicious and really set the tone for the rest of the meal.  The main course had a lot to offer, with a range of options including wagyu steak, lamb steak, tom-yam grouper fish steak, wagyu sushi, fried crab padthai, and angel hair carbonara. It was difficult to choose, but everything I tried was cooked well.  The dessert selection was equally impressive, with highlights including the chocolate lava cake served with berries, cheese egg tart, salted egg French toast, vanilla milk pudding, and creme brulee. I was truly in heaven! The drinks selection was also top-notch, with on-tap jasmine tea and Taiwanese milk tea available.  Overall, I would give Copper International Buffet a rating of 8. 5/10. The price was very high, but the quality of the food and the wide selection of dishes more than justified the cost. I would definitely recommend this buffet for anyone looking for a truly indulgent dining experience. Link: https://goo. gl/maps/JBu4jXVQ65CwVwr69 "
    }, {
    "id": 6,
    "url": "http://localhost:4000/doggodaek/poulet/",
    "title": "Poulet Thailand Centralworld",
    "body": "2023/01/07 - If you’re in the mood for some delicious French cuisine, then you’ll want to check out Poulet, located in Central World. Upon arriving, we were greeted by the friendly staff and seated at a cozy table. We started off with the French onion soup and garlic bread for the starter. The soup was rich and flavorful, and the garlic bread was the perfect accompaniment. For the main course, we decided to try the half chicken with mushroom sauce and the truffle mushroom risotto. Both dishes were incredibly tasty and the mushroom sauce on the chicken was particularly noteworthy. The truffle mushroom risotto was a decadent and indulgent dish, and the flavors of the truffle really shone through, but was slightly too salty.  Although, I’d like to add that the chicken was only lukewarm when served and that table service was lacking, can’t order through staff, and pay at counter? It’s very unconventional for French cuisine, or any restaurant charging this price. Overall, we would give Poulet a rating of 7. 5/10. The food was excellent, but the prices were on the high side. However, for a special occasion or a night out with friends, we would definitely recommend Poulet. The atmosphere was sophisticated and the service was top-notch. If you’re a fan of French cuisine, this restaurant is definitely worth a visit. Link: https://goo. gl/maps/PtXQnwT7Nw42tPxR9 "
    }, {
    "id": 7,
    "url": "http://localhost:4000/doggodaek/welcome/",
    "title": "Welcome to DogGoDaek!",
    "body": "2023/01/01 - Welcome to DogGoDaek! We are food-loving animals who are passionate about sharing our culinary experiences with the world. From savory to sweet, we’ve tasted it all and we’re here to share our honest opinions on the best (and sometimes the not-so-great) dishes that we’ve encountered. Follow us as we explore the many flavors that the animal kingdom has to offer and discover new and tasty treats to try. Whether you’re a foodie or just looking for some inspiration for your next meal, we’ve got you covered. Join us on our tasty journey and let’s dig in! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});