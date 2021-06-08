def analyze(full_name, first, last)
    puts "Your full name is #{full_name}"
    puts "Your name reveresed is #{full_name.reverse}"
    puts "Your name has #{first.length+last.length}"
end

print "What is your first name? "
first_name = gets.chomp
print "What is your last name? "
last_name = gets.chomp
name = "#{first_name} #{last_name}"
analyze(name, first_name, last_name)