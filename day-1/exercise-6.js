module.exports = {
    my_length_array: function(arr) {
        let count = 0;
        while(arr[count] !== undefined) {
            count++;
        }
        return count;
    }
}