function isPalindrom(str){
    if (str.length == 1) return 'yes';
    let iMax=str.length-1;
    if ( iMax == 1 ) return 'yes';
    if ( str[0] == str[iMax] ) {
        return isPalindrom(str.slice(1,iMax));
    } else {
        return 'No';
    }
    
}
console.log(isPalindrom('a'));
