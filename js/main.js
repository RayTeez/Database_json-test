const template = document.querySelector('#template');

Array.from(template.children).forEach(getCont =>{  //getEl is general for get Element.

    const getName = (getdb) => { 

        const request =new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            // console.log(request, request.readyState);
            if(request.readyState ===4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                // console.log(data);


                // if(getCont.textContent.includes('${name}')){ //if the tag includes content template, its a content tag.

                //     getCont.textContent = data[getdb].name   

                // }  else if(getCont.textContent.includes('${text}')){

                //     getCont.textContent = data[getdb].text

                // };


                if(getCont.textContent.includes('${')){ //if the tag includes content template, its a content tag.


                    const doThis = ()=>{

                        console.log(tempCont);
                    };

                    const tempCont = getCont.textContent.split('{')[1].split('}').shift(); //complex.. but basically it gets the template Content and input in to Array to know what property to get;
                    
                    getCont.textContent = data[getdb][tempCont]; //<<<-----IMPORTANT------//

                    // doThis();

                }  


            } else if (request.readyState === 4 || request.status == 404 ){
        
                console.log('Error 404');
                // console.log(getCont);
                getCont.style.color='red'; //content tag will change color to red if error with the database 
            } 
        });

        request.open('GET','js/database.json');
        request.send();

    }

    const dbNum = parseInt(
        getCont
        .textContent
        .split('[')[1]
        ); //This gets the number from the Content tags, Turns in to a number and gets the Array index form the database.
    // console.log(dbNum);


    // const tempCont = getCont.textContent.includes('$').split('{')[1].split('}').shift();

    getName(dbNum);

});

console.log(template.children);

Array.from(template.children).forEach(getCont =>{

    console.log(getCont);

});


