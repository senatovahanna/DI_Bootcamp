# Exercise 1 : Favorite Numbers
my_fav_numbers = {1, 2, 3, 4, 5}

my_fav_numbers.add(11)
my_fav_numbers.add(37)

my_fav_numbers_list = list(my_fav_numbers)
length_my_fav_numbers = len(my_fav_numbers_list)
my_fav_numbers.remove(my_fav_numbers_list[length_my_fav_numbers - 1])

friend_fav_numbers = {45, 22, 34, 15}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


# Exercise 2: Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# no, we can not add more integers to that tuple.

# Exercise 3: Print A Range Of Numbers
numbers = range(1, 21)

for number in numbers:
 print(number)

 # Exercise 4: Floats
 my_list = []

for i in range(0, 8):
    my_list.append(0.5*(i+3))

# Exercise 5: Shopping List

basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove(basket[0])
basket.remove(basket[-1])
basket.append("Kiwi")
basket.append(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

# Exercise 6 : Loop
my_name = "Hana"
user_name = ""
while user_name != my_name:
     user_name = input("What is your name?")

# Exercise 8

for i in range(1500, 2500):
    if (i%5 == 0):
        print(f"integer {i} is multiple of 5")
    elif (i%7 == 0):
        print(f"integer {i} is multiple of 7")
    else:
        continue

# Exercise 9: Favorite Fruits

str_input_fruits = input("please input your favorite fruits separated with a single space: ")

l_input_fruits = str_input_fruits.split(" ")

str_some_specific_fruit = input("now please specify the fruit: ")

if str_some_specific_fruit in l_input_fruits:
    print(f"You chose {str_some_specific_fruit} one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 12 : Who Is Under 16?

l_names = ["qwqw", "asas", "zxzx"]

l_break_the_loop = ["quit", "stop", "enought"]

while True:
    str_name = input("please insert your name: ")

    if (str_name in l_break_the_loop):
        break
    elif str_name in l_names:
        i_age = int(input("please insert your age:"))
        if i_age < 16:
            print("we have to remove your name from the list ...")
            l_names.remove(str_name)
    else:
        print("your name is not in the list. try again")

