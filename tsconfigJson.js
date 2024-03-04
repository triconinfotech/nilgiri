const tsConfigfile = `{
    "compilerOptions": {
      "target": "ES6",
      "module": "CommonJS",
      "strict": false,
      "esModuleInterop": true,
      "moduleResolution": "node",
      "lib": ["es6", "dom"],
      "resolveJsonModule": true
    },
    "include": ["endtoend/**/*"]
  }
  `
  module.exports = {tsConfigfile}