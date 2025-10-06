const dictionary = {
  esfog: "I like pineapple on pizza",
  noesfog: "I dislike pineapple on pizza",
  blarnuff: "I greet you",
  zintoka: "You are my friend",
  grivnuff: "I want pizza",
  pluffami: "I feel joy",
  snorvuff: "I see a cat",
  dramblen: "I am dancing",
  flarnova: "It tastes amazing",
  glimbuff: "That is cool",
  vintoka: "Let’s go now",
  squibnuff: "I made a lucky mistake",
  tacokatta: "The taco cat is real",
  yuffami: "I agree",
  narnami: "I disagree",
  whaznuff: "What is this?",
  blarnuvaa: "I wish you good night",
  blarnuzena: "I wish you good morning",
  snorvokka: "That’s a kitten",
  flarnokka: "That’s a topping",
  pluffashi: "You bring joy",
  squibnashi: "You are a genius by accident",
  dramblashi: "You dance proudly",
  grivnashi: "You sliced the pizza",
  glimbonaa: "You are awesome",
  snorvisha: "You are feline",
  bluff: "blush",
  blarnu: "hello",
  zintok: "friend",
  grivna: "pizza",
  pluffa: "joy",
  snorvik: "cat",
  dramble: "dance",
  flarnish: "flavor",
  glimbo: "cool",
  vintok: "party",
  squibna: "luck",
  tacocat: "legend",
  yuff: "yes",
  narn: "no",
  whaznit: "what",
  bluffa: "I blush"
};

document.getElementById("translateBtn").addEventListener("click", function () {
  const word = document.getElementById("inputWord").value.trim().toLowerCase();
  const meaning = dictionary[word];
  const output = document.getElementById("output");
  output.textContent = meaning
    ? `"${word}" means: ${meaning}`
    : `"${word}" is not in the dictionary yet.`;
});
