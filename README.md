
Simple website with typescript and webpack without any app (angular/react/vue/...).

## Structure

.  
├── package.json  
├── tsconfig.json  
├── webpack.config.js  
├── bs-config.js  
│  
├── src/  
│   ├── html/index.html  
│   ├── ts/main.ts  
│   └── ts/types/global.d.ts  
│  
└── build/  

* File `package.json`: Configuration of project and dependencies
* File `tsconfig.json`: Configuration of typescript
* File `webpack.config.js`: Configuration of webpack
* File `bs-config`: Configuration of browser-sync
* Directory `build`: Output of project (html, js, ...)
* Directory `src/html`: Static files of project (*.html)
* Directory `src/ts`: Code files of project (*.ts)
* Directory `src/types`: Global type definitions of project (*.ts)

## How use

#### Install 
``` sh
npm install
```

#### Run 
``` sh
npm start
```

Now, open internet browser and show site.

![How to run](./doc/run.gif)

## Next
* Clone project
* Add your dependencies
* Create/Change
  * _html files_
  * _javascript files_
  * _ts files_
  * _images_
  * ....
* See result
