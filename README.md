# localStorage App v_1

## Test Application working with localStorage. Main tools.

This Application was created by Mikhail Syropyatov. 
Applicataion uses:
1. Bootstrap 4.
2. Material Ui.
3. React Router.
4. React hooks.
5. Native react.

Application fully supporting all screens(adaptivity).

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

Head component just a simple head of site, on which can be placed other components if you need. At this moment there is only 3 optional links (/#) on
Instagramm, Facebook, twitter.

### 2. Router component

At this step there is Switch beetween 4 compenents:
#### 1. Users
Main list of users component. There you can filter or search user. There generating list going on from localStorage. 
This component includes <b>List of Mail</b> component, which generates JSON from a localStorage.
#### 2. User
Component which provides to read all information about User.
#### 3. SignIn
Component which provides creation of new User in localStorage. It checking validaty of values with regular expressions and checking that email does not exists yet.
#### 4. EditUser
Component which provides to update information about a user. As a <b>SignIn</b> component, this component check  validaty of values with regular expressions and checking that email does not exists yet.

## Starting project.
To look on deployed project you can go to the link, if it is still working:
https://myappsetup.herokuapp.com/UserRead


To start  you can do next:
In the project directory, you can run:

#### `npm start`

## Testing Application

Application  was tested with a next situations:

1. User was created with one(or more) empty value(s) (user will be not created).
2. Trying to create user with existing email (user will not be created).
3. Trying to create user with no validaty telephone, name, email. And with not matching password (user will not be created).
4. Trying to update inly one value (only one value will be updated).
5. Normal full update of user (user will be updated).
6. Delete user from a localStorage by using Browser utils and check list (User will not appear).

## Thing to improve

1. In searching and filtering now uses display (none, block) of CSS 3. It was choosed because it is faster and no need to rerender component. But i think is should work with using a states of component. Will improve later.
2. Warning in browser. Need to delete values that was created but unused.
3. Solve other Warning problems.
4. Create filtering that can be Using in chain with searching (now only process of one can works).
5. Saving hash of a password not value.
6. Add regular expression for password that it will be protected(numbers,lowercase letters, uppercase latters, symbols).
7. When deleting a User, there need to be exist window which will ask "Are you sure?". If "No" than not delete.
8. I think there can be more.
