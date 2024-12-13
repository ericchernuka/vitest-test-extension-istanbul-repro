# vitest-test

Reproduction of istanbul vitest code issue

## Steps:

1. Clone repo to local machine
2. Open cloned repo in VSCode
3. Ensure that the [Vitest Extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) is installed.
4. Navigate to the Test Explorer
5. Clicking the top-level coverage reporter will report coverage of 0% for sum which has 2 tests that pass. Navigating to the file it will show red the entire method.
6. Clicking one of the individual tests will cause the previously shown coverage report to disappear and no coverage will be displayed.
7. Add the following to sum.ts

```typescript
const sum2 = (a: number, b: number) => a + b;
```

8. Pressing the top-level run with coverage again will now show coverage reporting with 77.78%.
9. Pressing an individual test will also continue to return the coverage at 77.78%.
10. Remove the recently added sum2 function.
11. Pressing run all with coverage again will result in 100% coverage and accurate file notation.
12. Press refresh tests.
13. Press run all with code coverage again and we again receive 0% code coverage.

## Machine Reproduced With

### VSCode

Version: 1.96.0
Commit: 138f619c86f1199955d53b4166bef66ef252935c
Date: 2024-12-11T02:29:09.626Z
Electron: 32.2.6
ElectronBuildId: 10629634
Chromium: 128.0.6613.186
Node.js: 20.18.1
V8: 12.8.374.38-electron.0
OS: Darwin arm64 24.2.0

### Vitest Extension

Version: 1.8.3
