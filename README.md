# Information
* node version: v20.10.0
* blocklect version: v1.16.29
* app components: Vue + Express 
* database: sqlite
* mount path: 
  - vue: /
  - express: /api/

## Local Test
* vue :  
```
blocklet dev --mount-point /
```
* express : 
```
blocklet dev --app-did=<app-id> --mount-point /api/
```

## Deploy
* vue :  
```
yarn deploy --mount-point /
```
* express : 
```
yarn deploy:child --mount-point /api/
```

## Content Display
* Block server console
![console](images/screenshot-1.png)

* User Profile page
![userProfile](images/screenshot-2.png)

* Edit mode and format validation
![validation](images/screenshot-3.png)

* When using phone
![phone](images/screenshot-4.png)

