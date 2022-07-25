import React, {Component} from "react";

export default class FoodBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            fruits: [
                {
                    name: 'orange',
                    calory: 65,
                    img: "https://www.kindpng.com/picc/m/156-1560262_orange-slice-png-high-quality-image-illustrator-orange.png",
                },
                {
                    name: 'apple',
                    calory: 81,
                    img: "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
                },
                {
                    name: 'chocolate milk',
                    calory: 208,
                    img: "https://funmoneymom.com/wp-content/uploads/2021/03/Chocolate-Milkshake-square.jpg",
                },
                {
                    name: 'noodles',
                    calory: 159,
                    img: "https://avegtastefromatoz.com/wp-content/uploads/2022/01/Noodle-steps-FI.jpg",
                },
                {
                    name: 'banana',
                    calory: 105,
                    img: 'https://cookifi.com/blog/wp-content/uploads/2018/06/banana-3.jpg',
                },
                {
                    name: 'grapes',
                    calory: 114,
                    img: "https://www.thespruceeats.com/thmb/9avSwgtRFDY30AwHHn5NaEH93TI=/1333x1000/smart/filters:no_upscale()/what-are-grapes-5193263-hero-01-80564d77b6534aa8bfc34f378556e513.jpg",
                },
                {
                    name: 'pizza',
                    calory: 188,
                    img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
                },
                {
                    name: 'momo',
                    calory: 95,
                    img: "https://www.thespruceeats.com/thmb/MumRfdA1gevlZn_JxeKZK7urVCE=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
                },
                {
                    name: 'chicken',
                    calory: '300',
                    img: "https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900",
                },
                {
                    name: "biriyani",
                    calory: 502,
                    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
                  },
                  {
                    name: "roti",
                    calory: 297,
                    img: "https://static.toiimg.com/photo/90374928.cms",
                  },
                  {
                    name: "paratha",
                    calory: 126,
                    img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-02-Paratha%2Fparatha-stacked-top_view",
                  },
                  {
                    name: "egg",
                    calory: 155,
                    img: "https://www.licious.in/blog/wp-content/uploads/2022/03/Classic-Egg.jpg",
                  },
                  {
                    name: "mango",
                    calory: 60,
                    img: "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1090910984-min-640x514.jpg",
                  },
                  {
                    name: "rice",
                    calory: 130,
                    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
                  },
                  {
                    name: "sweets",
                    calory: 100,
                    img: "https://www.oyorooms.com/blog/wp-content/uploads/2018/07/shutterstock_725231338.jpg",
                  },
            ],
            searchTxt: "",
            calory_count: 0,
            myFruits: [],
        };
    }

    searchFruit = (e) => {
        this.setState({
            searchTxt: e.target.value.toLowerCase(),
        });
    };

    capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    addFruit = (e) => {
        let count = document.getElementById(e.target.value).value;
        let cal = this.state.fruits.filter((fruit) => {
            return fruit.name === e.target.value;
        });

        let fruitObj = {
            id: e.target.value,
            text: `${count} X ${e.target.value} = ${cal[0].calory * count} cal`,
            btn_id: `${e.target.value}R`,
            calo: cal[0].calory * count,
        };
        this.setState({
            myFruits: this.state.myFruits.concat(fruitObj),
            calory_count: this.state.calory_count + cal[0].calory * count,
        });
    };

    removeFruit = (e) => {
        document.getElementById(e.target.value).remove();
        let calorie = this.state.myFruits.filter((fruit) => {
            return `${fruit.id}R` === e.target.value;
        });
        this.setState({
            calory_count: this.state.calory_count - calorie[0].calo
        });
    };

    render(){
        return(
            <div className="main-container">
                <div className="search-container">
                    <div>Search</div>
                    <input type="text" placeholder="Search for a food" onChange={this.searchFruit} id='search' />
                </div>
                <div className="food-container">
                    <div className="left">
                        {this.state.fruits.filter((fruit) => {
                            return fruit.name.includes(this.state.searchTxt);
                        })
                        .map((fruit) => {
                            return (
                                <div key={fruit.name} className='fruit'>
                                    <img src={fruit.img} alt="not found"/>
                                    <div className="detail">
                                        <h1>{this.capitalize(fruit.name)}</h1>
                                        <h4>Calories: {fruit.calory}</h4>
                                    </div>
                                    <div className="count">
                                        <input type="number" defaultValue='1' id={fruit.name} min='0'/>
                                        <button onClick={this.addFruit} value={fruit.name}>&#x2B;</button>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                    <div className="right">
                        <h1>
                            Today's Food <span>{this.state.calory_count} Calories</span>
                        </h1>
                        {this.state.myFruits
                            .filter((fruit) => {
                                return fruit.text !== "";
                        })
                        .map((fruit) => {
                            return (
                                <div key={fruit.id} className='item' id={fruit.btn_id}>
                                    <span>{fruit.text}</span>
                                    <button onClick={this.removeFruit} value={fruit.btn_id}>&#10006;</button>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}