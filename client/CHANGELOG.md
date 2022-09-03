# Changelog

## 14.0.1
**Fixed bugs:**
- Fixed a bug causes menu malfunction in menu service.

## 14.0.0
**Migration Guide**
- Upgrade to PrimeNG 14
- Upgrade to Angular 14
  
**Implemented New Features and Enhancements:**
- Update to PrimeNG 14
- Update to Angular 14
- Add primary color variable to theme variables.

## 13.1.1
**Fixed bugs:**
- Router paths fixed

## 13.1.0
**Migration Guide**
- Update your project to PrimeNG 13.1.0
    
## 13.0.0
**Migration Guide**
- Update your project to Angular 13.
- Update theme files and layout files.

**Implemented New Features and Enhancements:**

- Upgrade to Angular and PrimeNG 13

## 12.2.0
**Migration Guide**
- Update theme files and layout files.

**Implemented New Features and Enhancements:**

- Styles of new PrimeNG components

## 12.0.0
**Migration Guide**
- Update your project to Angular 12.
- Update app.* components
- Update theme files and layout files.

**Implemented New Features and Enhancements:**

- Upgrade to Angular and PrimeNG 12
- Styles of new PrimeNG components
- PrimeFlex 3+ support

## 11.0.1
**Migration Guide**
- Update theme files and layout files.

**Fixed bugs:**

- Search panel is not visible (dark mode)

## 11.0.0
**Migration Guide**
- Update your project to Angular 11.
- Update app.main.component.ts and app.component.ts
- Update app.menu.component.ts and app.menuitem.component.ts
- Update theme files and layout files.

**Implemented New Features and Enhancements:**

- Upgrade to Angular and PrimeNG 11
- Styles of new PrimeNG components

## 10.1.0

**Migration Guide**
- Update theme files and layout files.
- Update app.* components
- Use app.inlinemenu.component instead of app.profile.component

**Implemented New Features and Enhancements:**

- Implemented new Ultima design
- Added dark mode, topbar and menu colors

## 10.0.1

**Migration Guide**
- Update app.component.ts and app.main.component.ts
- Update app.login.component.html
- Update layout css files.
- Update theme css files.

**Fixed bugs:**

- Ripple effect is not working outside of the main application
- Ripple effect is not working on Login page

## 10.0.0

**Migration Guide**
- Update your project to Angular 10.
- Update theme files and layout files.

**Implemented New Features and Enhancements:**

- Migrate to PrimeOne Design Architecture
- Upgrade to Angular and PrimeNG 10

## 8.0.1 to 9.0.0

Angular 9 and PrimeNG 9

- Update dependencies with [ng update](https://angular.io/cli/update).
- Update theme.css and layout.css files.
- Update app.menu.component.ts while retaining your MenuModel.
- Include app.menuitem.component.ts under app folder and define it app.module.ts with declarations property.
- Include app.menu.service.ts under app folder and define it app.module.ts with providers property.

## 8.0.0 to 8.0.1

- Update layout css files.
- Update theme css files.

## 7.1.1 to 8.0.0

- Update your project to Angular 8 with ng update. View the official update guide -[https://update.angular.io/](https://update.angular.io/)- for more information.
- Update app.main.component.ts.
- Update app.menu.component.ts.
- Update app.rightpanel.component.ts.
- Update layout css files.
- Update theme css files.

## 7.1.0 to 7.1.1

- Update layout css files.
- Update theme css files.

## 7.0.1 to 7.1.0

- Update layout css files.
- Update theme css files.

## 7.0.0 to 7.0.1

- Update theme css files.

## 6.1.1 to 7.0.0

- Update layout css files.
- Update theme css files.

## 6.1.0 to 6.1.1

- Update layout css files.
- Update theme css files.

## 6.0.0 to 6.1.0

Adds support for new features in PrimeNG 6.1.x

- Update theme css files.

## 5.2.4 to 6.0.0

Brings support for Angular 6 and RxJS 6, adds theming for new components in PrimeNG such as the new TreeTable and improves behaviors of the layout menus.

- Update app.module.ts and app.component.ts.
- Update app.topbar.component.ts.
- Update app.profile.component.ts.
- Update app.menu.component.ts.
- Update app.breadcrumb.component.ts and app.breadcrumb.service.ts.
- Update layout css files.
- Update theme css files.

## 5.2.3 to 5.2.4

- Update theme css files.

## 5.2.2 to 5.2.3

- Update layout css files.
- Update theme css files.

## 5.2.1 to 5.2.2

- Update layout css files.
- Update theme css files.

## 5.2.0 to 5.2.1

Aligns input focus animation with the Material specs.

- Update layout css files.
- Update theme css files.

## 5.0.0 to 5.2.0

Adds support for PrimeNG 5.2.0 (e.g. TurboTable), replaces nanoscroller with PrimeNG ScrollPanel and reimplements ripple effect to run outside of NgZone for better performance.

- Remove nanoscroller as it is replaced by ScrollPanel component of PrimeNG.
- Update app.component.ts and app.component.html.
- Update app.menu.component.ts.
- Update app.rightpanel.component.ts.
- Update layout css files.
- Update theme css files.

## 4.3.0 to 5.0.0

- Update app.component.ts and app.component.html.
- Define breadcrumbservice as a provider in your app.module
- Update layout css files.
- Update theme css files.

## 4.2.0 to 4.3.0

- Update theme css files.

## 4.1.1 to 4.2.0

- Update app.*.ts and app.*.html files under app folder.
- Update theme css and layout css files.

## 4.0.1 to 4.1.0

- Update layout css files.
- Update theme css files.
- Update AppSubmenu component in app.menu.component.ts.

## 4.0.0 to 4.0.1

- Update layout css files.

## 2.1 to 4.0.0

- Includes version updates to PrimeNG 4 and Angular 4.
- Update theme css files.

## 2.0.5 to 2.1.0

- Project is updated to CLI RC2, Angular 4-RC3 and PrimeNG 4-RC1.
- Add _import {trigger,state,style,transition,animate} from '@angular/animations';_ to app.menu.components.ts and remove these imports from 'angular/core'.
- Add _import {BrowserAnimationsModule} from '@angular/platform-browser/animations';_ to app.module.ts and import the module to your application.
- Update theme css files, there are no changes to the layout.

## 2.0.4 to 2.0.5

- No change required, missing .angular-cli.json file in 2.0.4 is added.

## 2.0.3 to 2.0.4

- No change required, only CLI version is updated to RC

## 2.0.2 to 2.0.3

- Update AppSubmenu component in app.menu.component.ts by replacing the itemClick method implementation.
- Update layout css files, there are no changes on themes.
- Update app.component.ts by changing onTopbarMenuButtonClick method implementation to add _event.preventDefault()_ at the end.
- Remove [ngClass]="{'menu-button-rotate': app.rotateMenuButton}" from menu-button in app.topbar.component.ts.

## 2.0.1 to 2.0.2

- Update AppSubmenu component in app.menu.component.ts
- Update layout css files, there are no changes on themes.
- Update app.component.ts.
- Add pInputText to search input at app.topbar.component.ts

## 2.0.0 to 2.0.1

- Update AppSubmenu component in app.menu.component.ts
- Update layout css and theme css files.
- Update app.component.ts.

## 1.1.0 to 2.0.0

- Update PrimeNG to at least 2.0.
- Replace app.component.ts and app.component.html
- Remove layout.js
- Update the scripts and styles section at angular-cli.json
- Define menu using PrimeNG MenuModel

## 1.0.3 to 1.1.0

- Update css files of layout and theme.

## 1.0.2 to 1.0.3

- Update css files of layout and theme.

## 1.0.1 to 1.0.2

- Update layout.js

## 1.0.0 to 1.0.1

- Update layout.js
