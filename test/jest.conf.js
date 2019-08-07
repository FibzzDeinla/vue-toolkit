const path = require('path')

module.exports = {
    verbose: true,
    moduleFileExtensions: ["js", "vue", "json", "ts"],
    modulePaths: [
        "<rootDir>"
    ],
    rootDir: path.resolve(__dirname, '../'),
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        vue$: "vue/dist/vue"
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "vue-jest"
    },
    transformIgnorePatterns: ['node_modules'],
    setupFiles: ["<rootDir>/test/setup-jest.js"],
    reporters: [
        "default",
        ["jest-html-reporters", {
            "filename": "report.html",
            "expand": true
          }]
    ]
}