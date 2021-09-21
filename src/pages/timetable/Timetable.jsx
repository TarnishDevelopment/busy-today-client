import "./timetable.css"

export default function Timetable(){
    return(
    <div className = "timetable">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>golomp</td>
            <td>busy</td>
            <td>avaible</td>
            <td>avaible</td>
            <td>avaible</td>
            <td>avaible</td>
            <td>avaible</td>
            <td>busy</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}
