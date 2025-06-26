// let number1 = 100
// let number2 = 500
// let sum = number1 + number2
// console.log("The sum of " + number1 + " and " + number2 + " is " + sum)
// let difference = number2 - number1
// console.log("The difference between " + number2 + " and " + number1 + " is " + difference)

const article1Title = "Understanding Steam Basics and Features for Beginners and Enthusiasts";
const article1Content = "Steam is a digital distribution platform developed by Valve Corporation. It offers a wide range of video games, software, and other digital content. In this article, we will explore the fundamental concepts of Steam, including its features, benefits, and how to get started.";
const article1Author = "John Doe";
const article1Date = "2023-10-01";
const article1Tags = ["Steam", "Gaming", "Digital Distribution", "Video Games"];
const article1Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjoZsHZ_WZng0nZqSh4dXsLrVCJSf_z50yg&s";
const is1Published = true; // Assuming the article is published, you can set it to false if not
const is1Featured = false; // Assuming the article is not featured, you can set it to true if it is

const article2Title = "Exploring the World of Indie Games on Steam: Hidden Gems and Must-Play Titles";
const article2Content = "Indie games have become a significant part of the gaming industry, and Steam is one of the primary platforms where these games thrive. In this article, we will delve into the world of indie games available on Steam, highlighting some hidden gems and must-play titles that you should consider adding to your gaming library.";
const article2Author = "Jane Smith";
const article2Date = "2023-11-15";
const article2Tags = ["Indie Games", "Steam", "Hidden Gems", "Must-Play"];
const article2Image = "https://www.lexaloffle.com/media/23858/16_madwizard_12.gif";
const is2Published = true; // Assuming the article is published, you can set it to false if not
const is2Featured = true; // Assuming the article is featured, you can set it to false if it is not

document.write('<h2>' + article1Title + '</h2>');
document.write('<img src="' + article1Image + '" alt="' + article1Title + '">');
document.write('<p><strong>Date:</strong> ' + article1Date + '</p>');
document.write('<p><strong>Tags:</strong> ' + article1Tags.join(", ") + '</p>');
document.write('<p>' + article1Content + '</p>');
document.write('<p><strong>Author:</strong> ' + article1Author + '</p>');
document.write('<p><strong>Published:</strong> ' + (is1Published ? "Yes" : "No") + '</p>');
document.write('<p><strong>Featured:</strong> ' + (is1Featured ? "Yes" : "No") + '</p>');

document.write('<hr/>');

document.write('<h2>' + article2Title + '</h2>');
document.write('<img src="' + article2Image + '" alt="' + article2Title + '">');
document.write('<p><strong>Date:</strong> ' + article2Date + '</p>');
document.write('<p><strong>Tags:</strong> ' + article2Tags.join(", ") + '</p>');
document.write('<p>' + article2Content + '</p>');
document.write('<p><strong>Author:</strong> ' + article2Author + '</p>');
document.write('<p><strong>Published:</strong> ' + (is2Published ? "Yes" : "No") + '</p>');
document.write('<p><strong>Featured:</strong> ' + (is2Featured ? "Yes" : "No") + '</p>');
