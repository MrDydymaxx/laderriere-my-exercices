const my_size_alpha = require('../day-1/exercise-4').my_size_alpha;

module.exports = {
    my_array_alpha: function(str) {
        const size = my_size_alpha(str);
        let array = [];
        for(let i = 0; i < size; i++) {
            array[i] = str[i];
        }
        return array;
    }
}