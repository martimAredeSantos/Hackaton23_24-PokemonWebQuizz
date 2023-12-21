var internals = {}; // internal state
export const externals = {}; // external api

let question = [{ 
  question: "The First Pokemon games were for wich console?",
  anwser : ["gameboy" , "playstation" , "Von Neumann Machine" , "Mac" ]
},{
  question: "eu sou fixe?",
  anwser : ["gameboy" , "playstation" , "Von Neumann Machine" , "Mac" ]
}, 
{
  question: "ta tudo bem?",
  anwser : ["gameboy" , "playstation" , "Von Neumann Machine" , "Mac" ]
},
{
  question: "ddtc?",
  anwser : ["gameboy" , "playstation" , "Von Neumann Machine" , "Mac" ]
}
]



  externals.getQuestion = function (){
    let valor = Math.floor(Math.random() * 4);
    return question[valor];
  }
