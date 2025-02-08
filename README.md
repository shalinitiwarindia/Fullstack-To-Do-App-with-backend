

# **TODO App (Full Stack with Express & React)**

A simple **full-stack** TODO app built using **Express.js** (Backend) and **React.js** (Frontend). It allows users to **add, edit, delete, and update** their tasks.

## **🛠 Features**
- ✅ Add new tasks  
- ✅ Edit existing tasks  
- ✅ Mark tasks as completed  
- ✅ Delete tasks  
- ✅ Uses **Nano ID** for unique task IDs  
- ✅ File-based storage (todos.json)  

---

## **🚀 Installation and Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/todo-app.git
cd todo-app
```

### **2️⃣ Backend Setup (Express Server)**
```sh
cd todo-api-server
npm install
```

#### **Install Nano ID**
```sh
npm install nanoid
```

### **3️⃣ Start the Backend Server**
```sh
node server.js
```
The server will run at **http://localhost:5000/**.

---

### **4️⃣ Frontend Setup (React App)**
Open a **new terminal**, go to the frontend folder, and install dependencies:
```sh
cd ../todo-frontend
npm install
```

### **5️⃣ Start the React Frontend**
```sh
npm start
```
The frontend will run at **http://localhost:3000/**.

---

## **🛠 API Endpoints**
| Method | Endpoint  | Description |
|--------|----------|-------------|
| **GET**  | `/` | Get all TODOs |
| **POST** | `/` | Add a new TODO |
| **PUT**  | `/:id` | Update a TODO (edit title or mark completed) |
| **DELETE** | `/:id` | Delete a TODO |

---

## **📌 Technologies Used**
- **Backend:** Node.js, Express.js, Nano ID, File-based storage  
- **Frontend:** React.js, Axios, CSS  
- **Storage:** `todos.json` (File-based database)  

---

## **🎯 Future Improvements**
- ✅ Add **MongoDB** for database storage  
- ✅ Implement **Authentication (Login/Signup)**  
- ✅ Use **Redux for state management**  
- ✅ Add **Due Dates & Reminders**  

---

## **📌 Screenshots**

![image](https://github.com/user-attachments/assets/3a3e8e61-588a-4db9-89a6-d967e50c411e)
![image](https://github.com/user-attachments/assets/ae0cff6e-96ce-46cb-b1c6-19819586958e)
![image](https://github.com/user-attachments/assets/1a96edf9-776a-4f08-8dd6-155e8c7a9b2f)

---

## **🔗 Contributing**
If you want to contribute:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a **Pull Request**


