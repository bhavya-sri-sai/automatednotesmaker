function showProjectInfo() {
    var projectInfo = document.getElementById('project-info');
    if (projectInfo.style.display === 'none' || projectInfo.style.display === '') {
        projectInfo.style.display = 'block';
    } else {
        projectInfo.style.display = 'none';
    }
}

function showTeamMembers() {
    var teamMembers = document.querySelector('#team-column ul');
    if (teamMembers.style.display === 'none' || teamMembers.style.display === '') {
        teamMembers.style.display = 'block';
    } else {
        teamMembers.style.display = 'none';
    }
}