import React,{Component} from 'react';
import './css/randomGen.css';


export default class RandomGen extends Component{
    constructor(props){
        super(props);

        this.state={
            quote:'',
            color:'',
            author:''
        }

        this.randomNumberGen=this.randomNumberGen.bind(this);
        //some comment
    }

   

    randomNumberGen(){
        const someArr=[{
            quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
            color:"#3b6e44",
            author:" Marilyn Monroe "
        },{
            quote:"“Be yourself; everyone else is already taken.” ",
            color:"#544fae",
            author:" Oscar Wilde "  
        },
        {
            quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
            color:"#8945bc",
            author:" Albert Einstein "
        },
        {
            quote:"“So many books, so little time.” ",
            color:"#92f036",
            author:" Frank Zappa "
        },
        {
            quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
            color:"#bfb04c",
            author:" Bernard M. Baruch "
        },
        {
            quote:"“A room without books is like a body without a soul.” ",
            color:"#32c8d3",
            author:" Marcus Tullius Cicero "
        },
        {
            quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
            color:"#695600",
            author:" Dr. Seuss "
        },
        {
            quote:"“You only live once, but if you do it right, once is enough.” ",
            color:"#ae9e55",
            author:" Mae West "
        },{
            quote:"“Be the change that you wish to see in the world.”",
            color:"#e60917",
            author:" Mahatma Gandhi "
        },{
            quote:"“In three words I can sum up everything I've learned about life: it goes on.” ",
            color:"#189292",
            author:" Robert Frost "
        }];

        let len=someArr.length;
       let randomNum= someArr[Math.floor(Math.random() *Math.floor(len))]
        console.log(randomNum);

     this.setState({
        quote:randomNum.quote,
        color:randomNum.color,
        author:randomNum.author
     })
    }

    render(){

        return(
            <body className="whole-body" style={{backgroundColor:this.state.color}}>
            <div className="container">
                  
        <h3 style={{color:this.state.color}}>{this.state.quote}</h3>
        <h5 style={{color:this.state.color}}>{this.state.author}</h5>

        <button className="quote-btn" onClick={this.randomNumberGen}>Generate quote</button>
        
            </div>
            </body>
        );
    }
}
