console.log("i am app");

d3.json("/api/songs").then(data => {
    console.log('this is data loaded from the api. ');
    console.log(data);
    data.forEach(element => {
        console.log(element)
    });
})