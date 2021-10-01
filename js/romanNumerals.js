exports.toRoman = function(num) 
{
    let output = "";
    
    const romanToArabic = 
    {
        'M' : 1000,
        
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1,   
    }
    
    for(const roman in romanToArabic)
    {
        const arabic = romanToArabic[roman];
        const evenlyDivisible = Math.floor(num / arabic);
        
        output += roman.repeat(evenlyDivisible);
        num -= arabic * evenlyDivisible;
    }
    
    return output;
}