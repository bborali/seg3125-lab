import chicken from "../images/roastedchicken.jpg";
import cheesecake from "../images/cheesecake.jpg";
import bolognese from "../images/bolognese.png";
import brulee from "../images/brulee.jpg";
import soup from "../images/soup.jpg";
import pizza from "../images/pizza.jpg";
import juicy from "../images/juicy.jpg";
import homemade from "../images/homemade.jpg";
import ww from "../images/ww.jpg";
import gravy from "../images/gravy.jpg";
import greek from "../images/greek.jpg";
import fruitsalad from "../images/fruitsalad.jpg";
import smoothie from "../images/smoothie.jpg";



const initState={
    recipes: [
        {name:"Roasted Chicken", car_category:"trending",category:"poultry", ingredients:"- 5 lb whole chicken,- 2 sprigs fresh rosemary,- 2 sprigs fresh thyme, - 1 onion peeled and quartered",steps:"1. Brine the chicken according to recipe directions. Pat the chicken dry with paper towels after it's done brining.,2. Preheat the oven to 400 degrees F.,3. Tuck the chicken wings underneath the breast. Stuff the chicken cavity with the rosemary and thyme sprigs with onion and lemon., 4. Let the chicken rest for 10 minutes before carving. Serve with pan drippings.", image:chicken},
        {name:"Raspberry Cheesecake", car_category:"trending",category:"dessert", ingredients:"1,1,1",steps:"2,1,1" , image:cheesecake },
        {name:"Spaghetti Bolognese", car_category:"trending",category:"pasta", ingredients:"1,1,1",steps:"3,1,1" , image:bolognese },
        {name:"Creme Brulee", car_category:"trending",category:"dessert", ingredients:"1,1,1",steps:"4,1,1" , image:brulee },
        {name:"Minestrone Soup",car_category:"healthy", category:"soup",ingredients:"1,1,1", steps:"5,1,1" , image: soup},
        {name:"Pepperoni Pizza",car_category:"quarantine", category:"pastry",ingredients:"1,1,1", steps:"6,1,1" , image:pizza },
        {name:"Juicy Pesto Pasta", car_category:"quarantine",category:"pastry",ingredients:"1,1,1", steps:"7,1,1" , image: juicy},
        {name:"Easy Hommade Bread", car_category:"quarantine",category:"baked goods",ingredients:"1,1,1", steps:"8,1,1" , image:homemade },
        {name:"Whole Wheat Bread",car_category:"quarantine", category:"baked goods",ingredients:"1,1,1", steps:"9,1,1" , image:ww },
        {name:"Roasted Gravy Chicken", car_category:"quarantine",category:"poultry", ingredients:"1,1,1",steps:"10,1,1" , image:gravy },
        {name:"Easy Greek Salad", car_category:"healthy",category:"salad", ingredients:"1,1,1",steps:"11,1,1" , image: greek},
        {name:"Summer Fruit Salad ", car_category:"healthy",category:"salad",ingredients:"For the dressing:,  - 1/4 c. honey,  - 1/4 c. freshly squeezed orange juice,  - Zest of 1 lemon,,For the salad:, - 1 lb. strawberries hulled and quartered, - 2 apples peeled and chopped,  - 3 kiwis peeled and sliced", steps:"Add fruit to a large bowl and pour over dressing and toss gently to combine., Chill until ready to serve." , image:fruitsalad},
        {name:"Green Smoothie", car_category:"healthy",category:"smoothie",ingredients:"1,1,1", steps:"13,1,1" , image: smoothie},


    ]
};

const rootReducer=(state=initState, action)=> {
    // if(action.type === 'SUBTRACT_BALLANCE') {
    //     let newPost = state.posts.map(post => {
    //       if(action.id === 'Account ' + post.id) {
    //         post.ballance = post.ballance - action.amount;
    //       }
    //       return post;
    //     });
    //     return {
    //       ...state, 
    //       posts: newPost
    //     }
    //   }
    return state;
};

export default rootReducer