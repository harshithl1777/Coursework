# Basic logging
def printer(msg)
    puts msg
end
printer 'Hello World'

# Getting user input
print "What is your age: "
age = gets.chomp
puts "Your age is #{age}"

# String interpolation and methods
def interpolate(str1, str2)
    puts "String 1: #{str1}, String 2: #{str2}"
end
interpolate('Harshith', 'Latchupatula')

# more methods
def multiply(n1, n2)
    n1 * n2
end

# while loop
# while (true)
#     puts "Enter number 1:"
#     first_num = gets.chomp
#     puts "Enter number 2:"
#     second_num = gets.chomp
#     puts multiply(first_num.to_f, second_num.to_f)
# end

# for loop
sample = [1, 2, 3]
6.times do |index|
    puts "#{index}"
end

# cases
def getDay(abrev)
    case abrev.downcase
    when 'mon'
        puts 'Monday'
    else
        puts 'Another day'
    end
end

# hashes
langs = {
    'JavaScript' => 'JS',
    'Ruby' => 'RB',
    'Cascading Style Sheets' => 'CSS'
}
puts langs

# try-catch
begin
    arr = [6, 7, 8]
    arr['error']
rescue => exception
    puts exception
end