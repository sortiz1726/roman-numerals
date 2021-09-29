def to_roman(input_number):
    output = ""
    
    roman_to_arabic = {
        "M" : 1000,
        
        "CM" : 900,
        "D" : 500,
        "CD" : 400,
        "C" : 100,
        
        "XC" : 90,
        "L" : 50,
        "XL" : 40,
        "X" : 10,
        
        "IX" : 9,
        "V" : 5,
        "IV" : 4,
        "I" : 1,   
    }
    
    for ROMAN in roman_to_arabic:
        ARABIC = roman_to_arabic[ROMAN]
        evenly_divisible = input_number // ARABIC
        
        output += ROMAN * evenly_divisible
        input_number -= ARABIC * evenly_divisible
    
    return output
    