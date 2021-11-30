module.exports = {
    my_is_posi_neg: function(nbr) {
        if(nbr === null || nbr === undefined || nbr > 0) {
            return 'POSITIF';
        }
        if(nbr === 0) {
            return 'NEUTRAL';
        }
        if(nbr < 0) {
            return 'NEGATIF';
        }
    }
}