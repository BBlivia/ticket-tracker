document.getElementById('issueInputForm').addEventListener('submit', saveIssue)



function fetchIssues(){
    let issues = JSON.parse(localStorage.getItem('issues'))
    let issuesList = document.getElementById('issuesList')

    issuesList.innerHTML = '';

    for(let i = 0; i < issues.length; i++){
        let id = issues[i].id
        let subject = issues[i].subject
        let description = issues[i].description
        let severity = issues[i].severity
        let assignedTo = issues[i].assignedTo
        let status = issues[i].status
        let statusColor = status == 'Closed'? 'label-success' : 'label-info'

        //issuesList.innerHTML += 
    }
}


function saveIssue(e){
    let issueId = chance.guid()
    let issueSubject = document.getElementById('issueSubjInput')
    let issueDescription = document.getElementById('issueDesInput')
    let issueSeverity = document.getElementById('issueSeverityInput')
    let issueAssignedTo = document.getElementById('issueAssignedInput')
    let issueStatus = 'Open'


    // indivisual issue 
    let issue = {
        id: issueId,
        subject: issueSubject,
        description: issueDescription,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    // checking if item is in storage, so it will be stored and saved in local storage 
    if( localStorage.getItem('issues' === null)){
       let issues = []
       issues.push(issue)
       localStorage.setItem('issues', JSON.stringify(issues))
    }else{
        let issues = JSON.parse(localStorage.getItem('issues'))
        issues.push(issue)
        localStorage.setItem('issues', JSON.stringify(issues))
    }

    document.getElementById('issueInputForm').reset()


    fetchIssues()

    e.preventDefault()
}

