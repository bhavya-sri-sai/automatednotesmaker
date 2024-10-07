// Function to load selected template
function loadTemplate() {
    const selectedTemplate = document.getElementById('template-select').value;
    const templateContainer = document.getElementById('note-content');

    // Clear existing content
    templateContainer.innerHTML = '';

    // Load the appropriate template based on selection
    if (selectedTemplate === 'lecture') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Lecture Notes</h2>
                <div>
                    <label for="subject">Subject</label>
                    <textarea id="subject" class="input-box" placeholder="Enter Subject"></textarea>
                </div>
                <div>
                    <label for="instructor">Instructor</label>
                    <textarea id="instructor" class="input-box" placeholder="Enter Instructor"></textarea>
                </div>
                <div>
                    <label for="key-points">Key Points</label>
                    <textarea id="key-points" class="input-box" placeholder="Enter Key Points"></textarea>
                </div>
                <div>
                    <label for="questions">Questions</label>
                    <textarea id="questions" class="input-box" placeholder="Enter Questions"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'meeting') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Meeting Notes</h2>
                <div>
                    <label for="meeting-topic">Meeting Topic</label>
                    <textarea id="meeting-topic" class="input-box" placeholder="Enter Meeting Topic"></textarea>
                </div>
                <div>
                    <label for="date-time">Date & Time</label>
                    <textarea id="date-time" class="input-box" placeholder="Enter Date & Time"></textarea>
                </div>
                <div>
                    <label for="attendees">Attendees</label>
                    <textarea id="attendees" class="input-box" placeholder="Enter Attendees"></textarea>
                </div>
                <div>
                    <label for="agenda">Agenda</label>
                    <textarea id="agenda" class="input-box" placeholder="Enter Agenda"></textarea>
                </div>
                <div>
                    <label for="action-items">Action Items</label>
                    <textarea id="action-items" class="input-box" placeholder="Enter Action Items"></textarea>
                </div>
                <div>
                    <label for="next-meeting">Next Meeting</label>
                    <textarea id="next-meeting" class="input-box" placeholder="Enter Next Meeting"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'project') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Project Planning</h2>
                <div>
                    <label for="project-name">Project Name</label>
                    <textarea id="project-name" class="input-box" placeholder="Enter Project Name"></textarea>
                </div>
                <div>
                    <label for="team-members">Team Members</label>
                    <textarea id="team-members" class="input-box" placeholder="Enter Team Members"></textarea>
                </div>
                <div>
                    <label for="milestones">Milestones</label>
                    <textarea id="milestones" class="input-box" placeholder="Enter Milestones"></textarea>
                </div>
                <div>
                    <label for="resources-needed">Resources Needed</label>
                    <textarea id="resources-needed" class="input-box" placeholder="Enter Resources Needed"></textarea>
                </div>
                <div>
                    <label for="deadlines">Deadlines</label>
                    <textarea id="deadlines" class="input-box" placeholder="Enter Deadlines"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'daily-journal') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Daily Journal</h2>
                <div>
                    <label for="date">Date</label>
                    <textarea id="date" class="input-box" placeholder="Enter Date"></textarea>
                </div>
                <div>
                    <label for="mood">Mood</label>
                    <textarea id="mood" class="input-box" placeholder="Enter Mood"></textarea>
                </div>
                <div>
                    <label for="reflections">Reflections</label>
                    <textarea id="reflections" class="input-box" placeholder="Enter Reflections"></textarea>
                </div>
                <div>
                    <label for="gratitude">Gratitude</label>
                    <textarea id="gratitude" class="input-box" placeholder="Enter Gratitude"></textarea>
                </div>
                <div>
                    <label for="tasks-tomorrow">Tasks for Tomorrow</label>
                    <textarea id="tasks-tomorrow" class="input-box" placeholder="Enter Tasks for Tomorrow"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'interview') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Interview Notes</h2>
                <div>
                    <label for="interviewee">Interviewee</label>
                    <textarea id="interviewee" class="input-box" placeholder="Enter Interviewee"></textarea>
                </div>
                <div>
                    <label for="date">Date</label>
                    <textarea id="date" class="input-box" placeholder="Enter Date"></textarea>
                </div>
                <div>
                    <label for="key-questions">Key Questions</label>
                    <textarea id="key-questions" class="input-box" placeholder="Enter Key Questions"></textarea>
                </div>
                <div>
                    <label for="responses">Responses</label>
                    <textarea id="responses" class="input-box" placeholder="Enter Responses"></textarea>
                </div>
                <div>
                    <label for="analysis">Analysis</label>
                    <textarea id="analysis" class="input-box" placeholder="Enter Analysis"></textarea>
                </div>
                <div>
                    <label for="next-steps">Next Steps</label>
                    <textarea id="next-steps" class="input-box" placeholder="Enter Next Steps"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'research') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Research Notes</h2>
                <div>
                    <label for="research-topic">Research Topic</label>
                    <textarea id="research-topic" class="input-box" placeholder="Enter Research Topic"></textarea>
                </div>
                <div>
                    <label for="hypothesis">Hypothesis</label>
                    <textarea id="hypothesis" class="input-box" placeholder="Enter Hypothesis"></textarea>
                </div>
                <div>
                    <label for="observations">Observations</label>
                    <textarea id="observations" class="input-box" placeholder="Enter Observations"></textarea>
                </div>
                <div>
                    <label for="findings">Findings</label>
                    <textarea id="findings" class="input-box" placeholder="Enter Findings"></textarea>
                </div>
                <div>
                    <label for="references">References</label>
                    <textarea id="references" class="input-box" placeholder="Enter References"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'task') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Task/To-Do List</h2>
                <div>
                    <label for="task">Task</label>
                    <textarea id="task" class="input-box" placeholder="Enter Task"></textarea>
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <textarea id="priority" class="input-box" placeholder="Enter Priority (Low, Medium, High)"></textarea>
                </div>
                <div>
                    <label for="deadline">Deadline</label>
                    <textarea id="deadline" class="input-box" placeholder="Enter Deadline"></textarea>
                </div>
                <div>
                    <label for="status">Status</label>
                    <textarea id="status" class="input-box" placeholder="Enter Status"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'budget') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Budget Tracker</h2>
                <div>
                    <label for="income">Income</label>
                    <textarea id="income" class="input-box" placeholder="Enter Income"></textarea>
                </div>
                <div>
                    <label for="expenses">Expenses</label>
                    <textarea id="expenses" class="input-box" placeholder="Enter Expenses"></textarea>
                </div>
                <div>
                    <label for="category">Category</label>
                    <textarea id="category" class="input-box" placeholder="Enter Category (Food, Rent, etc.)"></textarea>
                </div>
                <div>
                    <label for="amount">Amount</label>
                    <textarea id="amount" class="input-box" placeholder="Enter Amount"></textarea>
                </div>
                <div>
                    <label for="balance">Balance</label>
                    <textarea id="balance" class="input-box" placeholder="Enter Balance"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'shopping-list') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Shopping List</h2>
                <div>
                    <label for="item">Item</label>
                    <textarea id="item" class="input-box" placeholder="Enter Item"></textarea>
                </div>
                <div>
                    <label for="quantity">Quantity</label>
                    <textarea id="quantity" class="input-box" placeholder="Enter Quantity"></textarea>
                </div>
                <div>
                    <label for="category">Category</label>
                    <textarea id="category" class="input-box" placeholder="Enter Category (Food, Clothes, etc.)"></textarea>
                </div>
                <div>
                    <label for="budget">Budget</label>
                    <textarea id="budget" class="input-box" placeholder="Enter Budget"></textarea>
                </div>
            </div>`;
    } else if (selectedTemplate === 'habit-tracker') {
        templateContainer.innerHTML = `
            <div class="note-template">
                <h2>Habit Tracker</h2>
                <div>
                    <label for="habit">Habit</label>
                    <textarea id="habit" class="input-box" placeholder="Enter Habit"></textarea>
                </div>
                <div>
                    <label for="frequency">Frequency</label>
                    <textarea id="frequency" class="input-box" placeholder="Enter Frequency (Daily, Weekly, etc.)"></textarea>
                </div>
                <div>
                    <label for="goal">Goal</label>
                    <textarea id="goal" class="input-box" placeholder="Enter Goal"></textarea>
                </div>
                <div>
                    <label for="progress">Progress</label>
                    <textarea id="progress" class="input-box" placeholder="Enter Progress"></textarea>
                </div>
            </div>`;
    }
}

// Function to download the notes
function downloadNotes() {
    const notes = document.querySelectorAll('.input-box');
    let content = '';
    
    notes.forEach((note) => {
        content += note.placeholder + ':\n' + note.value + '\n\n';
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.txt';
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
