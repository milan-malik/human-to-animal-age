const animal = document.getElementById('animal');
const result = document.getElementById('result');
const age = document.getElementById('age');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
  const animalValue = animal.value;
  const ageValue = age.value;
  let resultValue = 0;

  if (animalValue === 'dog') {
    resultValue = ageValue / 7;
  } else if (animalValue === 'cat') {
    resultValue = ageValue / 4;
  } else if (animalValue === 'rabbit') {
    resultValue = ageValue / 8;
  } else if (animalValue === 'horse') {
    resultValue = ageValue / 3;
  } else if (animalValue === 'cow') {
    resultValue = ageValue / 3.6;
  } else if (animalValue === 'chicken') {
    resultValue = ageValue / 9;
  } else if (animalValue === 'elephant') {
    resultValue = ageValue / 1.3;
  } else if (animalValue === 'lion') {
    resultValue = ageValue / 4.5;
  } else if (animalValue === 'dolphin') {
    resultValue = ageValue / 2.5;
  }

  result.innerHTML = `You are ${Math.round(
    resultValue
  )} years old in ${animalValue} years!`;
});
