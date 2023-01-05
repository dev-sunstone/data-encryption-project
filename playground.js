npx sequelize-cli model:generate --name Users --attributes name:string,email:string,phone:String






email: Sequelize.fn(‘AES_ENCRYPT’, email,  AES_KEY)






const AES_KEY =  "PbbDAqTuXWGWqXcaHiuNvuhc7n4aTapm4YfhyNi4bHOFnAvWBvevo0maQqzmZMZxOmw24t8zbQioY9iRD3iBo7AcCCAFEmQms/ghLDiYy+8="
