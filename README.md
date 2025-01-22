# Startup Browser

Startup Browser is a web application designed to help users browse and clone startup framework samples effortlessly.

This is a practice implementation of [Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App](https://www.youtube.com/watch?v=Zq5fmkH0T78) and the [yc_directory](https://github.com/adrianhajdin/yc_directory) repo
## Features

- **Sample Browsing**: Quickly navigate through various startup framework samples.
- **Project Cloning**: Clone selected samples to your local environment for customization and development.

## Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/omarmagh/startupbrowser.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd startupbrowser
   ```

3. **Install Dependencies**:

   ```bash
   npm install --legacy-peer-deps
   ```

## Usage

1. **Start the Development Server**:

   ```bash
   npm run dev
   ```

2. **Open in Browser**:

   Navigate to [http://localhost:3000](http://localhost:3000) to access the application.

3. **Browse Samples**:

   Use the interface to explore available startup framework samples.

4. **Clone a Sample**:

   Click on the "Clone" link next to a sample to clone it to your desired path. This action will pull in all necessary dependencies into the `/vendor` directory.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Sanity.io**: A platform for structured content.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity.io](https://www.sanity.io/)

---

*Note: This project is a work in progress. Some features may not be fully implemented yet.* 