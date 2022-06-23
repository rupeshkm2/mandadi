'use strict';

/*

// Data needed for a later exercise


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  }

};

// assigning the array values to variables 
const arr =[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

//below is another to assning array values to multiple variable 
// de-structuring  the array 
const[x,y,z]=arr;

console.log(x,y,z);
console.log(arr);


// though we have 4 values inside categories array based on below destructuring  array declation 
// it will values accordingley , since we only declared two values (first,second) it only have two values 
const [firstVar,secondVar]=restaurant.categories;

console.log(firstVar,secondVar);


// suppose we want to assign the non sequence values from array to variable in distructuring 
// we just need to add a spce that which one we need to skip 
// here based on below we get (index 0 and index 2)

let  [firstVar1, ,secondVar1]=restaurant.categories

console.log(firstVar1,secondVar1);

// swith the values  manually 


const tempVar=firstVar1;
firstVar1=secondVar1
secondVar1=tempVar;

console.log('------after switch--------');
console.log(firstVar1,secondVar1);

// switch the value by restructring 

[firstVar1,secondVar1]=[secondVar1,firstVar1]

console.log('------after destructring switch--------');
console.log(firstVar1,secondVar1);

// element 2 from starter and element 0 from main menu 
console.log(  restaurant.order(2,0));



// destructure assignment from function 
const [starter,main]=restaurant.order(2,0);

console.log(starter,main);




// nested array destructering 

const nested =[2,4,[5,6]];

// skipping the position:1
const [i, ,j]=nested;
console.log(i,j);

// what if we want to all individual details 

const [m, ,[p,q]]=nested;
console.log(m,p,q);

// we also can set default values for the value when we are extracting 

const arrSmall=[8,9];

const [var1,var2,var3]  =arrSmall;

console.log(var1,var2,var3);// you will receive var3 as undefined as array has only two values 
// this use case useful if we dont know whow may values present inside array 

// assigning default values , here we are assigning the defailt values as 1 for all variables 
// we can assign to only variable too instead all 
const [var4=1,var5=1,var6=1]  =arrSmall;

console.log(var4,var5,var6);



//-----------------------class 104 -----------------------------

// destructuring objects 



const restaurantNew = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

   // orderDelivery:function(obj){
   //   console.log(obj);
   // },
   // another way 
   // strring starterIndex default value to 1 
   orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
    
};


// passing object to function parameter 
// the advantage is no need to match the order of the parameter sequence 

restaurantNew.orderDelivery({
  time:22.30,
  address :'raspberry ct',
  mainIndex:2,
  starterIndex:2,
})


// calling below with out  starterIndex
restaurantNew.orderDelivery({
  time:22.30,
  address :'raspberry ct',
  mainIndex:2
  //starterIndex:2,
})




// the one  difference here in object destruction with array destruction  we need to give variable names same as property name in object that we going to retrive 
// here we can refer any method from object , no need to use space to skip the value , sice we directley name the 
// variable name as property name , we can declare any position variable 
const {name,openingHours,categories}=restaurantNew;

console.log(name,openingHours,categories);

// what if we want the different variable names insted property names 
// propertyname: neame that we want 
const {name:NameVar,openingHours:openingHoursVar,categories:categoriesVar}=restaurantNew;
console.log(NameVar,openingHoursVar,categoriesVar);

// default values 
// assigned default empty [] , since no property menu in restaurantNew it assigned with empty 
// else we get undefined error message 
const{Menu=[],starterMenu:starterMenuVar=[]}=restaurantNew;

console.log(Menu,starterMenuVar);


// mutating variables / switch variables 

let a=111;
let b=999;

const obj={
  a:23,
  b:7,
  c:14
};

// since a and b alreasy declared above with (let )

//{a,b}=obj; // this will error our , since we add { curty brace js expert code block 


console.log(a,b);
// we just need to put inside parathasys to work 
({a,b}=obj)

console.log(a,b);

// nested objects 

const {fri}=openingHours;
console.log(fri);

// further destrucure 
const {fri:{open,close}}=openingHours;

console.log(open,close);

// giving varibale names instead property names 

const {fri:{open:avar,close:bvar}}=openingHours;

console.log(avar,bvar);



//-----------------class 105 ------------------------

// spread operator 

const arr=[7,8,9];

// add few eliments to this existing array 

const badNewArr=[1,2,arr[0],arr[1],arr[2]];

console.log(arr);
console.log(badNewArr);

// we can achive this above operation in much better way by spread operatot 
// here in spread operator we have ... to refresent all the elements in array 
const newArr=[1,2,...arr];
console.log(newArr);  
console.log(...newArr); // bring elements individually 

const restaurantNew1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

          orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
       
     orderPasta: function(ing1,ing2,ing3){
       console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
     }
};




// adding new item to mainMenu at the end 
// please note here we are creating new array and not manupulating the restaurantNew1.mainmenu
const newMenu=[...restaurantNew1.mainMenu,'Gnocci'];
console.log(newMenu);

// coppy array 

const mainMenucopy=[...restaurantNew1.mainMenu];
console.log('mainMenucopy',mainMenucopy);

// join two arrays or more 


const arrayJoin =[...restaurantNew1.mainMenu,...restaurantNew1.starterMenu]
console.log(arrayJoin);


// iterables : iterables are array , strings,maps,sets but not objects 


// since string is alos a iterable we can use spread to strings 
const str='jonas';
const letters=[...str];
console.log(letters);
console.log(...letters);
//console.log(`${...str} is first name  `); // this will not work here 


const letterNew =[...str,' ' ,'.R', ,'M'];
console.log(letterNew);

const ingredients=[prompt('let\'s make pasta! ingredient 1?'),prompt('let\'s make pasta! ingredient 2?'),prompt('let\'s make pasta! ingredient 3?')];

console.log(ingredients);

//now call the function 

restaurantNew1.orderPasta(ingredients[0],ingredients[1],ingredients[2]);

// we can in this with spread operaot in much easy way 

restaurantNew1.orderPasta(...ingredients)


// from 2018 iterables alos work with objects eventhough objects are not iterable 

const restaurent ={
  name : 'chipotle',
  year :1987,
  location : 'NY'
}

const newRestaurent ={...restaurent,timeopen:9}
console.log(newRestaurent);

const newRestaurentCopy={...newRestaurent};
console.log(newRestaurentCopy);

//const exampleArr =[1,2,arr]; // please note this is not a spread 
//console.log(exampleArr);


// please note below concat and abobe spread are different 
// concat is to concat two arrays , where as spread is to add few eliments to existing arrrry
//const exampleArrNew  =[1,2]; // please note this is not a spread 
*/

/*
const exmpEr =[3,4];
const concArr=exampleArrNew.concat(exmpEr)
console.log(concArr);




// ---------------------------class 106 ------------------------------

// Rest patterns and parameters 


// rest patteren is exactley smme like spread operator same syntax
// but it actiallu does the opposit of spread operaot 
// while spread is unpack the eliment in aray wheer as rest is to combilne elements into aray 

// below is spread because ... is right side of = 
const arr=[1,2,...[3,4]];
console.log(arr);


// below is rest  because ... is left side of =
// here we are creaing 3 new variable )a,b,restArray) and assigning the  values 
const [a,b,...restArry]=[1,2,3,4,5,6];

console.log(a,b,restArry);

const restaurantNew2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

          orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
       
     orderPasta: function(ing1,ing2,ing3){
       console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
     },

     orderPizza : function(mainIngredient,...otherIngrediants){

        console.log(mainIngredient);
        console.log(otherIngrediants);

     }
};



const [pizza, ,risotto,...otherFood]=[...restaurantNew2.mainMenu,...restaurantNew2.starterMenu];

console.log(pizza,risotto,otherFood);

// rest element must be last element 

// below will give error  because we added variable after rest element 
// so there can be only one rest element 

//const [pizza, ,risotto,...otherFood,fries ]=[...restaurantNew2.mainMenu,...restaurantNew2.starterMenu];



// rest in objects 


const { sat,...weekDay}=restaurantNew2.openingHours;
console.log(weekDay);
console.log(sat);

// functions 

const add=function(...numbers){
//console.log(numbers);
let sum=0;
for( let i=0;i<=numbers.length-1;i++ )

  sum=sum+numbers[i];
  console.log(sum);

}


add(2,3);
add(2,3,4,5,6);
add(3,4,5,6,7,8,9);

// calling function with variable 
const x=[23,5,7];

add(...x);



restaurantNew2.orderPizza('chese','onions','olives','spinatch');


restaurantNew2.orderPizza('chese');


//---------------------------class 107 ---------------------------

//short circuiting (&& and ||)

// if the first values is true it immidiatley  return first value 
console.log(3||'jonas');
console.log(''||'jonas1');
console.log(true||0);
console.log(undefined||null);// undefined is false value 

console.log(undefined||0|''||'hello'||23||null);

// use any datatype 
// they can retun any databtype
// short circuting 

const restaurantNew2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPizza : function(mainIngredient,...otherIngrediants){

    console.log(mainIngredient);
    console.log(otherIngrediants);
  }
};

// restaurantNew2.numGuests  is undefined so it will go to else 
const guests1=restaurantNew2.numGuests ? restaurantNew2.numGuests:10;
console.log(guests1);




const guests2=restaurantNew2.numGuests||11;

console.log(guests2);
console.log(0||12);

console.log('-------------------AND operator ----------------');

// return the first false value 
console.log(0&&'jonas');

// when all the vakue are true it simply return last value 
console.log(7&&'jonas');


console.log('hello'&&23&&null&&'jonas');



if (restaurantNew2.orderPizza){
  restaurantNew2.orderPizza('mushrooms','spinach')
}


// we can call this way , id orderPizza exist then evaluate the secong after &&
restaurantNew2.orderPizza&&restaurantNew2.orderPizza('mushrooms','spinach')

// ---------------------classs 108 -------------------

// nullish coalescing operator (??)

console.log('---------coalescing----------');

// since 0 considered as false value and in some our businedd need loke below 
// when the number 0 we should consider as true , we can achieve by coalescing
restaurantNew2.numGuests=0;

const guests3=restaurantNew2.numGuests||11;
console.log(guests3);
//nullish values are only null and undefined , it desn't include (0 , '')
const guestCorrect=restaurantNew2.numGuests??13;
console.log(guestCorrect);



// -----------------------class 109 --------------------------

// logical assignment operator 



const rest1 ={
  name:'capr1',
  numGuests:20
};


const rest2 ={
  name:'La pizza',
  Owner:'Giovanni Rossi'
};


// add the numGuests which doesn't have 

//rest1.numGuests=rest1.numGuests ||10;
//rest2.numGuests=rest2.numGuests ||10;

console.log(rest1);
console.log(rest2);

// another way to assigne the values with or (||) operator , below is exactley same as above 


rest1.numGuests||=20;
rest2.numGuests||=20;


console.log(rest1);
console.log(rest2);


const rest3 ={
  name:'capr1',
  numGuests:0
};

// since 0 is a false value it took the next value in or condition 
//rest3.numGuests||=20;

//console.log('rest3',rest3);

rest3.numGuests??=20;

console.log('rest3 with 0 correct',rest3);


// and operator 
// WILL RETURN LAST RTUE VALUE 

const rest4 ={
  name:'La pizza',
  Owner:'Giovanni Rossi'
};

//rest4.Owner=rest4.Owner&&'<ANONYMOUS>';
//rest1.Owner=rest1.Owner&&'<ANONYMOUS>';
// ANOTHER WAY TO DO

rest4.Owner &&='<ANONYMOUS>';

console.log('REST4',rest4);
console.log('REST1',rest1);


//---------------------------CODING CHALLENGE ---------------------


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



//  1. create 2 two arrays with playes 
const[players1,players2]= game.players;

console.log(players1,players2);


//2. first player is goal keeper and remaing all fieldplayers 

const [gk,...fieldPlayers]=players1;
console.log(gk,fieldPlayers);

//3 create one aray with all the players 

const allPlayers=players1.concat(players2);
console.log('player3',allPlayers);

// another way to do is 
const allPlayers1=[...players1,...players2]

console.log(allPlayers1);



// 4  .added new player to players 1 

const players1Final=[...players1,'thiago','coutinho','Periscic'];

console.log(players1Final);


//5 . create 3 new variables based on the ODD values
// we are extracting rhe values from object game 
// here draw is alias name 

const{odds:{team1,x: draw,team2}}=game
console.log(team1,draw,team2);



//6 .

const printGoals=function(...players){
  //console.log(players);

  console.log(`${players.length} goals scored`);

};


printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

printGoals('Lewandowski', 'Gnarby')

//printGoals(game.scored); // this is not the correcr way to do 


printGoals(...game.scored);


//7 .


// this logical operator && will continue execute sceond operator if the first one is true 


 team1<team2 && console.log('team1 most likely to win ');

 team1>team2 && console.log('team2 most likely to win ');

 // --------------------------------class 111 --------------------------

// looping arrays : The for of loops 

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

          orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
       
     orderPasta: function(ing1,ing2,ing3){
       console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
     }
};





const menu=[...restaurant.starterMenu,...restaurant.mainMenu];

// in moraml for loop you need to initialze a variable and set a counter and increatse the couter every time 
// this is a lot of work 

// the alternative is for of loops , so you no nned to above one's , so it is much simple one



for(const item of menu)

console.log(item);


// what if we need the currect index and not only current value 

// entries() is an JS arry method 
for(const item1 of menu.entries())
{
  console.log(item1);
  
}


//console.log(menu.entries());

console.log([...menu.entries()]);

for(const item1 of menu.entries())
{
  console.log(`${item1[0]+1}: ${item1[1]}`);
  
}


console.log('----------with destructuring------');

// new 2 variables i,el with the menu.entries arry 
// we are simplifying the above solutuin 

console.log('----------display i and el------');
// please note entries js method  will create an array , with index and value 

for(const [i,el] of menu.entries())
{
  console.log(i);
  console.log(el);

  
}

for(const [i,el] of menu.entries())
{
  console.log(`${i+1}: ${el}`);
  
}




//---------------------------class 112------------------------------------------

// Enhanced object literals 

const  openingHours= {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const weekDays=['mon','tue','wed','thur','fri','sat','sun'];


// compute the property names is  another enhancement , in this case we want to 
// create new property like above thu in openingHours , without manually typing 


const  openingHours1= {
  [weekDays[3]]: { // this is the new way to do 
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2+4}`]: {  // we can do this way too as an example 
    open: 0, // Open 24 hours
    close: 24,
  },
};


console.log(openingHours1);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   // if we want to add openingHours object we need to write below code 
   //openingHours1:openingHours,
   // with ES6  enhacement we can directley write the object name without declaring like below
   openingHours,
   // the one disadvanatge is if we chnage the object name  openingHours , we need to chnage here as weel 


   //  the new enhancement to the the methods is , in below function declaration example 
   // we need to write keyword function and : after variable name 
    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

     // new way to do is below order1 
     
     order1(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

          orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
       
     orderPasta: function(ing1,ing2,ing3){
       console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
     }
};


console.log(restaurant);


//-----------------------------class 113 -------------------------------------------
// optional chaining (?)



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thur: { // this is the new way to do 
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {  // we can do this way too as an example 
      open: 0, // Open 24 hours
      close: 24,
    },
  },

   //  the new enhancement to the the methods is , in below function declaration example 
   // we need to write keyword function and : after variable name 
    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

     // new way to do is below order1 
     
     order1(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

          orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
       
     orderPasta: function(ing1,ing2,ing3){
       console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
     }
};

// get opening hours of our restaurent for monday 


console.log(restaurant.openingHours.mon); // this is undefined because property mon doesn't exit 

// if suppose if we receivig response from API and there could be multiple multiple restaurents 
// and not all of them open on monday 
// so we dont that this perticula restaurent has open on moday to refer directley


//console.log(restaurant.openingHours.mon.open ); // this will error out 

// so the one of the option is to cehck before refering 
if (restaurant.openingHours.mon) 
console.log('monday ',restaurant.openingHours.mon.open );

if (restaurant.openingHours.fri) 
console.log('friday ', restaurant.openingHours.fri.open );


// what if the restaurent doesn't have openingHours property 
// in this case we need to cehck both openingHours and mon 


if (restaurant.openingHours && restaurant.openingHours.mon)
console.log('monday two checks  ',restaurant.openingHours.mon.open );

// so this above process will be haevay if the object has more properties ,
// so we need to check everything 

// ES20 intraduced this new feature called optional chaining  to avoing above unnecessary work 

// below is with optional chaining 

// if you see above when we call with open it got error out 
// now with this chnage  when the property mon exist then only it look for open ,
// else retuen undefined instead error 

console.log('optional chaining', restaurant.openingHours.mon?.open);

// we can have multiple optional chaining 


console.log('multiple optional chaining mon', restaurant.openingHours?.mon?.open);

console.log('multiple optional chaining fri', restaurant.openingHours?.fri?.open);

// example 

const days =['mon','tue','wed','thur','fri','sat','sun'];

// want to find out loop over this days array and findout which day is restaurent open 

for (let day of days )
{
  let open1=  restaurant.openingHours[day]?.open??'closed';
 
   console.log(`restaurent opned on ${day} at ${open1}`);
}

// apply this optional chaining on methods 
// if order methos exist then call else display message 


console.log(restaurant.order?.(0,1)??'method deos not exist');

// since below method not exist it returnd message 
console.log(restaurant.order12345?.(0,1)??'method deos not exist');


// optional chaining on arrays 
console.log('-------------array optional chaining---------');
const users=[
  {name:'rupesh',
   email :'rup@gmail.com'}
];

console.log(users[0]?.name??'user array is empty');

// by using optional chaining  we can simplify the if else condition 




//-------------------------class 144------------------------------------
// loop objects , object keys, values , entries 





const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thur: { // this is the new way to do 
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {  // we can do this way too as an example 
      open: 0, // Open 24 hours
      close: 24,
    },
  },

   //  the new enhancement to the the methods is , in below function declaration example 
   // we need to write keyword function and : after variable name 
    order : function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

     // new way to do is below order1 
     
     order1(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
          },

          orderDelivery:function({starterIndex=1,mainIndex,time,address}){
       console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`);
     },
       
     orderPasta: function(ing1,ing2,ing3){
       console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
     }
};


// so this will compute the object to array 
// by this way we also can check how may propertied in the object 

// property names 
const properties=Object.keys(restaurant.openingHours);
console.log(properties);

let openStr=`we are open on ${properties.length} days `;
console.log(openStr);

for(const day of Object.keys(restaurant.openingHours))
{
  console.log(day);
}


// else 
console.log('--------another way -------------');
// insted direct call use the varibale that we computed 

for(const day of properties)
{
openStr+=`${day} ,`
}

console.log(openStr);


// what if we want to property values
// this time we use VALUES with object 

console.log(Object.values(restaurant.openingHours));

// we have used this entries js  method before with arrays to get the array index 
// in arrays we use as arrayname.entries

// but for here in object we need to pass the array inside entries method 
//  like  entries(array) // here aray is that we computed from object 

// entries of the object 
const entries=Object.entries(restaurant.openingHours);
console.log(entries);
// so in this array we have keys and values 

// so we destructure the  entries array with key and values 

for (const [key,value] of entries)
{
  //console.log(x);
  console.log(`on ${key} we open ${open} and close at ${close}`);
}

// further destructure the values object


for (const [key,{open,close}] of entries)
{
  //console.log(x);
  console.log(`on ${key} we open ${open} and close at ${close}`);
}









//----------------------------coding challenge class 115-----------------------



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



// 1. 

// entries methos will give both index and values 
for (let [i,el] of game.scored.entries())
{
//  console.log(i , el);
  console.log(`Goal ${i+1} : ${el}`);
}

//2 .

let average=0;
// we just need values to calculate avg 
for (const ival of  Object.values(game.odds))
{
console.log(ival);
average+=ival;
//console.log('total ',average);
}
average=average/Object.values(game.odds).length;
console.log('average is ', average);

//3. 

console.log(`odd of ${game.team1} : ${game.odds?.team1}`);
console.log(`odd of ${game.team2} : ${game.odds?.team2}`);
console.log(`odd of draw : ${game.odds?.x}`);

console.log('--------item 3 -------------');

for ( const [team , odd] of Object.entries(game.odds))
{
  let  teamStr= game[team] ? game[team]: 'drae'
  console.log(`odd of ${teamStr} : ${odd}`);
}

// in above the team destructure variable will retuen (team1 , x , team2)
// so we know a way to get property values passing name as objectname[propertyname]
// and anothe way is objectname.propertyname 





//------------------------------class 116 -----------------------------------------

// sets 

// set is an another data structure like array and objects and it was intraduced in ES6 
// sets can never have duplicates , so all the values inside set are unique 
// set can hold mixed datatype values 

const ordersSet = new Set(['pasta','pizza','pizza','ice cream','curry']);

// so you can see only unique by below console though it has duplicates 
console.log(ordersSet);

console.log(new Set('rupeshr'));

// get the size of set 

console.log(ordersSet.size);

// check if certail element in set , has is an js method 

console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));


// add new elements to a set 

ordersSet.add('tamato');
console.log(ordersSet);

// delete element 

ordersSet.delete('curry');
console.log(ordersSet);

// how to retrive values from set

//  console.log(ordersSet[1]); // this doesn't work 

// we cant get the values from set , and no nned to get the values 
// we have set methods to het any element (has method)  etc 

// below is to delete all the element in set 
//ordersSet.clear();
//console.log(ordersSet);

// sets are alos iterables

for(const order of ordersSet)
console.log(order);


// sets also  used to remove duplicates from array 
// example 

const staff=['waiter','chef','manager','chef','waiter']
console.log(staff);

const staffUnique= new Set(staff);

console.log(staffUnique); // but this result is an object and want out result to be an array 

// so do this way with spread operatot (...)  and []

const staffUnique1= [...new Set(staff)];

console.log(staffUnique1);

console.log(new Set('rupeshr').size); // length of unique letters 





//-------------------------------class 117 ----------------------------------

// MAPS 

// maps are more usefull than sets 

// map is a data structure that we can use map values to keys 
// just like object the data stored in key value pairs 
// the big difference is , in MAPS the keys can have any type 
// in object the keys are always strings 


const rest =new Map(); // empty map 

// fill up map // add elements 
rest.set('name','Square Cut');
rest.set(1,'India');
rest.set(2,'usa');

console.log(rest);


rest.set('categories',['italian','vegitarian','vegan']);
console.log(rest);

// we can add in below as well 

rest.set('phone',123456789).set('email','test@gmail.com')
console.log(rest);
rest.set(true,'we are open').set(false ,'we are closed ').set('open',11).set('close',23)

console.log(rest);


// read data from MAP 

console.log(rest.get('phone'));
console.log(rest.get(true));
// console.log(rest.get('true')); // undefined error 


// example 

const time =21;

console.log( rest.get(time>rest.get('open') && time < rest.get('close')) )
// by above will work like below 
//rest.get(21>11 && 21<23)
// rest.get(true)
// we are open 


// chekc if map contain certain key 


console.log(rest.has('phone'));


// delete elments 

rest.delete('email');
console.log(rest);

// size 

console.log(rest.size);

// remove all the elements 

//console.log(rest.clear);

// use arrays as keys 


rest.set([1,2],'test');
console.log(rest);
// to get the data based on this array 


console.log(rest.get[1,2]);// undefined 

// so to make it work 

const arr=[1,2]
rest.set(arr,'testwithcorrect')
console.log(rest.get(arr));

// we can add DOM too
rest.set(document.querySelector('h1'),'Heading');

console.log(rest);



//---------------------------class 118 -------------------------------------

// maps iteration

// before we populated the map by using set method , however we have another way to populate 


const question =new Map([
  ['question','what is the best programming lauguage ?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'Correct '],
  [false,'Tray Again']
])

console.log(question);

// convert object to maps 

// example 
const restaurant ={
  name :'squqre cur',
  mobile :'123456',
  email : 'rup@gmail.com'
}

console.log(restaurant);
console.log('log ',Object.entries(restaurant)); // converted to maps 

const restMap=new Map( Object.entries(restaurant))
console.log('restMap is ', restMap);

// iteration 
// since map has both key and value , we destructure directley below 

for(const [key,value] of question)
{
  // print the values if key is number 

  if (typeof key ===  'number')
  console.log(`Answer ${key}:${value}`);;
}


const answer=Number(prompt('your answer'));
console.log( answer);

console.log(question.get('correct'));

console.log( question.get( question.get('correct')=== answer) );


// convert map to an array 
console.log([...question]);
// we also can conver kays and values to array 

console.log([...question.keys()]);
console.log([...question.values()]);


*/


//---------------------------class 119 ------------------------------

// which data structure to use 

//------------------------------class 120 --------------------------------

// coding challenge 


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. 

console.log(gameEvents);

const events=[...new Set(gameEvents.values())];
console.log(events);

// 2. 

gameEvents.delete(64);
console.log(gameEvents);


//3 

console.log(`an event happend , on average ${90/gameEvents.size} minutes `);

// get the last time as a bonus coding test 
// to do this first get get the all the kay values and covert ot array 
// and get the last index values form array 
const time =[...gameEvents.keys()]
console.log(time);
// pop method is delete the last element and return the value 
console.log(time.pop());

//4 

for( const[min,event] of  gameEvents)
{
  const half=min<=45?'FIRST HALF':'SECOND HALF'
console.log(`[${half}] ${min} : ${event}`);
}















