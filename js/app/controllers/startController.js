import { externals as battle_view } from '../views/battle-view.js';
import { externals as gameController } from '../services/gameController.js';


   export const externals = {};

    externals.start = function() {
        if(externals.life === 0){

        return;
        }
       if(externals.level === 2){
           externals.level = 3;
           window.location.hash = "#evolve"; 
       }
        if(externals.life > 0)
        battle_view.render();
        battle_view.render(gameController.getQuestion());
    };

    externals.life = 3;
    externals.level = 0;
