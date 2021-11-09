# day 2

# Exercise 1 : Hello World

sentence = "Hello World!"
for i in range(4): print(sentence)

# Exercise 2 : Some Math
result = (99^3) * 8

#Exercise 3 : What Is The Output ?
 5 < 3   #False
 3 == 3   #True
 3 == "3"   #False
 "3" > 3   #False
 "Hello" == "hello"   #False

 #Exercise 4 : Your Computer Brand
computer_brand = "HP"
print(f"I have a {computer_brand} computer")

#Exercise 5 : Your Information
name = "Hana"
age = 25
shoe_size = 37
info = f"Hello. My name is {name}. I am {age} years. My shoe size is {shoe_size}"
print(info)

#Exercise 6 : A & B
a = 20
b = 10
if a > b: print("Hello world")

#Exercise 7 : Odd Or Even
number = int(input("Please write down any number"))
if number%2 == 0 : print(f"Your number is {number} and it is even")
elif number%2 != 0: print(f"Your number is {number} and it is odd")
else : print(f"Ooops! I think you gave us not number!")

#Exercise 8 : What’s Your Name ?
user_name = input("What is your name?")
my_name = "Hana"
if user_name.lower() == my_name.lower():
    print(f"WOw! What a sign - we have the same name!")
else: print(f"Nice to meet you. My name is {my_name} and your name is {user_name}")

#Exercise 9 : Tall Enough To Ride A Roller Coaster
user_height_inch = int(input("Tell me, what is your height in inches?"))
inch_to_cm = 2.54
user_height_cm = user_height_inch * inch_to_cm
if user_height_cm > 145: print(f"You are tall enough to ride")
else : print(f"You are only {user_height_cm" cm, You need to grow some more to ride!)