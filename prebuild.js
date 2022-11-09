const path = require('path');
const fs = require('fs');
const appVersion = require('./package.json').version;

console.log('\nRunning pre-build tasks');

const versionFilePath = path.join(__dirname + '/src/environments/version.ts');

const src = `export const VERSION = '${appVersion}';
`;

// ensure version module pulls value from package.json
fs.writeFile(versionFilePath, src, { flag: 'w' }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Updating application version ${appVersion} in ${versionFilePath}\n`);
});
