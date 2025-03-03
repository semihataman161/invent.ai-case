## How to run backend

1.  Create the .env file at the root of the project.

2.  Copy the contents of the .env.example file into .env file.

3.  **Run the command to install dependencies.**<br/>
    This command installs dependencies.

    ```bash
    npm install
    ```

4.  **Run the command to apply database migrations.**<br/>
    This command applies any pending database migrations.

    ```bash
    npm run prisma:migrate
    ```

5.  **Run the command to genereta Prisma client.**<br/>
    This command generates the Prisma client, which is used to interact with the database.

    ```bash
    npm run prisma:generate
    ```

6.  **Run the command to seed the database.**<br/>
    This command populates the database with initial data for development or testing purposes.

    ```bash
    npm run prisma:seed
    ```

7.  **Execute the command to run the project.**<br/>
    This command starts the project.

    ```bash
    npm run dev
    ```

8.  **Everything is ready. 🚀**

## How to run frontend

1.  Create the .env.development file at the root of the project.

2.  Copy the contents of the .env.example file into .env.development file.

3.  **Run the command to install dependencies.**<br/>
    This command installs dependencies.

    ```bash
    npm install
    ```

4.  **Execute the command to run the project.**<br/>
    This command starts the project.

    ```bash
    npm run dev
    ```

5.  **Everything is ready. 🚀**
