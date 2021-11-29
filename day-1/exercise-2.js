const my_display_alpha = require('../day-1/exercise-1').my_display_alpha;

module.exports = {
    my_display_alpha_reverse: function() {
        let string = my_display_alpha();
        let reverse = '';
        for (let i = 25; i >= 0 ; i--) {
            reverse += string[i];
        }
        return reverse;
    }
}