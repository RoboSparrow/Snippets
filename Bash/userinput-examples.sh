#!/bin/bash

####
# Courtesy Ryan's Tutorials: https://ryanstutorials.net/bash-scripting-tutorial/bash-input.php
# ryantutorial@todolistme.net
####

# Ask the user for their name
echo Hello, who am I talking to?
read varname
echo It\'s nice to meet you $varname

##
#  Common read options: -p allows you to specify a prompt, -s makes the input silent.
##

# Ask the user for login details
read -p 'Username: ' uservar
read -sp 'Password: ' passvar
echo
echo Thankyou $uservar we now have your login details

##
#  You can supply several variable names to read. Read will then take your input and split it on whitespace
##

# Demonstrate how read actually works
echo What cars do you like?
read car1 car2 car3
echo Your first car was: $car1
echo Your second car was: $car2
echo Your third car was: $car3

##
# Reading from STDIN
##

# A basic summary of my sales report
echo Here is a summary of the sales data:
echo ====================================
echo
cat /dev/stdin | cut -d' ' -f 2,3 | sort

# Lines 4, 5, 6 - Print a title for the output
# Line 8 - cat the file representing STDIN, cut setting the delimiter to a space, fields 2 and 3 then sort the output.
