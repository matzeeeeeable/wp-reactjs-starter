# Plugin

The plugin folder structure is separated from the root folder structure to avoid flooding the documentation. Additionally folders/files marked with a **prefixed** 💡 are important for **getting started** (that means, learn more about them).

All files and folders written in italics are not saved in Git, but automatically arranged when you develop or deploy your plugin.

### Folder structure

-   📁 `plugins/your-plugin` Folder you created with `create-wp-react-app create-plugin`
    -   📁 _`coverage`_ Coverage reports, see [this](../../advanced/tests.md#coverage)
    -   📁 `devops` Files related to [CI/CD](../../gitlab-integration/predefined-pipeline.md), Docker and so on for this specific plugin
        -   📁 `.gitlab`
            -   📄 💡 `.gitlab-ci.ts` [CI/CD similar root file](../../gitlab-integration/predefined-pipeline.md), included in root `.gitlab-ci.yml`
            -   📄 `stage-build-production.ts` Predefined job to build production plugin when merged to `master`
            -   📄 `stage-build.ts` Predefined job to build plugin
            -   📄 `stage-deploy.ts` Predefined job for wordpress.org deployment
            -   📄 `stage-test.ts` Predefined test jobs
            -   📄 `stage-validate.ts` Jobs for Docker garbage collection, semantic versioning and license scanner
        -   📁 `docker-compose` [Compose files](https://docs.docker.com/compose/compose-file/) are consumed automatically
            -   📄 `docker-compose.e2e.yml` Used in Cypress [E2E tests](../../advanced/tests.md#e2e)
            -   📄 `docker-compose.local.yml` Used locally with port expose
            -   📄 `docker-compose.traefik.yml` Used for [Review applications](../../gitlab-integration/review-applications.md)
            -   📄 `docker-compose.yml` This file is automatically merged with `devops/docker-compose/docker-compose.yml`, see [here](../../advanced/extend-compose-webpack.md#docker-compose)
        -   📁 `scripts` Additional scripts used in Docker containers ([mounted](https://docs.docker.com/compose/compose-file/#volumes)) for this specific plugin
            -   📄 💡 `wordpress-startup.sh` Similar to `devops/scripts/wordpress-startup.sh`
    -   📁 _`build`_ Run [`yarn build`](../available-commands/plugin.md#build) to create an installable plugin into this folder
    -   📁 _`docs`_ Run [`yarn docs`](../available-commands/plugin.md#documentation) to create all technical docs into this folder
    -   📁 _`node_modules`_ [Node dependencies](https://docs.npmjs.com/files/folders.html#node-modules)
    -   📁 `scripts` Scripts related to development
        -   📄 💡 `Gruntfile.ts` [Gruntfile](https://gruntjs.com/sample-gruntfile) for this plugin, extends `common/Gruntfile.base.ts`
        -   📄 💡 `webpack.config.ts` Webpack [configuration file](https://webpack.js.org/configuration/) for this plugin, consumes `common/webpack.factory.ts`, see [here](../../advanced/extend-compose-webpack.md#webpack)
    -   📁 `src` Your plugin coding, here we go!
        -   📁 `inc` [Server-side coding](../../php-development/predefined-classes.md) in PHP
            -   📁 `base` Base classes and functions
                -   📁 `others`
                    -   📄 _`cachebuster-lib.php`_ [Cachebuster file](../../advanced/how-cachebuster-works.md#npm-dependency) for library files
                    -   📄 _`cachebuster.php`_ [Cachebuster file](../../advanced/how-cachebuster-works.md#entrypoints) for entrypoint files
                    -   📄 `fallback-php-version.php` Show admin notice when PHP version not reached
                    -   📄 `fallback-rest-api.php` Show admin notice when [WP REST API](https://developer.wordpress.org/rest-api/) is not available
                    -   📄 `fallback-wp-version.php` Show admin notice when WP version is not reachable
                    -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
                    -   📄 `start.php` Initializes the plugins Core class and shows notices if requirements are not met (e. g. WP version)
                -   📄 💡 `Core.php` [Abstract core class](../../php-development/predefined-classes.md#core) for main initialization of namespacing and so on, similar to the well-known `functions.php`
                -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
                -   📄 💡 `UtilsProvider.php` Make plugin relevant data available to composer packages, used in all your classes!
            -   📁 💡 `rest` Example [WP REST API](https://developer.wordpress.org/rest-api/) endpoint implementation
                -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
                -   📄 `HelloWorld.php` Example [`wp-json/your-plugin/hello-world`](../../php-development/example-implementations.md#rest-endpoint) endpoint
            -   📁 💡 `view` View relevant coding like initialization of Widgets and admin pages
                -   📁 `menu` Example [admin page](https://developer.wordpress.org/reference/functions/add_menu_page/) implementation
                    -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
                    -   📄 `Page.php` Example ["Your plugin"](../../php-development/example-implementations.md#menu-page) admin page
                -   📁 `widget` Example [widget](https://developer.wordpress.org/reference/hooks/widgets_init/) implementation
                    -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
                    -   📄 `Widget.php` React [example widget](../../php-development/example-implementations.md#widget) implementation
                -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
            -   📄 💡 `Activator.php` [Class](../../php-development/predefined-classes.md#activator) for activate, deactivate and install actions, extends `./base/Activator.php`
            -   📄 💡 `Assets.php` [Class](../../php-development/predefined-classes.md#assets) for assets management, extends `./base/Assets.php`
            -   📄 💡 `Core.php` [Core class](../../php-development/predefined-classes.md#core), put your hook and filter registrations here; extends `./base/Core.php`
            -   📄 `index.php` Empty index.php file to [prevent directory browsing](https://wordpress.stackexchange.com/q/114843/83335)
            -   📄 💡 `Localization.php` Allows to [override](../../php-development/predefined-classes.md#localization) used language, extends `./base/Localization.php`
        -   📁 `languages` Server-side [language files](../../php-development/localization.md)
            -   📄 `wp-reactjs-starter.pot` Language file can be translated with [Poedit](https://poedit.net/)
        -   📁 `public` [Client-side coding](../../typescript-development/utils-package.md) in React (TypeScript)
            -   📁 _`dev`_ Run [`yarn build:js:development`](../available-commands/plugin.md#build) to compile TypeScript to consumable JS files
            -   📁 _`dist`_ Run [`yarn build:js:production`](../available-commands/plugin.md#build) to compile TypeScript to minified consumable JS files
            -   📁 _`lib`_ Run [`yarn grunt libs:copy`](../available-commands/plugin.md#development) to copy external library files to this folder
            -   📁 `languages` Client-side [language files](../../typescript-development/localization.md)
                -   📄 `wp-reactjs-starter.pot` Language file can be translated with [Poedit](https://poedit.net/)
            -   📁 💡 `ts` Your frontend TypeScript [entrypoints](../../typescript-development/using-entrypoints.md) and coding
                -   📁 `components` React components
                    -   📄 `index.tsx` Export all members from this folder
                    -   📄 `page.tsx` Page component used in `src/inc/view/menu/Page.php`
                    -   📄 `todo.tsx` Example todo component consuming the store from `../store/todo.tsx`, used in `./page.tsx`
                    -   📄 `todoItem.tsx` Example todo item component, used in `./todo.tsx`
                -   📁 `models` Model definitions for your stores
                    -   📄 `index.tsx` Export all members from this folder
                    -   📄 `todoModel.tsx` Example todo item implementation, see `../store/todo.ts`
                -   📁 `store` [MobX](https://github.com/mobxjs/mobx) stores
                    -   📄 `index.tsx` Export all members from this folder
                    -   📄 `option.tsx` Option store, see `src/inc/base/Assets.php`
                    -   📄 `stores.tsx` Combine all available stores (see [this](https://mobx.js.org/best/store.html#combining-multiple-stores))
                    -   📄 `todo.tsx` Example Todo store implementation
                -   📁 `style` CSS styles as [SCSS](https://sass-lang.com/) files
                    -   📄 `admin.scss` Consumed in `../admin.tsx`, enqueued in `Assets.php`
                    -   📄 `widget.scss` Consumed in `../widget.tsx`, enqueued in `Assets.php`
                -   📁 `types` Additional [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
                    -   📄 `global.d.ts` Avoid errors of plain JS packages (see [this](https://git.io/JeMCt))
                -   📁 `utils` Utils and helpers
                    -   📄 `index.tsx` Create utils from `packages/utils/lib/factory` like i18n and AJAX handler
                -   📁 `widget` Example widget implementation, see `src/inc/view/widget/Widget.php`
                    -   📄 `index.tsx` React component for the widget container
                -   📁 `wp-api` WP REST API types
                    -   📄 `hello.get.tsx` Types for `wp-json/your-plugin/hello-world`, see `src/inc/rest/HelloWorld.php`
                    -   📄 `index.tsx` Export all members from this folder
                -   📄 `admin.tsx` Admin frontend coding ([entrypoint](../../typescript-development/using-entrypoints.md)), enqueued in `Assets.php`
                -   📄 `widget.tsx` Widget frontend coding ([entrypoint](../../typescript-development/using-entrypoints.md)), enqueued in `Assets.php`
        -   📄 💡 `index.php` Main plugin file making your plugin to a real WordPress plugin
        -   📄 `uninstall.php` [Uninstall file](https://developer.wordpress.org/plugins/plugin-basics/uninstall-methods/#method-2-uninstall-php)
    -   📁 `test` Test files and specs
        -   📁 💡 `cypress` Put your [E2E test](../../advanced/tests.md#e2e) files here
        -   📁 `jest` Put all your [Jest](../../advanced/tests.md#jest) tests here
        -   📁 `phpunit` Put all your [PHPUnit](../../advanced/tests.md#phpunit) tests here
        -   📄 `jest.config.js` Jest [configuration file](https://jestjs.io/docs/en/configuration)
        -   📄 `jest.setup.js` Jest [setup file](https://jestjs.io/docs/en/configuration#setupfiles-array)
        -   📄 `patchwork.json` Patchwork [configuration file](http://patchwork2.org/features/)
        -   📄 `phpunit.bootstrap.php` PHPUnit [bootstrap](https://phpunit.readthedocs.io/en/8.4/configuration.html) file
        -   📄 `phpunit.xdebug.php` PHPUnit + [XDebug filtering](<(https://xdebug.org/docs/code_coverage)>) for faster code coverage analysis
        -   📄 `phpunit.xml` PHPUnit [configuration file](https://phpunit.readthedocs.io/en/8.4/configuration.html)
    -   📁 _`vendor`_ Composer [vendor-dir](https://getcomposer.org/doc/06-config.md#vendor-dir)
    -   📁 `wordpress.org` wordpress.org related files for release in the plugin directory, see [here](../../gitlab-integration/deploy-wp-org.md)
        -   📁 `assets` Assets like banner and icons (see [this](https://developer.wordpress.org/plugins/wordpress-org/plugin-assets/))
        -   📄 💡 `README.wporg.txt` [Plugin readme](https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/)
    -   📄 `CHANGELOG.md` [Conventional](https://github.com/conventional-changelog/conventional-changelog) changelog output
    -   📄 `composer.json` Composer [configuration file](https://getcomposer.org/doc/04-schema.md)
    -   📄 `composer.lock` Composer [lock file](https://getcomposer.org/doc/01-basic-usage.md#installing-with-composer-lock)
    -   📄 `cypress.json` Cypress [configuration file](https://docs.cypress.io/guides/references/configuration.html#Options)
    -   📄 `LICENSE` Plugin license file
    -   📄 _`LICENSE_3RD_PARTY_JS.md`_ Yarn dependencies disclaimer, see [License checker](../../advanced/license-checker.md#javascript)
    -   📄 _`LICENSE_3RD_PARTY_PHP.md`_ Composer dependencies disclaimer, see [License checker](../../advanced/license-checker.md#php)
    -   📄 `package.json` Package [definition file](https://docs.npmjs.com/files/package.json)
    -   📄 `tsconfig.json` TypeScript [configuration file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), extends `common/tsconfig.json`
