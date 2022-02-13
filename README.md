# Wrong commonjs types #3

Whilst using plain JavaScript commonjs modules in your esbuild config file the
types (IDE and tsc) are wrong.  
This issue crops up if you use TypeScript to check your esbuild config files.

## How to reproduce

1. Clone this repo

    ```shell
    git clone https://github.com/Tim-Tech-Dev/esbuild-plugin-vue-next-issue-1.git
    cd ./esbuild-plugin-vue-next-issue-1/
    ```
2. Use npm or yarn to install the dependencies 

    ```shell
    npm i
    ```
3. Run the three provided custom npm scripts (`check`, `build_a` & `build_b`).
    ```shell
    $ npm run check

    > esbuild-plugin-vue-next-issue-1@0.1.0 check
    > tsc -b

    build_a.js:9:13 - error TS2349: This expression is not callable.
    Type 'typeof import("/<redacted>/esbuild-plugin-vue-next-issue-1/node_modules/esbuild-plugin-vue-next/dist/index")' has no call signatures.

    9   plugins: [pluginVue()],
              ~~~~~~~~~


    Found 1 error.

    $ npm run build_a

    > esbuild-plugin-vue-next-issue-1@0.1.0 build_a
    > node build_a.js

    $ npm run build_b

    > esbuild-plugin-vue-next-issue-1@0.1.0 build_b
    > node build_b.js

    /<redacted>/esbuild-plugin-vue-next-issue-1/build_b.js:9
                    plugins: [pluginVue()],
                          ^

    TypeError: pluginVue is not a function
        at Object.<anonymous> (/<redacted>/esbuild-plugin-vue-next-issue-1/build_b.js:9:13)
        at Module._compile (node:internal/modules/cjs/loader:1097:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1151:10)
        at Module.load (node:internal/modules/cjs/loader:975:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47

    Node.js v17.5.0
    ```

4. Observe the dist folder and the CLI output.




