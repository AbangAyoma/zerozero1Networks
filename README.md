# Zero Zero Network (Web Development & Cybersecurity)

This project is an online training platform designed to offer courses in **Web Development** and **Cybersecurity**. The platform allows students to track their learning progress, submit assignments, and manage payments with a two-installment payment plan.

## Features
- **User Dashboard:** Displays user information, progress bar, and time remaining in weeks and days.
- **Payment System:** Supports a two-installment plan.
- **Course Categories:** Web Development (Frontend & Backend) and Cybersecurity.
- **Assignments:** Students can submit assignments and view grades.
- **Progress Tracking:** Visual progress bars to track completion.
- **Comments Section:** Students can engage in discussions.

## Tech Stack
### Frontend
- **React** with TypeScript
- **React Router** for routing
- **TailwindCSS** for styling
- **shadcn/ui** for reusable UI components

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (or any preferred database)

## Project Structure
```
src/
├── components/
│   └── ui/            # Reusable UI components (Card, Buttons, etc.)
├── pages/
│   ├── HomePage.tsx
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── PaymentPage.tsx
└── App.tsx            # Main app component
```

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbangAyoma/zerozero1Networks.git
   cd zerozero1Networks
   ```

2. **Install dependencies:**
   ```bash
   cd server && npm install
   cd client && npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Available Pages
- `/`: Home page
- `/dashboard`: User dashboard
- `/login`: User login page
- `/register`: User registration page
- `/payment`: Payment page

## Suggested Next Steps
- **Authentication:** Implement secure user login and registration.
- **Backend Integration:** Connect the frontend to backend APIs.
- **Payment System:** Develop logic for handling installment payments.
- **Assignment Module:** Create assignment submission and grading system.

## Contribution Guidelines
1. Fork the repository.
2. Create a new feature branch (`git checkout -b your-feature-name`).
3. Commit your changes with descriptive messages (`git commit -m "Implemented [feature name or task]"`).
4. Push your changes (`git push origin your-feature-name`).
5. Open a pull request for review.

## License
This project is licensed under the [MIT License](LICENSE).

---
Let's build something impactful and user-friendly for online learning! 🚀
