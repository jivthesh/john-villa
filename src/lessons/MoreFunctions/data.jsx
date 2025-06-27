import React from 'react';
import { Thermometer, Lock, ShoppingCart, Repeat, Sigma, FileText, Mail, CheckCircle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import { TempConversionVisual, PasswordStrengthVisual, ShoppingCartVisual, PalindromeVisual, FactorialVisual, WordFrequencyVisual, EmailValidationVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <Thermometer className="w-5 h-5" />,
        title: "Example 1: Temperature Conversion",
        content: () => (
            <>
                <p>This function converts temperature between Celsius and Fahrenheit, showcasing conditional logic within a function.</p>
                <TempConversionVisual />
                <CodeBlock>{`def convert_temperature(temperature, unit):
    """Converts temperature between Celsius and Fahrenheit."""
    if unit.upper() == "C":
        return (temperature * 9/5) + 32
    elif unit.upper() == "F":
        return (temperature - 32) * 5/9
    else:
        return "Invalid unit"

print(convert_temperature(25, "C"))
print(convert_temperature(77, "F"))`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Lock className="w-5 h-5" />,
        title: "Example 2: Password Strength Checker",
        content: () => (
            <>
                <p>This function checks if a password meets a set of criteria to be considered "strong".</p>
                <PasswordStrengthVisual />
                <CodeBlock>{`def is_strong_password(password):
    if len(password) < 8:
        return False
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in "!@#$%^&*" for c in password)
    return all([has_upper, has_lower, has_digit, has_special])

print(is_strong_password("Str0ngP@ss!"))
print(is_strong_password("weak"))`}</CodeBlock>
            </>
        )
    },
    {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "Example 3: Shopping Cart Total",
        content: () => (
            <>
                <p>This function calculates the total cost of items in a shopping cart, where the cart is a list of dictionaries.</p>
                <ShoppingCartVisual />
                <CodeBlock>{`def calculate_total_cost(cart):
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total

cart = [
    {"name": "Apple", "price": 0.5, "quantity": 4},
    {"name": "Banana", "price": 0.3, "quantity": 6},
]
total = calculate_total_cost(cart)
print(f"Total cost: $ {total:.2f}")`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Repeat className="w-5 h-5" />,
        title: "Example 4: Palindrome Checker",
        content: () => (
            <>
                <p>A function to check if a string is a palindrome (reads the same forwards and backward), ignoring spaces and case.</p>
                <PalindromeVisual />
                <CodeBlock>{`def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

print(is_palindrome("A man a plan a canal Panama"))
print(is_palindrome("hello"))`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Sigma className="w-5 h-5" />,
        title: "Example 5: Factorial with Recursion",
        content: () => (
            <>
                <p>This example demonstrates recursion, where a function calls itself to solve a problem. The factorial of a number `n` is the product of all positive integers up to `n`.</p>
                <FactorialVisual />
                <CodeBlock>{`def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))`}</CodeBlock>
            </>
        )
    },
    {
        icon: <FileText className="w-5 h-5" />,
        title: "Example 6: Word Frequency Counter",
        content: () => (
            <>
                <p>A function that reads a text file and returns a dictionary with the frequency of each word.</p>
                <WordFrequencyVisual />
                <CodeBlock>{`def count_word_frequency(file_path):
    word_count = {}
    try:
        with open(file_path, "r") as file:
            for line in file:
                words = line.lower().split()
                for word in words:
                    word = word.strip('.,!?"')
                    word_count[word] = word_count.get(word, 0) + 1
        return word_count
    except FileNotFoundError:
        return "File not found."`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Mail className="w-5 h-5" />,
        title: "Example 7: Email Validator",
        content: () => (
            <>
                <p>This function uses regular expressions to validate the format of an email address. This is a common task in user registration forms.</p>
                <EmailValidationVisual />
                <CodeBlock>{`import re

def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

print(is_valid_email("test@example.com"))
print(is_valid_email("invalid-email"))`}</CodeBlock>
            </>
        )
    }
];

