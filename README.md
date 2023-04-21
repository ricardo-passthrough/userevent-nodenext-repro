# userevent-nodenext-repro
Simple repo reproducing issue with userEvent

build logs the following:

```sh
Projects/repro [main] » npm run build

> build
> tsc

index.ts:3:11 - error TS2339: Property 'setup' does not exist on type 'typeof import("${HOME}/Projects/repro/node_modules/@testing-library/user-event/dist/types/index")'.

3 userEvent.setup();
            ~~~~~


Found 1 error in index.ts:3
```

When using ts-jest, the error is similar (ts-jest will try and compile the file with tsc I think)

```sh
Projects/repro [ts-jest●] » npm test

> test
> jest

ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 FAIL  ./index.test.ts
  ● Test suite failed to run

    index.test.ts:4:15 - error TS2339: Property 'setup' does not exist on type 'typeof import("${HOME}/Projects/repro/node_modules/@testing-library/user-event/dist/types/index")'.

    4     userEvent.setup();
                    ~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.186 s
Ran all test suites.
```

If I user `esModuleInterop` true, it still fails

```jsx
Projects/repro [ts-jest●] » npm test            

> test
> jest

 FAIL  ./index.test.ts
  ● Test suite failed to run

    index.test.ts:4:15 - error TS2339: Property 'setup' does not exist on type 'typeof import("${HOME}/Projects/repro/node_modules/@testing-library/user-event/dist/types/index")'.

    4     userEvent.setup();
                    ~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.18 s
Ran all test suites.
```

it works fine with babel:

```sh
Projects/repro [babel-test●] » npm test

> test
> jest

 PASS  ./index.test.ts
  ✓ user event (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.561 s
Ran all test suites.
```
