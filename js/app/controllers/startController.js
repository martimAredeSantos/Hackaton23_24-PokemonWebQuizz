import { externals as battle_view } from '../views/battle-view.js';
import { externals as gameController } from '../services/gameController.js';
import { externals as main } from '../main.js';


   export const externals = {};

    externals.start = function() {
        if(externals.life === 0){
            //$(".full-page").css({
            //    "filter": "blur(20px)"
           // });
           let final = "#final";
            $(final).css({
                "visibility" : "visible"
            });
            $("#answers").css({
                "pointer-events": "none"
            });
            let element = "<h1><p>Loser<p></h1> <button onclick='redirectToReceiver()' class='index-button'> BATTLE!</button>" ;
            $(element).appendTo(final);
            $(".index-button").click( function() {
                window.localStorage.setItem('winner', "winner");
                window.location.href = 'index.html'});
            ;
        return;
        }
        if (externals.level === 3){
            main.randomPoke();
        }
        if(externals.level === 10){
            //$(".full-page").css({
            //    "filter": "blur(20px)"
           // });
           let final = "#final";
            $(final).css({
                "visibility" : "visible"
            });
            let element = "<h1><p>Winner<p></h1> <button onclick='redirectToReceiver()' class='index-button'> BATTLE!</button>" ;
            $(element).appendTo(final);
            localStorage.setItem('winner', "winner");
            $(".index-button").click( function() {window.location.href = 'index.html'});
            
        return;
        }
        if(externals.life > 0){
      //  battle_view.render();
        let test = gameController.getQuestion();
        battle_view.render(test);}
    };

    externals.life = 3;
    externals.level = 0;
