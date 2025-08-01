# My Book Store

A web-based application that allows users to add, view, and delete books using form inputs and a remote API. This project was created to demonstrate DOM manipulation, form handling, and async JavaScript using `fetch()`.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


---

## Prerequisites

To run this project, you’ll need:

- A modern web browser (Chrome, Firefox, etc.)
- [Visual Studio Code](https://code.visualstudio.com/) (or any code editor)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional but useful)


---

## Installing

### 1. Clone the repo

```bash
git clone https://github.com/your-username/bookstore-project.git
cd bookstore-project
```

### 2. Open `index.html` in your browser

You can also use the Live Server extension in VS Code:

```bash
Right-click on index.html → Open with Live Server
```

### 3. Add a new book

Fill out the form with a **Title**, **Author**, and optionally a **Publisher**, then click `Add Book`.

### 4. Delete a book

Click the `Delete` button next to any book entry to remove it from both the UI and the API.

---

## Running the tests

This project doesn't use a formal test framework, but here are the behaviors you can manually verify:

### test examples

- Add a book and verify it appears in the list.
- Delete a book and verify it disappears from the list and API.

Example:

```js
addBookToTable({
  title: "Atomic Habits",
  author: "James Clear",
  publisher: "Avery"
});
```

### Coding style check

- Code follows clean formatting and naming conventions.
- Uses `async/await` and `try/catch` for error handling.
- Uses `setAttribute`, `createElement`, and `addEventListener` for DOM interaction.

---

## Deployment

You can deploy this app using:

### GitHub Pages

1. Push code to GitHub repo.
2. Go to Settings → Pages.
3. Set source to `main` branch and root folder.
4. Visit the public URL provided.


## Built With

- **HTML5** – Semantic structure  
- **CSS3** – Styling and responsive layout  
- **JavaScript (Vanilla)** – DOM manipulation and API logic  
- **SweetAlert2** – Alert feedback messages  
- **Fetch API** – To connect with the remote REST API  
- **JSON Server (Optional)** – For local API testing

---

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for the code of conduct and pull request guidelines.

---

## Versioning

We use [SemVer](https://semver.org/) for versioning. For available versions, see the [tags on this repo](https://github.com/your-username/bookstore-project/tags).

---

## Authors

- **Andrea Arias** – Initial work – [@andreaparias17](https://github.com/andreaparias17)


---

## License

This project is licensed under the MIT License – see the [LICENSE.md](LICENSE.md) file for details.

---

## Acknowledgments

- [SweetAlert2](https://sweetalert2.github.io/) for clean modals
- Inspired by NPower DOM projects
- Thanks to mentors and classmates who provided feedback 🙌
