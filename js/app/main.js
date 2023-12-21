 import { externals as router } from './router.js'

   $(document).ready(function() {
        console.log('DOM is mounted and ready');

        console.log('DOM is mounted and ready');
        let pokemon = ".pokemon-" + localStorage.getItem("pokemon");
        console.log(pokemon);
        let image = `<img id="enemyPokemon"src="resources/Bulbasour.gif"class="rounded float-end"alt="your enemy"/>`
        $(`${pokemon}`).css({"visibility" : "visible"});
        router.start();
    });
