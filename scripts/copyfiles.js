
const path = require('path');
const fse = require('fs-extra');

const files = [
  'README.md',
];

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../build', path.basename(file));
}
function copyFile(file) {
  const buildPath = resolveBuildPath(file);
  return new Promise((resolve) => {
    fse.copy(file, buildPath,
      (err) => {
        if (err) throw err;
        resolve();
      },
    );
  })
  .then(() => console.log(`copied ${file} to ${buildPath}`));
}

function copySourceCode() {
  return new Promise((resolve) => {
      fse.copy(path.resolve(__dirname, '../src'), path.resolve(__dirname, '../build'), (err) => {
        if (err) throw err;
        resolve();
      })
  }).then(() => console.log('copied source code to build'));
}

function createPackageFile() {
  return new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  })
  .then(data => JSON.parse(data))
  .then((packageData) => {
    const {
      author,
      version,
      description,
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
    } = packageData;

    const minimalPackage = {
      name: 'loading',
      author,
      version,
      description,
      main: './index.js',
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
    };

    return new Promise((resolve) => {
      const buildPath = path.resolve(__dirname, '../build/package.json');
      const data = JSON.stringify(minimalPackage, null, 2);
      fse.writeFile(buildPath, data, (err) => {
        if (err) throw (err);
        console.log(`Created package.json in ${buildPath}`);
        resolve();
      });
    });
  });
}
Promise.all(
  files.map(file =>
    copyFile(file)
  )).then(() => {
    createPackageFile();
    copySourceCode();
  });