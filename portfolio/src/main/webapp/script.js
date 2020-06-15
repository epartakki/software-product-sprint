// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

var prevQuoteNum = 0;

function addRandomGreeting() {
const greeting =
      ['“And how are you?” --Winnie-The-Pooh',
       '“Good Morning! Good Afternoon! Good Night! These are not just mere greetings. They are powerful blessings, setting the best vibration for the day. Hence, whether it is morning, afternoon or night, make sure that you say your greeting right!” --Franco Santoro',
       '“May we greet each other with a smile, hug and speak kind words.” --Lailah Gifty Akita'];
       
      var newGreetingNum = Math.floor(Math.random() * greeting.length);

if (newGreetingNum == prevQuoteNum) {
    ++newGreetingNum;
    newGreetingNum %= greeting.length;
}     


  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting[newGreetingNum];
  prevGreetingNum = newGreetingNum;
}

async function getComments() {
  const response = await fetch('/data');
  const commentsList = await response.text();
  const commentsListElement = document.getElementById('comments-container')
  commentsListElement.innerText = commentsList;
}








function getRandomGreeting() {
  console.log('Fetching a random greeting.');

  const responsePromise = fetch('/data');

  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Handling the response.');

  const textPromise = response.text();

  textPromise.then(addGreetingToDom);
}

function addGreetingToDom(greeting) {
  console.log('Adding greeting to dom: ' + greeting);

  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = quote;
}

function getData() {
  fetch('/data').then(response => response.json()).then((greeting) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('data-container');
    statsListElement.innerHTML = '';
  });


 

}

