const path = require('path');
const fs = require('fs');

const file = fs.readFileSync('./template.ts').toString();

const modulesContent =
  `
//imports

export const modules = [
//modules
];

  `

const modules = [];
const components = [];

for (let i = 0; i < 1; i++) {

  const moduleName = 'Module' + i;
  const componentName = 'Component' + i;

  let newFile = file.replaceAll('Module$', moduleName);
  newFile = newFile.replaceAll('Service$', 'Service' + i);
  newFile = newFile.replaceAll('Component$', componentName);

  modules.push(moduleName);
  components.push(componentName);

  fs.writeFileSync(`./modules/Module${i}.ts`, newFile);
}

const imports = modules.map(x => `import { ${x} } from './modules/${x}';`).join('\n');
const newModulesFile = modulesContent
  .replaceAll('//imports', imports)
  .replaceAll('//modules', modules.join(',\n'));

fs.writeFileSync('./modules.ts', newModulesFile);

const html = components.map(x => `<app-${x}></app-${x}>`).join('\n');
fs.writeFileSync('./app.component.html', html)
