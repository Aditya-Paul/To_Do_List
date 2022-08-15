function submission(){
    const getinfo = id => document.getElementById(id)
    const description = getinfo("Description").value
        //console.log(description);
    const datetime = getinfo("date-group1-4").value
    const id = Math.floor(Math.random()* 100000000)
    if(description.length == 0 ){
    alert("Please fill these field with valid information")
    }
    else{ 
        const issue = {description, datetime,id}
        let tasks = []
        
        if(localStorage.getItem("getissue")){
            tasks = JSON.parse(localStorage.getItem("getissue"))
        }
        tasks.push(issue)
        localStorage.setItem("getissue", JSON.stringify(tasks))
        console.log(tasks)
    }
    fetchIssues()  
    }

    function closeIssue(id){
        let tasks = JSON.parse(localStorage.getItem("getissue"))
        const data = tasks.find(close => close.id == id)
        data.status = 'closed'
        // i add this strike on the destription after click on the close option
        data.description = `<strike>${data.description}</strike>`
        localStorage.setItem("getissue", JSON.stringify(tasks))
        fetchIssues()
    }

    function deleteIssue(id){
        let tasks = JSON.parse(localStorage.getItem("getissue"))
        let data = tasks.filter(x => x.id != id)
        localStorage.removeItem("getissue")
        localStorage.setItem("getissue", JSON.stringify(data))
        
        fetchIssues()
    }

    function fetchIssues(){
        let tasks = JSON.parse(localStorage.getItem("getissue"))
        let issuelist = document.getElementById ("display")
        issuelist.innerHTML = ''

        for (let i = 0; i < tasks.length; i++) {
            let {description, datetime,id} = tasks[i];
            
            issuelist.innerHTML += `<div class="well">
                                    <h3> ${description} </h3>
                                    <p><span class="glyphicon glyphicon-time"></span> ${datetime}</p>
                                    <button onclick="closeIssue(${id})" class="btn btn-warning">Done</button>
                                    <button onclick="deleteIssue(${id})" class="btn btn-danger">Delete</button>
                                    </div>`;
        }
    }
    fetchIssues()