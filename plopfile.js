const toCamelWord = (word, idx) =>
  idx === 0
    ? word.toLowerCase()
    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const toCamelCase = text =>
  text
    .split(/[_-\s]+/)
    .map(toCamelWord)
    .join('');

const Handlebars = require('handlebars');

Handlebars.registerHelper('trim', function (value) {
  return value.trim();
});

module.exports = function (plop) {
  plop.addHelper('directory', (type, compName) => {
    if (type === 'components') {
      return `src/${type}/${toCamelCase(compName)}`;
    } else if (type === 'common') {
      return `src/components/${type}/${toCamelCase(compName)}`;
    }
  });

  plop.addHelper('pageDirectory', name => {
    return `src/views/${toCamelCase(name)}`;
  });

  plop.addHelper('exportDirectory', type => {
    if (type === 'components') {
      return `src/${type}`;
    } else if (type === 'common') {
      return `src/components/${type}`;
    }
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What do you want to create?',
        choices: ['common', 'components'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of it?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{directory type name}}/index.tsx',
        templateFile: 'plop-templates/components/component.hbs',
      },
      {
        type: 'add',
        path: '{{directory type name}}/style.ts',
        templateFile: 'plop-templates/components/style.hbs',
      },
      {
        type: 'append',
        path: '{{exportDirectory type}}/index.tsx',
        templateFile: 'plop-templates/components/export.hbs',
      },
    ],
  });

  plop.setGenerator('view', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of it?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{pageDirectory name}}/index.tsx',
        templateFile: 'plop-templates/views/index.hbs',
      },
      {
        type: 'add',
        path: '{{pageDirectory name}}/style.ts',
        templateFile: 'plop-templates/views/style.hbs',
      },
    ],
  });
};
