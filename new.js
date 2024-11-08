// //...........Chap1 (alerts).......

//...Question 1..
alert("Hello sir, Welcome to my Website")

//...Question 2..
alert("Error! Please Enter a valid Password")

//...Question 3..

alert("Welcome to JS land.. \nHappy Coding!")

//..Question 4

alert("Welcome to JS Land")
alert("Happy Coding!")

//..Question 5

console.log("Hello.. i can run my JS through browser's console.")





//............................................................................



//..........chapter 2(Variables for string)....

// //...Question 1

// let Name = "username"
// console.log(Name)

// //..Questions 2

// let myName = "Afzan iftikhar"
// console.log(myName)

// //..Questions 3

// let message;
// message = "Hello world"

// alert(message)

// //..Question 4

// let studentName = "Afzan"
// alert("Name = " + studentName)

// let age = "20"
// alert("age = " + age)

// let university = "Agriculture University Peshawar"
// alert( "University = " + university)


// //..Question 5..

// let pizza = ("PIZZA \nPIZZ\nPIZ\nPI\nP ")

// alert(pizza)

// //..Question 6

// let email = "Aafzan95@gmail.com"

// alert("My email address is : " + email)

// //..Question 7 

// let book = "A smarter way to learn JavaScript"

// alert("I am trying to learn from a book " + book)

// //..Question 8

// let text = "yah! i can write HTML content through Javascript"
// document.write(text)

// //..Quesion 9

// let stringg = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(stringg)

//.........End of Chapter 2...............................................


//................................................................................




//................Chapter 3 (Variable for numbers)..............................

// //..Question 1

// let Aage = 20

// alert("I am "+ Aage + " Years old")

// //..Question 2

// let vistTime = 20

// alert("You have visited this site " + vistTime + " Times")

// //..Question 3

// let Birthyear = 2004

// // document.write("My birthyear is " + Birthyear )


// //..Quesion 4

// let visitorName = prompt("Enter Your name")
// let title = prompt("Enter The product title You want to buy")
// let quantity = prompt("How many products " + visitorName + " Want to buy")

// document.write( visitorName + " Ordered " + quantity + " " + title + " On XYZ store" )



//..........End Of Chapter 3...........

//.........................................................................



//.........Chapter 4(Legal and Illegal Variables)......


//..Question 1

let animal , river, nature

//..Question 2

//..Legal variables :

        // 1.  myName1
        // 2.  animal
        // 3.  ocean
        // 4.  Student_1
        // 5.  h2$
//..Illegal variables


        // 1.  my Name
        // 2.  Student^
        // 3.  lap top
        // 4.  let
        // 5.  5Engineer%

//..Question 3


// let x = ("Rules for naming variables <br><br><br> Variable name can only contain letters, numbers, $ or _ . for example: $my_1stvariable <br>Variable must begin with a letter,$ or _ . for example: $name, _name or name  <br> Variable names are Case sensitive<br>Variable name should not be JS Keywords")

// document.write(x)



//......End of chapter 4....


//..............................................................................

//.........Chapter 5 (Maths Expressions)


//.......Question 1 

document.write("Question 1 <br><br>")
    let a = 5
    let b = 8

    let c = a + b

    document.write("Sum of " +  a  + " and " + b + " is : " + c + "<br>")

    let x = 5
    let y = 3

    let z = x - y

    document.write("Subtraction of  "+ x + " and "+ y + " is :" + z+ "<br>")


    let r = 4
    let t = 5

    let e = r * t

    document.write("Multiplication of " + r + " and " + t + " is : " + e+ "<br>")


    let o = 6
    let p = 3

    let i = 6/3

    document.write("Devision of " + o + " and " + p + " is : "+ i + "<br>")

    let u = 5
    let k = 2

    let j = u % k

    document.write("Modulus of " + u + " and " + k + " is :" + j+ "<br>")




//......Question 2
document.write("<br>Question 2 <br><br>")

let A
document.write(" <br>Value after variable declaration is :" + A+ "<br>")

A = 7
document.write("Initial value is: " + A + "<br>")

A++
document.write("Value after increment is: "+ A + "<br>")

let B = A + 7

document.write("Value after addition is: "+ B +"<br>")

B--
document.write("Value after decrement is : "+ B +"<br>")

let C = B % 7
document.write("The remainder is: "+ C +"<br>")


//....Question 3
document.write("<br>Question 3 <br><br>")

let ticketPrice = 600 
let NumberTicket = 5

let for5tickets = ticketPrice * NumberTicket

document.write("<br> Total cost to buy 5 tickets is : " + for5tickets + "PKR")

//.....Question 4
document.write("<br><br>Question 4 <br><br>")
for(let i = 0; i<= 10; i++){

        document.write("<br>5"+ " x " + i + " = " + i*5 )
}

//....Question 5
document.write("<br><br>Question 5 <br><br>")
let celsius = 35
let farnheit
farnheit = (celsius * 9/5 ) + 32

document.write("<br><br> 35 *celsius is "+ farnheit + " *farnheit <br>" )

let F = 105
let Cel
Cel = (F - 32) * 5/9

document.write("<br> " + F + " *farnheit is " + Cel + "*Celcius")

//.....Question 6
document.write("<br><br>Question 6 <br><br>")
let item1 = 700
document.write("<br><br><br>Price of item 1 : "+ item1)
let quantity1= 3
document.write("<br>Quantity of item 1 : "+ quantity1)
let item2 = 500
document.write("<br>Price of item 2 is :"+ item2 )
let quantity2 = 4
document.write("<br> Quantity of item 2 is "+ quantity2)

let shippingcharges = 150
document.write("<br>Shipping Charges is : "+ shippingcharges)

let totalCost = (item1*quantity1 + item2*quantity2) + shippingcharges

document.write("<br> Total cost of Your order is : "+ totalCost )


//....Question 7
document.write("<br><br>Question 7 <br><br>")

let totalMarks = 1100
document.write(" Total Marks : "+ totalMarks)
let obtainedMarks = 950
document.write("<br>Obtained marks : " + obtainedMarks)

let percentage = (obtainedMarks*100)/totalMarks

document.write("<br>Percentage : "+ percentage)

//.....Question 8

document.write("<br> <br>Question 8")

let USdollar = 10
let SaudiRiyal = 25
let USD = 104.80
let SR = 28

let PKR = (USdollar*USD + SaudiRiyal*SR)

document.write("<br>Total currency in PKR is : "+ PKR)

//....Question 9

document.write("<br> <br>Question 9")

let l = 3
document.write("<br> Total calculation is  "+ (l + 5) *10/2 +"<br>")

//....Qustion 10

document.write("<br> <br>Question 10")

let currenYear = 2024
document.write("<br> Current Year : " + currenYear)

let Birthyear = 2004
document.write("<br>Birth Year :  " +Birthyear )

let age = currenYear - Birthyear

document.write("<br>Your Age is :"+ age)



//.....Question 11
document.write("<br> <br>Question 11")

let radius = 30
document.write("<br>Radius of the circle is : " + radius)
let pi = 3.14
let circumference = 2 * pi * radius *radius

document.write("<br> Circumference of the circle is : " + circumference)

let area = pi*radius*radius

document.write("<br>Area of the circle is : " + area)


//....Question 12
document.write("<br> <br>Question 12")

let Snack = "Wavy"
document.write(" <br>Favourite Snack : "+ Snack)
let cAge = 20
document.write("<br> Current age : " + cAge)
let maxAge = 70
document.write("<br>Estimated maximum Age : " + maxAge)
let EstimatedSnack = 2
document.write("<br> Estimated Snacks : " + EstimatedSnack)

let daysPerYear = 365
let totalAgeLeft = maxAge - cAge

let TotalS = daysPerYear*totalAgeLeft


let total = TotalS*EstimatedSnack

document.write("<br> You will need  "+ total + " Wavy Snacks to last until the ripe old age of " + maxAge)



//................End of Chapter 5.......................



//...................................................................................

//..............Chapter 12 - 13........

