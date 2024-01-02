# P14_DropDownMenu
[Source](https://www.npmjs.com/package/p14_dropdownmenu#p14_dropdownmenu)

## To import this package to your project
- run `npm i p14_dropdownmenu`  

## Importing into React
```
import DropDownMenu from 'p14_dropdownmenu';

<DropDownMenu name{name} id={id} className={className} data={data}/>
```  

## Props
- `name`: html tag name
- `id`: html tag id
- `className`: your custom css class
- `data`: a json with a name key

## Json file formatting
- The json MUST have a `name` key, each key will be a choice in the select menu.
- Two examples of json file used for this package : [StateList.json](https://github.com/AymericFelisiak/P14_HRNet/blob/main/src/data/StateList.json) and [DepartmentList.json](https://github.com/AymericFelisiak/P14_HRNet/blob/main/src/data/DepartmentList.json)  
- You don't necessary need a JSON file, you can just pass your data like this too :  
```
const data = [
    {
        "name": "1"
    },
    {
        "name": "2"
    }
    ...
]

<DropDownMenu name{name} id={id} className={className} data={data}/>
```

## 1. About this package
This is a React component to create a custom select menu.  

## 1.1 Prerequisites
- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## 2. Launching the app

### 2.1 Installing dependencies
- Fork the repository
- Clone it on your computer
- Open in your IDE
- run `yarn install` to install the dependencies
