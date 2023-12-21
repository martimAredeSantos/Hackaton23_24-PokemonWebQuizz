
    import { externals as startController } from '../controllers/startController.js';
    import { externals as gameController } from '../services/gameController.js';
    
    var internals = {
        handlers: {},
        elements: {}
    };
    
    export const externals = {};
    
    internals.renderQuestion = function(question) {
        if (internals.elements.question) {
            internals.elements.question.empty();
            $("#answers").empty();
            $("#questions").empty();
        }
    
        internals.elements.question = $(internals.createQuestion(question));
        internals.elements.app.append(internals.elements.question);
    };
    internals.shuffleArray = function(question) {
        for (let i = question.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question[i], question[j]] = [question[j], question[i]];
        }
        return question;
    }
    
    
    internals.createQuestion = function(question) {
        let correct = question.anwser[0]; 
        let random = internals.shuffleArray(question.anwser);

        let element = `<h1>${question.question}</h1>`;
        $(element).appendTo("#questions");
        let anwser = "";
        random.forEach(result => {
            if(result === correct){
                anwser += `<button class="correct button-53"`;
            }
            else {
                anwser += `<button class="incorrect button-53"`;
            }
            anwser += `>${result}</button>`
        });
        $(anwser).appendTo("#answers");
    };
    
    internals.renderButtons = function(){
        $(".correct").click( internals.rightAnswer);
        $(".incorrect").click( internals.wrongAnswer);
    }
    
    internals.rightAnswer = function(anwser){
        console.log(anwser);
        $('.correct').css('background-color', '#42bd72');
        startController.level = startController.level+1;
        setTimeout(() => {
            startController.start();
        }, 1000);
    }
    
    internals.wrongAnswer = function(anwser){
        console.log(anwser);
        $('.incorrect').css('background-color', '#e36d42');
        $('.correct').css('background-color', '#42bd72');
        startController.life = startController.life-1;
        setTimeout(() => {
            startController.start();
        }, 1000);
    }
    
    internals.renderButton = function() {
        if (internals.elements.button) {
           return;
        }
    
    };
    
    internals.check
    
    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };
    
    externals.render = function(question) {
        internals.elements.app = $('#app');
        internals.renderButton();
    
        if (question) {
            internals.renderQuestion(question);
            internals.renderButtons();
        }
    };
    