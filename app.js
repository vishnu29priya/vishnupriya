body {
    background-image: url(bk.jpeg);
    background-size: cover;
}
.header {
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 50px;
}
.container {
    width: 78%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: black;
    border: 10px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background: transparent;
    margin-bottom:20px;
}
.first {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 45px;
}
.todo-input {
    font-family: 'Courier New', Courier, monospace;
    padding: 10px;
    margin-right: 10px;
    font-weight: bold;
    font-size: 20px;
    color: black;
    border-radius: 4px;
    border: 1px solid darkblue;
    width: 300px;
}
.button {
    font-family: 'Courier New', Courier, monospace;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 20px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: green;
}
.button:hover {
    opacity: 0.8;
}
.todo-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.todo-text {
    flex: 1;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
}
.edit-btn, .delete-btn {
    margin-left: 10px;
    font-family: 'Courier New', Courier, monospace;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.edit-btn {
    background-color: blue;
}
.delete-btn {
    background-color: red;
}
.books {
    width: 50px;
}
.list{
    width:300px;
    margin-left:550px;
    align-items: center;
    border: 4px;
    padding:10px;
    border-radius: 10px;
    border-color:black;
}
