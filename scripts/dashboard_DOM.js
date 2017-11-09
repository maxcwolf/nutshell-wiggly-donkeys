//Author: Paul Ellis; Purpose: function that populates the dashboard

const Database = JSON.parse(localStorage.getItem("Database"))//access the main database
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the main database
const dashboard = document.getElementById("dashboard")

const populateDOM = DOM => {
    dashboard.innerHTML += `
    <!-- messages input -->
    <div id="messages">
    <div id="messageForm">
    <h2 id=messageForm_title>New Message</h2>
    <textarea id=messageForm_text rows="4" cols= "20"></textarea>
    <button id="messageForm_saveButt">Send</button>
    </div>
    <div id="messageOutput">
    </div>
    <div>

    <div class="button">
    <button id="taskForm__newButt">New Task</button>
</div>
<form id="taskForm" class="taskForm hidden">
    <div>
        <label for="taskForm__taskName">Name:</label>
        <input type="text" id="taskForm__taskName" name="taskForm__taskName">
    </div>
    <div>
        <label for="taskForm__completionDate">Expected Completion Date (mm/dd/yy)</label>
        <input type="text" id="taskForm__completionDate" name="taskForm__completionDate">
    </div>
    <div class="button">
        <button id="taskForm__saveButt">Save Task</button>
    </div>
</form>

<article>
<form name="article__form">
    <label>Date</label>
        <input type="date" name='articleForm__date' id="" value="Date">
    <label>URL</label>
        <input type="text" name='articleForm__url' value="URL">
    <label>Note</label>
        <textarea name="'articleForm__note'" id="note" name="Notes" cols="30" rows="10"></textarea>
    <label>Post</label>
        <input type="button" id="articleForm__saveButt" class="article__button" value="Post Article">
</form>
    `
}

module.exports = populateDOM