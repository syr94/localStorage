# localStorage App v_1

## Test Application working with localStorage. Main tools.

This Application was created by Mikhail Syropyatov. 
Applicataion uses:
1. Bootstrap 4.
2. Material Ui.
3. React Router.
4. React hooks.
5. Native react.

This Application have CRUD(create, read, update, delete) of Users:

###1. Create Users accaount in localStorage of browser, with next data:

1.1 email (with validaty of incoming values using regular expression and cheking for not existing same user with this email).
1.2 telephone (with validaty of incoming values using regular expression).
1.3 Surname Name (with validaty of incoming values using regular expression).
1.4 Password (not hash value).
1.5 Status (one of three: Admin, Partner, Client).
1.6 Creating date (Date when account was created).
1.7 Change Date  (Date when user data was changed).

### 2.Read User informaton.

Main list of Users have options to <b>filter with status</b> and <b>search values by telephone number or email</b>.

If you <b>Click</b> on one of the user, <b>user read form</b> will open. In that from you can read all information about user.

### 3. Update User information.

In update User form you can see previous data of user and change every value of:

1.1 email (with validaty of incoming values using regular expression and cheking for not existing same user with this email).
1.2 telephone (with validaty of incoming values using regular expression).
1.3 Surname Name (with validaty of incoming values using regular expression).
1.4 Password (not hash value).
1.5 Status (one of three: Admin, Partner, Client).

Creating data still same, and Change data will update with time when user was updated.

### 4. Delete User.

On a Read From there placed special red button for delete user.
This button fully delete all information about a user.

## Architecture of a project.

1. In <b>App</b> there special <b>Main</b> component.
This <b>Main</b> component consist of three parts:

### 1. Head component


To start  you can do next:
In the project directory, you can run:

#### `npm start`


