const initialJS = `// Исходные данные

// Поменяйте код внутри функции counter,
// чтобы ваш результат совпадал с ожидаемым

const data = [
  {name: 'Nikolay', age: 20},
  {name: 'Alena', age: 20},
  {name: 'Ruslan', age: 19},
  {name: 'Vika', age: 21},
  {name: 'Anna', age: 21},
  {name: 'Katya', age: 20},
  {name: 'Dima', age: 17},
  {name: 'Nikita', age: 19},
  {name: 'Vlad', age: 20},
  {name: 'Artem', age: 21},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 18},
  {name: 'Nikita', age: 19},
  {name: 'Vlad', age: 20},
  {name: 'Artem', age: 18},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 20},
  {name: 'Artem', age: 21},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 18},
  {name: 'Nikita', age: 19},
  {name: 'Vlad', age: 20},
  {name: 'Artem', age: 18},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 20}
];

// Код ученика, визуализирующий данные с помощью D3

const vals = data.map((obj) => obj.age);

function counter(justValues) {
  const values = [];
  const counts = [];
  let prev;

  justValues.sort();
  for (let i = 0; i < justValues.length; i++) {
    if (justValues[i] !== prev) {
      values.push(justValues[i]);
      counts.push(1);
    }
    // else {
    //   counts[counts.length - 1]++;
    // }
    prev = justValues[i];
  }

  return [values, counts];
}

const mas = counter(vals);
const values = mas[0];
const counts = mas[1];

const color = d3.schemeCategory10;

const y = [183, 177, 77, 43, 209];
const x = [10, 106, 266, 34, 394];
const y1 = [183, 177, 77, 43, 209];
const x1 = [10, 106, 266, 34, 394];

const svg = d3.select('svg');
const g = svg.selectAll('g').data(values).enter().append('g');
// Чем больше людей с одинаковым возрастом, тем больше круг

g.append('circle')
.attr('r', (d) => counts[values.indexOf(d)] * 10)
.attr('cy', () => y.shift())
.attr('cx', () => x.shift())
.style('fill', (d, i) => color[i]);

g.append('text')
.attr('y', () => y1.shift() - 3)
.attr('x', () => x1.shift() - 8)
.attr('dy', '.5em')
.text((d) => d);
`;

const resultJS = `\
const data = [
  {name: 'Nikolay', age: 20},
  {name: 'Alena', age: 20},
  {name: 'Ruslan', age: 19},
  {name: 'Vika', age: 21},
  {name: 'Anna', age: 21},
  {name: 'Katya', age: 20},
  {name: 'Dima', age: 17},
  {name: 'Nikita', age: 19},
  {name: 'Vlad', age: 20},
  {name: 'Artem', age: 21},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 18},
  {name: 'Nikita', age: 19},
  {name: 'Vlad', age: 20},
  {name: 'Artem', age: 18},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 20},
  {name: 'Artem', age: 21},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 18},
  {name: 'Nikita', age: 19},
  {name: 'Vlad', age: 20},
  {name: 'Artem', age: 18},
  {name: 'Nastya', age: 19},
  {name: 'Vera', age: 20}
];

const vals = data.map((obj) => obj.age);

function counter(justValues) {
  const values = [];
  const counts = [];
  let prev;

  justValues.sort();
  for (let i = 0; i < justValues.length; i++) {
    if (justValues[i] !== prev) {
      values.push(justValues[i]);
      counts.push(1);
    } else {
      counts[counts.length - 1]++;
    }
    prev = justValues[i];
  }

  return [values, counts];
}

const mas = counter(vals);
const values = mas[0];
const counts = mas[1];

const color = d3.schemeCategory10;

const y = [183, 177, 77, 43, 209];
const x = [10, 106, 266, 34, 394];
const y1 = [183, 177, 77, 43, 209];
const x1 = [10, 106, 266, 34, 394];

const svg = d3.select('svg');
const g = svg.selectAll('g').data(values).enter().append('g');
// Чем больше людей с одинаковым возрастом, тем больше круг

g.append('circle')
.attr('r', (d) => counts[values.indexOf(d)] * 10)
.attr('cy', () => y.shift())
.attr('cx', () => x.shift())
.style('fill', (d, i) => color[i]);

g.append('text')
.attr('y', () => y1.shift() - 3)
.attr('x', () => x1.shift() - 8)
.attr('dy', '.5em')
.text((d) => d);
`;


const initialHTML = `<!DOCTYPE html>
<html>
  <head>
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      svg {
        width: inherit;
        height: 99%;
      }
    </style>
    <script src="lib/d3/d3.js"></script>
  </head>
  <body>
    <svg></svg>
  </body>
</html>`;

window.initialCode = {
  initialJS,
  initialHTML,
  resultJS
};