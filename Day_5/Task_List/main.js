class Task {
    constructor(title, completed, actions) {
      this.title = title;
      this.completed = completed;
      this.actions = actions;
    }
  }

  class userInterface {
    constructor() {
        this.titleInput = document.getElementById('title-input');
        this.authorInput = document.getElementById('completed-input');
        this.form = document.getElementById('form');
        this.tableBody = document.getElementById('table-body');
    
        this.tasks = [];
      }

      bindEventListeners() {
        this.form.addEventListener('submit', (e) => this.onFromSubmit(e));
      }

      onFromSubmit(event) {
        event.preventDefault();
    
        const task = new tasl(
          this.titleInput.value,
          this.completedInput.value,
          this.isbnInput.value,
        );
    
        this.books.push(book);
        this.populateTasksTable();
    
        this.titleInput.value = '';
        this.authorInput.value = '';
        this.isbnInput.value = '';
      }
    
      populateTasksTable() {
    
        this.tableBody.innerHTML = '';
    
        for (const book of this.books) {
          const row = document.createElement('tr');
    
          const titleCell = document.createElement('td');
          const authorCell = document.createElement('td');
          const isbnCell = document.createElement('td');
          const actionsCell = document.createElement('td');
    
          const removeButton = document.createElement('button');
    
    
          titleCell.innerHTML = book.title;
          authorCell.innerHTML = book.author;
          isbnCell.innerHTML = book.isbn;
          removeButton.innerHTML = 'X';
    
          removeButton.addEventListener('click', (e) => this.onRemoveButtonClick(book));
          actionsCell.append(removeButton);
    
          row.append(titleCell);
          row.append(authorCell);
          row.append(isbnCell);
          row.append(actionsCell);
          this.tableBody.append(row);
        }
    
      }
  }

  const ui = new UserInterface();
  ui.bindEventListeners();