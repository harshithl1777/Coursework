# Basic logging
def printer(msg)
    puts msg
end
printer 'Hello World'

# String interpolation
def interpolate(str1, str2)
    puts "String 1: #{str1}, String 2: #{str2}"
end
interpolate('Harshith', 'Latchupatula')

# Getting user input
print "What is your age: "
age = gets.chomp
puts "Your age is #{age}"
