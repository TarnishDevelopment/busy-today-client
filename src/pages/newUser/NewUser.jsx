import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password"  />
        </div>
        <div className="newUserItem">
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}