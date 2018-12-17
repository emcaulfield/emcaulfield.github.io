// <!-- let projectname = $(this).text();
// const template = `
//   <div>
//     <h2>${projectName}</h2>
//     <p class="summary">Here's the project summary</p>
//   </div>
// `
// $('.pop-up').append(template); -->

const about = [
  {
  img: "../images/intro.svg",
  recipetitleimg: "1",
  name: "Introduction",
  ingredients: "2",
  directions: "Discovering ways to revitalize leftovers will allow you create new delicious meals with ingredients you already have. With a few simple steps and ingredients on hand, the meal you first picked up or prepared will tranform into a new tasty creation."},

{
  img: "../images/safetyfirst.svg",
recipetitleimg: " ",
name: "Safety First",
ingredients: "",
directions:"<p>Most leftovers from dishes made with dairy, meats, cheeses, vegetables, and fruits should be eaten within, at most, a few days of the original meal. Food must be safely stored, handled, and, if necessary, reheated to prevent contamination and bacteria growth. Although unlikely, it is possible to follow all the rules and still have food turn unexpectedly. If it looks funny, smells funny, or, if you manage to get there, tastes funny, then don’t risk it and don’t eat it. Saving food is important, but your health comes first.</p>
<h3>KEEP FOOD OUT OF THE “DANGER ZONE”</h3>
<p>Bacteria thrive between 40° F and 140° F. To prevent bacterial growth, hot foods being served should be kept at 140° F or warmer. Hot meal leftovers must be refrigerated within 2 hours from when they’ve begun to cool. All perishable prepared foods that have been left at room temperature for more than 2 hours (1 hour if the temperature is over 90° F) should be discarded as they are no longer considered safe to eat. Cold perishable food should be kept at 40° F or below.</p>
<p>Leftovers should be covered/stored in closed, tightly sealed containers, or wrapped in airtight packaging. Doing this with all your leftovers will help keep bacteria, odors, and unwanted flavors out of your food and will help your leftovers retain more moisture.</p>
<h3>STORING LEFTOVERS</h3>
<p>Most leftovers can be kept in the refrigerator for 3 to 4 days or frozen for at least 3 to 4 months. Frozen leftovers often remain safe to eat for even longer, but can lose moisture and flavor over time.</p>
<h3>REHEATING LEFTOVERS</h3>
<p>Leftovers should reach 165°F when reheated. Liquids, like sauces and soups, that need reheating should be brought to a rolling boil before being served. Covering leftovers while they are reheating helps ensure no areas are left uncooked.</p>"
},

{
img: "url: "../images/intro.svg",
recipetitleimg: "",
name: "Preservation Methods",
ingredients: "",
directions:"<p>Extend the life of your foods with a few common methods of food preservation. Most of these techniques work best with fresh foods, but freezing - arguably the easiest method of them all - can be utilized with many prepared foods as well. Make sure to research each process before trying them at home. Attention to detail and proper storage are essential to keeping your foods safe, long-lasting, and tasty.</p>
<p><strong>Canning</strong> involves heating and then vacuum sealing foods in special glass jars. When done at home, canned foods usually have a shelf of about a year before opening. Canning requires reusable canning jars, rings, and one-time use sealing lids.</p>
<p><strong>Freezing</strong> requires chilling foods to 0°F or colder.  All foods, including fruits, vegetables, meats, seafood, grains, nuts, dairy, eggs, and prepared foods can be preserved through freezing. Some food items, like raw veggies and fruits, will not return to their original crisp, crunchy state once frozen, but they will remain edible. There are still plenty of uses for these foods, though! Depending on the item, freezing can successfully preserve foods anywhere from 1-12 months.</p>
<p><strong>Drying</strong> is the process of dehydrating foods to inhibit mold, yeast, and bacteria growth. Some techniques require special equipment and others are relatively easy. When dried and stored at home with less sophisticated equipment, dried foods will last 6 months - 1 year.</p>
<p><strong>Fermenting</strong> encourages the growth of alcohol and organic acids to inhibit microbial growth. Fermented products include wine, sauerkraut, kimchi, and yogurt. Many fermented foods can be produced without any special equipment and will usually last in cold storage for 2-6 months depending on the kind of food.</p>
<p><strong>Pickling</strong> requires immersing foods in a solution containing salt, acid, or alcohol. Most methods require no special equipment. Pickling is often combined with another method, such as fermenting, canning, or refrigerating. When stored properly, pickled foods will usually last 5-6 months.</p>"
}
];

const essentials = [
  {
img: "url: "../images/essentials.svg",
  recipetitleimg: "",
  name: "The Essentials",
  ingredients: "",
  directions: "<p>All of the recipes in this book rely on your uneaten prepared foods and a few of these “essential” items. This list is a stripped-down, bare-minimum compilation of ingredients and tools that will make working with leftovers fun and easy without contributing to additional food waste, as many of of these items have long shelf-lives if stored properly.</p>
  <p>Grocery shopping should be easy, and usually perimeter/farmer’s market focused - fresh produce, dairy, meats, fish - with visits to the aisles only for your must-haves and when you find yourself running low on pantry necessities.</p>
  <p>The items here are a recommendation to help you get started and should assist you in jazzing up the remnants of an uneaten dish and making quick meals, snacks, and baked goods even when leftovers are scarce. Feel free to add or remove items from this list, and replace ingredients with ones that fit your tastes, traditions, and dietary restrictions.</p>
  <p>Swapping canned items for fresh foods, for example, is wonderful, but in an effort to prioritize eliminating food spoilage and adopting a “work with what you have” cooking mentality, foods that last longer are easiest.</p>
  <p>Although there are very few listed here, fruits and vegetables are the key to a maintaining a healthy, well-balanced diet. Incorporate them into your diet and always have fresh fruits and veggies of your choice on hand.</p>"},

  {
img: "",
  recipetitleimg: "../images/pantry.svg",
  name: "pantry",
  ingredients: "
  <ul>
    <li class="list-header">The Basics</li>
    <li>Salt</li>
    <li>Ground black pepper</li>
    <li>Extra virgin olive oil</li>
    <li>Vegetable oil</li>
    <li>Apple cider vinegar</li>
    <li>Granulated sugar</li>
    <li>Confectioners sugar</li>
    <li>Brown sugar</li>
    <li>Honey</li>
    <li>Active yeast</li>
  </ul>
  <ul>
    <li class="list-header">Produce</li>
    <li>Onions</li>
    <li>Potatoes</li>
    <li>Garlic</li>
  </ul>
  <ul>
    <li class="list-header">Bread, Rice and Grains</li>
    <li>Bread</li>
    <li>White or brown rice</li>
    <li>Old-fashioned rolled oats</li>
    <li>Pasta</li>
    <li>Breadcrumbs (make this!)</li>
  </ul>
  <ul>
    <li class="list-header">Snacks</li>
    <li>Dried fruit: raisins, cranberries, or cherries</li>
    <li>Nuts or Seeds: sunflower, walnuts, pecans, almonds</li>
    <li>Peanut, almond, cashew, hazelnut, or sunflower butter</li>
    <li>Chocolate</li>
    <li>Graham crackers</li>
  </ul>,
  directions: "
];

console.log(about[0].directions);
