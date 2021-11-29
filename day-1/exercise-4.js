module.exports = {
    my_size_alpha: function(str) {
        if ( str[0]) {
            let count = 0;
            while(str[count] !== undefined) {
                count++;
            }
            return count;
        }
        return 0;
    }
}