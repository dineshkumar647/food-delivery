const restaurants=[
 {id:"spice",name:"Spice Garden",cuisine:"South Indian · North Indian",rating:"4.8",time:"25–30 min",fee:25,emoji:"🍛",bg:"#fff0df",items:[
  {id:"s1",name:"Masala Dosa",desc:"Crispy dosa with potato masala and chutneys.",price:90,emoji:"🥞",cat:"Breakfast",veg:true},
  {id:"s2",name:"Mini Idli Sambar",desc:"Soft mini idlis served with hot sambar.",price:70,emoji:"🍘",cat:"Breakfast",veg:true},
  {id:"s3",name:"Paneer Butter Masala",desc:"Creamy tomato gravy with soft paneer.",price:180,emoji:"🍲",cat:"Main course",veg:true},
  {id:"s4",name:"Veg Fried Rice",desc:"Wok-tossed rice with fresh vegetables.",price:130,emoji:"🍚",cat:"Main course",veg:true},
  {id:"s5",name:"Gulab Jamun",desc:"Sweet milk dumplings in sugar syrup.",price:60,emoji:"🍮",cat:"Desserts",veg:true}]},
 {id:"burger",name:"Burger Hub",cuisine:"Burgers · Fast Food",rating:"4.6",time:"20–25 min",fee:20,emoji:"🍔",bg:"#ffeddf",items:[
  {id:"b1",name:"Classic Veg Burger",desc:"Crispy veggie patty with fresh lettuce.",price:110,emoji:"🍔",cat:"Burgers",veg:true},
  {id:"b2",name:"Cheese Burger",desc:"A delicious burger loaded with cheese.",price:145,emoji:"🍔",cat:"Burgers",veg:true},
  {id:"b3",name:"French Fries",desc:"Golden and crispy salted fries.",price:80,emoji:"🍟",cat:"Sides",veg:true},
  {id:"b4",name:"Peri Peri Fries",desc:"Fries tossed in spicy peri peri seasoning.",price:100,emoji:"🍟",cat:"Sides",veg:true},
  {id:"b5",name:"Chocolate Milkshake",desc:"Thick and creamy chocolate shake.",price:120,emoji:"🥤",cat:"Drinks",veg:true}]},
 {id:"pizza",name:"Pizza Corner",cuisine:"Pizza · Italian",rating:"4.7",time:"30–35 min",fee:30,emoji:"🍕",bg:"#fff0e6",items:[
  {id:"p1",name:"Margherita Pizza",desc:"Classic pizza with cheese and tomato.",price:199,emoji:"🍕",cat:"Pizza",veg:true},
  {id:"p2",name:"Farmhouse Pizza",desc:"Loaded with capsicum, onion and veggies.",price:249,emoji:"🍕",cat:"Pizza",veg:true},
  {id:"p3",name:"Garlic Bread",desc:"Toasted bread with garlic and herbs.",price:99,emoji:"🥖",cat:"Sides",veg:true},
  {id:"p4",name:"Pasta Alfredo",desc:"Creamy white sauce pasta.",price:179,emoji:"🍝",cat:"Pasta",veg:true},
  {id:"p5",name:"Cold Coffee",desc:"Chilled coffee topped with a creamy foam.",price:100,emoji:"🧋",cat:"Drinks",veg:true}]},
 {id:"biryani",name:"Biryani House",cuisine:"Biryani · Indian",rating:"4.9",time:"30–40 min",fee:25,emoji:"🍱",bg:"#fff4d9",items:[
  {id:"h1",name:"Veg Biryani",desc:"Fragrant basmati rice with vegetables.",price:150,emoji:"🍛",cat:"Biryani",veg:true},
  {id:"h2",name:"Paneer Biryani",desc:"Spiced rice with marinated paneer.",price:190,emoji:"🍱",cat:"Biryani",veg:true},
  {id:"h3",name:"Curd Rice",desc:"Comforting rice mixed with fresh curd.",price:75,emoji:"🥣",cat:"Rice",veg:true},
  {id:"h4",name:"Mango Lassi",desc:"Sweet and refreshing mango yogurt drink.",price:90,emoji:"🥭",cat:"Drinks",veg:true}]},
 {id:"cafe",name:"Cafe Delight",cuisine:"Cafe · Sandwiches",rating:"4.5",time:"15–20 min",fee:20,emoji:"🥪",bg:"#f4eadf",items:[
  {id:"c1",name:"Veg Club Sandwich",desc:"Toasted sandwich with fresh vegetables.",price:130,emoji:"🥪",cat:"Sandwiches",veg:true},
  {id:"c2",name:"Paneer Wrap",desc:"Soft wrap filled with spicy paneer.",price:145,emoji:"🌯",cat:"Sandwiches",veg:true},
  {id:"c3",name:"Cold Coffee",desc:"Chilled creamy coffee.",price:110,emoji:"☕",cat:"Drinks",veg:true},
  {id:"c4",name:"Brownie",desc:"Soft chocolate brownie.",price:85,emoji:"🍫",cat:"Desserts",veg:true}]},
 {id:"south",name:"Tiffin Express",cuisine:"South Indian · Tiffin",rating:"4.7",time:"20–25 min",fee:15,emoji:"🥘",bg:"#edf5e8",items:[
  {id:"t1",name:"Pongal",desc:"Traditional pepper and cumin pongal.",price:65,emoji:"🥣",cat:"Breakfast",veg:true},
  {id:"t2",name:"Poori Masala",desc:"Fluffy pooris with potato masala.",price:80,emoji:"🫓",cat:"Breakfast",veg:true},
  {id:"t3",name:"Onion Uthappam",desc:"Soft uthappam topped with onion.",price:75,emoji:"🥞",cat:"Breakfast",veg:true},
  {id:"t4",name:"Filter Coffee",desc:"Fresh South Indian filter coffee.",price:35,emoji:"☕",cat:"Drinks",veg:true}]}
];
let selectedRestaurant=null,activeCategory="All",cart=[];
const $=id=>document.getElementById(id);
function money(n){return "₹"+n}
function toast(s){$("toast").textContent=s;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1900)}
function renderRestaurants(){
 $("restaurantGrid").innerHTML=restaurants.map(r=>`<article class="restaurant-card" data-restaurant="${r.id}"><div class="restaurant-art" style="background:${r.bg}">${r.emoji}<span>★ ${r.rating}</span></div><div class="restaurant-details"><h3>${r.name}</h3><p>${r.cuisine}</p><div class="restaurant-meta"><span>◷ ${r.time}</span><span>Delivery ${money(r.fee)}</span></div></div></article>`).join("");
}
function openRestaurant(id){
 selectedRestaurant=restaurants.find(r=>r.id===id);activeCategory="All";
 $("menuSection").classList.remove("hidden");$("restaurants").classList.add("hidden");$("menuSection").scrollIntoView({behavior:"smooth"});
 let r=selectedRestaurant;
 $("restaurantInfo").innerHTML=`<div class="restaurant-info-line"><div class="restaurant-emoji" style="background:${r.bg}">${r.emoji}</div><div><h2>${r.name}</h2><p>${r.cuisine} · ★ ${r.rating} · ${r.time}</p></div></div>`;
 renderMenu();
}
function renderMenu(){
 let cats=["All",...new Set(selectedRestaurant.items.map(i=>i.cat))];
 $("categoryRow").innerHTML=cats.map(c=>`<button class="category-btn ${c===activeCategory?"active":""}" data-category="${c}">${c}</button>`).join("");
 let items=selectedRestaurant.items.filter(i=>activeCategory==="All"||i.cat===activeCategory);
 $("foodGrid").innerHTML=items.map(i=>`<article class="food-card"><div class="food-emoji">${i.emoji}</div><div class="food-info"><span class="veg-dot"></span><h3>${i.name}</h3><p>${i.desc}</p><div class="food-bottom"><strong>${money(i.price)}</strong><button class="add-btn" data-add="${i.id}">+ Add</button></div></div></article>`).join("");
}
function addItem(id){
 let item=selectedRestaurant.items.find(i=>i.id===id);
 if(cart.length&&cart[0].restaurantId!==selectedRestaurant.id){toast("Please finish or clear your current restaurant cart first.");return}
 let row=cart.find(x=>x.id===id);if(row)row.qty++;else cart.push({...item,qty:1,restaurantId:selectedRestaurant.id,restaurantName:selectedRestaurant.name,fee:selectedRestaurant.fee});
 renderCart();toast(item.name+" added to cart");
}
function changeQty(id,delta){let item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);renderCart()}
function totals(){let sub=cart.reduce((s,x)=>s+x.price*x.qty,0),fee=cart.length?cart[0].fee:0;return{sub,fee,total:sub+fee}}
function renderCart(){
 $("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
 $("cartItems").innerHTML=cart.length?`<p class="subtle">${cart[0].restaurantName}</p>`+cart.map(i=>`<div class="cart-row"><div class="food-emoji">${i.emoji}</div><div class="cart-row-info"><strong>${i.name}</strong><span>${money(i.price)} each</span></div><div class="qty"><button data-qty="${i.id}" data-delta="-1">−</button><b>${i.qty}</b><button data-qty="${i.id}" data-delta="1">+</button></div></div>`).join(""):`<p class="subtle" style="text-align:center;margin-top:65px">Your cart is empty.<br><br>Choose a dish to get started! 🍽️</p>`;
 let t=totals();$("subtotal").textContent=money(t.sub);$("deliveryFee").textContent=money(t.fee);$("total").textContent=money(t.total);$("checkoutTotal").textContent=money(t.total);$("checkoutBtn").disabled=!cart.length;$("checkoutBtn").style.opacity=cart.length?1:.5;
}
function showCart(){$("cartOverlay").classList.remove("hidden")}
function hideCart(){$("cartOverlay").classList.add("hidden")}
$("restaurantGrid").addEventListener("click",e=>{let c=e.target.closest("[data-restaurant]");if(c)openRestaurant(c.dataset.restaurant)});
$("foodGrid").addEventListener("click",e=>{let b=e.target.closest("[data-add]");if(b)addItem(b.dataset.add)});
$("categoryRow").addEventListener("click",e=>{let b=e.target.closest("[data-category]");if(b){activeCategory=b.dataset.category;renderMenu()}});
$("backRestaurants").onclick=()=>{$("menuSection").classList.add("hidden");$("restaurants").classList.remove("hidden");$("restaurants").scrollIntoView({behavior:"smooth"})};
$("openCart").onclick=showCart;$("closeCart").onclick=hideCart;
$("cartOverlay").addEventListener("click",e=>{if(e.target===$("cartOverlay"))hideCart();let b=e.target.closest("[data-qty]");if(b)changeQty(b.dataset.qty,Number(b.dataset.delta))});
$("checkoutBtn").onclick=()=>{if(!cart.length)return;hideCart();$("checkoutOverlay").classList.remove("hidden")};
$("closeCheckout").onclick=()=>$("checkoutOverlay").classList.add("hidden");
$("checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();if(!cart.length)return;
 let data=new FormData(e.target),name=data.get("name"),orderNo="FG"+Math.floor(10000+Math.random()*90000),t=totals();
 $("successText").textContent=`Thank you, ${name}! Your order ${orderNo} from ${cart[0].restaurantName} has been placed. Total: ${money(t.total)}. (Demo order — no real payment or delivery is processed.)`;
 cart=[];renderCart();e.target.reset();$("checkoutOverlay").classList.add("hidden");$("successOverlay").classList.remove("hidden");
});
$("doneBtn").onclick=()=>{$("successOverlay").classList.add("hidden");$("restaurants").classList.remove("hidden");$("menuSection").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"})};
renderRestaurants();renderCart();
